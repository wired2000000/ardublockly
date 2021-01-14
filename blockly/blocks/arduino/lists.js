/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Arduino list functionality.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: This block can be improved to set the new range properly.
 */
'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
//goog.require('Blockly.FieldVariableList');
//Blockly.Blocks.lists = {};
Blockly.Blocks.lists.HUE = 330;
Blockly.Blocks.lists.HUE2 = 75;
Blockly.Blocks.lists_create_with = {
    init: function () {
        var varName = "number_list_" + Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE;
        var count = 1;
        if (Blockly.Arduino.variables_ != undefined) {
            while (Blockly.Arduino.variables_[varName] != undefined) {
                varName = "number_list_" + Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE + "_" + count;
                count++;

            }
        }
        //varName="number_list_"+varName;
        this.setHelpUrl('http://arduino.cc/en/Reference/HomePage');
        this.setColour(Blockly.Blocks.lists.HUE);
        this.appendDummyInput("")
        .appendField(new Blockly.FieldVariable(varName), "VAR");
        this.itemCount_ = 3;
        this.updateShape_();
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP)
    },
    getVarsList: function () {
        return [this.getFieldValue("VAR")]
    },
    renameVarList: function (a, b) {
        Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR")
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },

    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('lists_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
            .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};
Blockly.Blocks.lists_getIndex = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.setOutput(!0, "Number");
        this.appendValueInput("AT").setCheck("Number").appendField(new Blockly.FieldVariable('number_list_'+Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), "VAR").appendField(Blockly.Msg.LISTS_GET_INDEX_GET);
        this.setInputsInline(!0)
    }
};
Blockly.Blocks.lists_setIndex = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.appendValueInput("AT").setCheck("Number").appendField(new Blockly.FieldVariable('number_list_'+Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), "VAR").appendField(Blockly.Msg.LISTS_SET_INDEX_SET);
        this.appendValueInput("TO").setCheck("Number").appendField("=");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0)
    }
};
Blockly.Blocks.lists_length = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.appendDummyInput("").appendField(Blockly.Msg.LISTS_LENGTH_TITLE).appendField(new Blockly.FieldVariable(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), "VAR");
        this.setTooltip(Blockly.Msg.LISTS_LENGTH_TOOLTIP);
        this.setOutput(!0, "Number")
    }
};
Blockly.Blocks.lists_create_with_text = {
    init: function () {
        var varName = "text_list_" + Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE;
        var count = 1;
        if (Blockly.Arduino.variables_ != undefined) {
            while (Blockly.Arduino.variables_[varName] != undefined) {
                varName = "text_list_" + Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE + "_" + count;
                count++;

            }
        }
        //varName="text_list_"+varName;
        this.setColour(Blockly.Blocks.lists.HUE2);
        this.appendDummyInput("").appendField(new Blockly.FieldVariable(varName), "VAR");
        this.itemCount_ = 3;
        this.updateShape_();
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setMutator(new Blockly.Mutator(["lists_create_with_item_text"]));
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP)
    },
    getVarsListText: function () {
        return [this.getFieldValue("VAR")]
    },
    renameVarListText: function (a, b) {
        Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR")
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('lists_create_with_container_text');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item_text');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        var connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function (containerBlock) {
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
            .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i);
                if (i == 0) {
                    input.appendField(Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH);
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};

Blockly.Blocks.lists_create_with_container_text = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE2);
        this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
Blockly.Blocks.lists_create_with_item_text = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE2);
        this.appendDummyInput().appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = !1
    }
};
Blockly.Blocks.lists_getIndex_text = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE2);
        this.setOutput(!0, "String");
        this.appendValueInput("AT").setCheck("Number").appendField(new Blockly.FieldVariable('text_list_'+Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), "VAR").appendField(Blockly.Msg.LISTS_GET_INDEX_GET);
        this.setInputsInline(!0)
    }
};
Blockly.Blocks.lists_setIndex_text = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE2);
        this.appendValueInput("AT").setCheck("Number").appendField(new Blockly.FieldVariable('text_list_'+Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), "VAR").appendField(Blockly.Msg.LISTS_SET_INDEX_SET);
        this.appendValueInput("TO").setCheck("Text").appendField("=");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0)
    }
};
Blockly.Blocks.lists_length_text = {
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE2);
        this.appendDummyInput("").appendField(Blockly.Msg.LISTS_LENGTH_TITLE).appendField(new Blockly.FieldVariable(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE), "VAR");
        this.setTooltip(Blockly.Msg.LISTS_LENGTH_TOOLTIP);
        this.setOutput(!0, "Number")
    }
};
