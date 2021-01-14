


'use strict';

goog.provide('Blockly.Blocks.procedures');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.procedures.HUE = 290;

Blockly.Blocks['procedures_defnoreturn'] = {
    /**
     * Block for defining a procedure with no return value.
     * @this Blockly.Block
     */
    init: function () {
        var nameField = new Blockly.FieldTextInput(
                Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
                Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
        .appendField(nameField, 'NAME')
        .appendField('', 'PARAMS');
        this.setMutator(new
            Blockly.Mutator(['procedures_mutatorarg']));

        if (Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
            this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
        }
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
        this.arguments_ = [];
        this.arguments_types_ = [];
        this.argsTypes = [];
        this.setStatements_(true);
        this.statementConnection_ = null;
    },
    /**
     * Initialization of the block has completed, clean up anything that may be
     * inconsistent as a result of the XML loading.
     * @this Blockly.Block
     */
    validate: function () {
        var name = Blockly.Procedures.findLegalName(
                this.getFieldValue('NAME'), this);
        this.setFieldValue(name, 'NAME');
    },
    /**
     * Add or remove the statement block from this function definition.
     * @param {boolean} hasStatements True if a statement block is needed.
     * @this Blockly.Block
     */
    setStatements_: function (hasStatements) {
        if (this.hasStatements_ === hasStatements) {
            return;
        }
        if (hasStatements) {

            this.appendStatementInput('STACK')
            .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);

            if (this.getInput('RETURN')) {
                this.moveInputBefore('STACK', 'RETURN');
            }
        } else {
            this.removeInput('STACK', true);
        }
        this.hasStatements_ = hasStatements;
    },
    /**
     * Update the display of parameters for this procedure definition block.
     * Display a warning if there are duplicately named parameters.
     * @private
     * @this Blockly.Block
     */
    updateParams_: function () {
        // Check for duplicated arguments.
        var badArg = false;
        var hash = {};

        for (var i = 0; i < this.arguments_.length; i++) {
            if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break;
            }
            hash['arg_' + this.arguments_[i].toLowerCase()] = true;
        }
        if (badArg) {
            this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
        } else {
            this.setWarningText(null);
        } // Merge the arguments into a human-readable list.

        var paramString = '';
        if (this.arguments_.length) {
            paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
                ' ' + this.arguments_.join(', ');
        } // The params field is deterministic based on the mutation,

        // no need to fire a change event.

        Blockly.Events.disable();
        this.setFieldValue(paramString, 'PARAMS');
        Blockly.Events.enable();
    },
    /**
     * Create XML to represent the argument inputs.
     * @param {=boolean} opt_paramIds If true include the IDs of the parameter
     *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function (opt_paramIds) {
        var container = document.createElement('mutation');
        if (opt_paramIds) {
            container.setAttribute('name', this.getFieldValue('NAME'));
        }
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
			parameter.setAttribute('type', this.arguments_types_[this.arguments_[i]]);
            if (opt_paramIds && this.paramIds_) {
                parameter.setAttribute('paramId', this.paramIds_[i]);
            }
            container.appendChild(parameter);
        } // Save whether the statement input is visible.


        if (!this.hasStatements_) {
            container.setAttribute('statements', 'false');
        }
        return container;
    },
    /**
     * Parse XML to restore the argument inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.arguments_ = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                this.arguments_.push(childNode.getAttribute('name'));
				this.arguments_types_.push(childNode.getAttribute('type'));
            }
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);

        // Show or hide the statement input.
        this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('procedures_mutatorcontainer');
        containerBlock.initSvg();

        // Check/uncheck the allow statement box.
        if (this.getInput('RETURN')) {
            containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE' : 'FALSE', 'STATEMENTS');

        } else {
            containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
        } // Parameter list.

        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.arguments_.length; i++) {
            var paramBlock = workspace.newBlock('procedures_mutatorarg');
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], 'NAME');
            paramBlock.setFieldValue(this.arguments_types_[i], 'typedef');
            // Store the old location.
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection;
        } // Initialize procedure's callers with blank IDs.

        Blockly.Procedures.mutateCallers(this);
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        // Parameter list.
        this.arguments_ = [
        ];
        this.paramIds_ = [
        ];
        this.arguments_types_ = [
        ];
        this.argsTypes = []
        var paramBlock = containerBlock.getInputTargetBlock('STACK');
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue('NAME'));
            this.arguments_types_.push(paramBlock.getFieldValue('typedef'));
            this.arguments_types_[paramBlock.getFieldValue('NAME')] = (paramBlock.getFieldValue('typedef'));
            //console.log(paramBlock.getFieldValue('NAME'));
            //this.arguments_[paramBlock.getFieldValue('NAME')] = paramBlock.getFieldValue('typedef');
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();

        }
        Blockly.Arduino.procedures_mutatorarg(this);
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);

        // Show/hide the statement input.
        var hasStatements = containerBlock.getFieldValue('STATEMENTS');
        if (hasStatements !== null) {
            hasStatements = hasStatements == 'TRUE';
            if (this.hasStatements_ != hasStatements) {
                if (hasStatements) {
                    this.setStatements_(true);
                    // Restore the stack, if one was saved.
                    Blockly.Mutator.reconnect(this.statementConnection_, this, 'STACK');
                    this.statementConnection_ = null;
                } else {
                    // Save the stack, then disconnect it.
                    var stackConnection = this.getInput('STACK').connection;
                    this.statementConnection_ = stackConnection.targetConnection;
                    if (this.statementConnection_) {
                        var stackBlock = stackConnection.targetBlock();
                        stackBlock.unplug();
                        stackBlock.bumpNeighbours_();
                    }
                    this.setStatements_(false);
                }
            }
        }
    },
    /**
     * Dispose of any callers.
     * @this Blockly.Block
     */
    dispose: function () {
        var name = this.getFieldValue('NAME');
        Blockly.Procedures.disposeCallers(name, this.workspace);
        // Call parent's destructor.
        this.constructor.prototype.dispose.apply(this, arguments);
    },
    /**
     * Return the signature of this procedure definition.
     * @return {!Array} Tuple containing three elements:
     *     - the name of the defined procedure,
     *     - a list of all its arguments,
     *     - that it DOES NOT have a return value.
     * @this Blockly.Block
     */
    getProcedureDef: function () {
        return [this.getFieldValue('NAME'),
            this.arguments_,
            false];
    },
    /**
     * Return all variables referenced by this block.
     * @return {!Array.<string>} List of variable names.
     * @this Blockly.Block
     */
    getVars: function () {
        return this.arguments_;
    },
    /**
     * Notification that a variable is renaming.
     * If the name matches one of this block's variables, rename it.
     * @param {string} oldName Previous name of variable.
     * @param {string} newName Renamed variable.
     * @this Blockly.Block
     */
    renameVar: function (oldName, newName) {
        var change = false;
        for (var i = 0; i < this.arguments_.length; i++) {
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true;
            }
        }
        if (change) {
            this.updateParams_();
            // Update the mutator's variables if the mutator is open.
            if (this.mutator.isVisible()) {
                var blocks = this.mutator.workspace_.getAllBlocks();
                for (var i = 0, block; block = blocks[i]; i++) {
                    if (block.type == 'procedures_mutatorarg' && Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {

                        block.setFieldValue(newName, 'NAME');
                    }
                }
            }
        }
    },
    /**
     * Add custom menu options to this block's context menu.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        // Add option to create caller.
        var option = {
            enabled: true
        };

        var name = this.getFieldValue('NAME');
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
        var xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', name);
        for (var i = 0; i < this.arguments_.length; i++) {
            var xmlArg = goog.dom.createDom('arg');
            xmlArg.setAttribute('name', this.arguments_[i]);
            xmlMutation.appendChild(xmlArg);
        }
        var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);

        // Add options to create getters for each parameter.
        if (!this.isCollapsed()) {
            for (var i = 0; i < this.arguments_.length; i++) {
                var option = {
                    enabled: true
                };

                var name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
                var xmlField = goog.dom.createDom('field', null, name);
                xmlField.setAttribute('name', 'VAR');
                var xmlBlock = goog.dom.createDom('block', null, xmlField);
                xmlBlock.setAttribute('type', 'variables_get');
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option);
            }
        }
    },
    callType_: 'procedures_callnoreturn',
    /** @return {!string} This block does not define type, so 'undefined' */
    getVarType: function (varName) {
        //var vartype = Object.assign({}, Blockly.Types.UNDEF);
		if (this.arguments_types_[varName]=="int") {
            return Blockly.Types.NUMBER;
        }else if (this.arguments_types_[varName]=="float"){
			return Blockly.Types.DECIMAL;
		}else if (this.arguments_types_[name] == 'char') {
            return Blockly.Types.CHARACTER;
		}else if (this.arguments_types_[name] == 'String') {
            return Blockly.Types.TEXT;
		}else if (this.arguments_types_[name] == 'bool') {
			return Blockly.Types.BOOLEAN;
		}else 
		{
			return Blockly.Types.UNDEF;
		}

    },
    /** Contains the type of the arguments added with mutators. */

    /**
     * Searches through a list of variables with type to assign the type of the
     * arguments.
     * @this Blockly.Block
     * @param {Array<string>} existingVars Associative array variable already
     *     defined, names as key, type as value.
     */
    setArgsType: function (existingVars) {
        var varNames = this.arguments_;
        //console.log(this.argsTypes);
        // Check if variable has been defined already and save type
        //console.log('arg: '+existingVars);
        //console.log('types: '+ this.arguments_types_);
        for (var name in existingVars) {
            this.argsTypes[name] = existingVars[name];
            //this.argsTypes[name] = Object.assign({}, existingVars[name]);
            if (this.arguments_types_[name] == 'int') {
				//this.argsTypes[name] = Blockly.Types.NUMBER;
                this.argsTypes[name].typeId = Blockly.Types.NUMBER.typeId;
               this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_NUMBER';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [];
            } else if (this.arguments_types_[name] == 'float') {
				//this.argsTypes[name] = Blockly.Types.DECIMAL;
               this.argsTypes[name].typeId = Blockly.Types.DECIMAL.typeId;
               this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_DECIMAL';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [Blockly.Types.BOOLEAN,Blockly.Types.SHORT_NUMBER,Blockly.Types.NUMBER,Blockly.Types.LARGE_NUMBER];
            } else if (this.arguments_types_[name] == 'char') {
				//this.argsTypes[name] = Blockly.Types.CHARACTER;
                this.argsTypes[name].typeId = Blockly.Types.CHARACTER.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_CHAR';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [];
            } else if (this.arguments_types_[name] == 'String') {
				//this.argsTypes[name] = Blockly.Types.TEXT;
                this.argsTypes[name].typeId = Blockly.Types.TEXT.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_TEXT';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [Blockly.Types.CHARACTER];
            } else if (this.arguments_types_[name] == 'bool') {
				//this.argsTypes[name] = Blockly.Types.BOOLEAN;
                this.argsTypes[name].typeId = Blockly.Types.BOOLEAN.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_BOOL';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [Blockly.Types.CHARACTER];
            } //console.log(this.argsTypes[name]);

        }
        /*
		for (var name in existingVars) {
            for (var i = 0, length_ = varNames.length; i < length_; i++) {
                if (name === varNames[i]) {
                    this.argsTypes[name] = existingVars[name];
                }
            }
        } */

    },
    /**
     * Retrieves the type of the arguments, types defined at setArgsType.
     * @this Blockly.Block
     * @return {string} Type of the argument indicated in the input.
     */
    getArgType: function (varName) {
        for (var name in this.argsTypes) {
            if (name == varName) {
                return this.argsTypes[varName];
            }
        }
        return null;
    }
};

Blockly.Blocks['procedures_defreturn'] = {
    /**
     * Block for defining a procedure with a return value.
     * @this Blockly.Block
     */
    init: function () {

        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);

        this.setColour(Blockly.Blocks.procedures.HUE);
        var name = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
        var nameField = new Blockly.FieldTextInput(name, Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(nameField, 'NAME').appendField('', 'PARAMS');
        this.appendValueInput('RETURN').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN).setCheck(['Number',
                'Boolean']);
        this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
		if (Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
            this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
        }
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
        this.arguments_ = [];
        this.arguments_types_ = [];
        this.argsTypes = [];
        this.setStatements_(true);
        this.statementConnection_ = null;
    },
    //setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,

    updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
    mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
    domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
    decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
    compose: Blockly.Blocks['procedures_defnoreturn'].compose,
    dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
    /**
     * Return the signature of this procedure definition.
     * @return {!Array} Tuple containing three elements:
     *     - the name of the defined procedure,
     *     - a list of all its arguments,
     *     - that it DOES have a return value.
     * @this Blockly.Block
     */

    /**
     * Initialization of the block has completed, clean up anything that may be
     * inconsistent as a result of the XML loading.
     * @this Blockly.Block

     */
    validate: function () {
        var name = Blockly.Procedures.findLegalName(this.getFieldValue('NAME'), this);
        this.setFieldValue(name, 'NAME');
    },

    /**
     * Add or remove the statement block from this function definition.
     * @param {boolean} hasStatements True if a statement block is needed.


     * @this Blockly.Block

     */
    setStatements_: function (hasStatements) {
        if (this.hasStatements_ === hasStatements) {
            return;

        }
        if (hasStatements) {
            this.appendStatementInput('STACK').appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
            if (this.getInput('RETURN')) {
                this.moveInputBefore('STACK', 'RETURN');
            }
        } else {
            this.removeInput('STACK', true);
        }
        this.hasStatements_ = hasStatements;
    },
    /**
     * Update the display of parameters for this procedure definition block.
     * Display a warning if there are duplicately named parameters.



     * @private
     * @this Blockly.Block
     */
    updateParams_: function () {
        // Check for duplicated arguments.
        var badArg = false;
        var hash = {};
        for (var i = 0; i < this.arguments_.length; i++) {
            if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break;
            }
            hash['arg_' + this.arguments_[i].toLowerCase()] = true;
        }
        if (badArg) {
            this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
        } else {
            this.setWarningText(null);
        } // Merge the arguments into a human-readable list.

        var paramString = '';
        if (this.arguments_.length) {
            paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +

                ' ' + this.arguments_.join(', ');
        } // The params field is deterministic based on the mutation,
        // no need to fire a change event.

        Blockly.Events.disable();
        this.setFieldValue(paramString, 'PARAMS');
        Blockly.Events.enable();
    },
    /**
     * Create XML to represent the argument inputs.
     * @param {=boolean} opt_paramIds If true include the IDs of the parameter
     *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function (opt_paramIds) {
        var container = document.createElement('mutation');
        if (opt_paramIds) {
            container.setAttribute('name', this.getFieldValue('NAME'));

        }
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
            if (opt_paramIds && this.paramIds_) {
                parameter.setAttribute('paramId', this.paramIds_[i]);
            }
            container.appendChild(parameter);
        } // Save whether the statement input is visible.

        if (!this.hasStatements_) {
            container.setAttribute('statements', 'false');
        }
        return container;
    },
    /**
     * Parse XML to restore the argument inputs.
     * @param {!Element} xmlElement XML storage element.


     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.arguments_ = [
        ];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                this.arguments_.push(childNode.getAttribute('name'));

            }
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
        // Show or hide the statement input.
        this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.



     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('procedures_mutatorcontainer');
        containerBlock.initSvg();
        // Check/uncheck the allow statement box.
        if (this.getInput('RETURN')) {
            containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE' : 'FALSE', 'STATEMENTS');

        } else {
            containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
        } // Parameter list.


        var connection = containerBlock.getInput('STACK').connection;

        for (var i = 0; i < this.arguments_.length; i++) {
            var paramBlock = workspace.newBlock('procedures_mutatorarg');
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], 'NAME');
            paramBlock.setFieldValue(this.arguments_types_[i], 'typedef');
            // Store the old location.
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection;
        } // Initialize procedure's callers with blank IDs.

        Blockly.Procedures.mutateCallers(this);
        return containerBlock;

    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        // Parameter list.


        this.arguments_ = [
        ];
        this.paramIds_ = [
        ];
        this.arguments_types_ = [
        ];
        this.argsTypes = [];
        var paramBlock = containerBlock.getInputTargetBlock('STACK');
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue('NAME'));
            this.arguments_types_.push(paramBlock.getFieldValue('typedef'));
			this.arguments_types_[paramBlock.getFieldValue('NAME')] = (paramBlock.getFieldValue('typedef'));
            //console.log(paramBlock.getFieldValue('typedef'));
            //this.arguments_[paramBlock.getFieldValue('NAME')] = paramBlock.getFieldValue('typedef');
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection && paramBlock.nextConnection.targetBlock();

        }
        Blockly.Arduino.procedures_mutatorarg(this);
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);
        // Show/hide the statement input.
        var hasStatements = containerBlock.getFieldValue('STATEMENTS');
        if (hasStatements !== null) {
            hasStatements = hasStatements == 'TRUE';
            if (this.hasStatements_ != hasStatements) {
                if (hasStatements) {
                    this.setStatements_(true);
                    // Restore the stack, if one was saved.
                    Blockly.Mutator.reconnect(this.statementConnection_, this, 'STACK');
                    this.statementConnection_ = null;
                } else {
                    // Save the stack, then disconnect it.
                    var stackConnection = this.getInput('STACK').connection;
                    this.statementConnection_ = stackConnection.targetConnection;
                    if (this.statementConnection_) {
                        var stackBlock = stackConnection.targetBlock();
                        stackBlock.unplug();
                        stackBlock.bumpNeighbours_();
                    }
                    this.setStatements_(false);
                }
            }
        }
    },

    /**
     * Dispose of any callers.




     * @this Blockly.Block
     */
    dispose: function () {

        var name = this.getFieldValue('NAME');
        Blockly.Procedures.disposeCallers(name, this.workspace);
        // Call parent's destructor.
        this.constructor.prototype.dispose.apply(this, arguments);
    },
    getProcedureDef: function () {
        return [this.getFieldValue('NAME'),
            this.arguments_,
            true];
    },
    /**
     * Return all variables referenced by this block.
     * @return {!Array.<string>} List of variable names.


     * @this Blockly.Block
     */
    getVars: function () {
        return this.arguments_;

    },
    /**
     * Notification that a variable is renaming.
     * If the name matches one of this block's variables, rename it.
     * @param {string} oldName Previous name of variable.
     * @param {string} newName Renamed variable.


     * @this Blockly.Block
     */
    renameVar: function (oldName, newName) {

        var change = false;

        for (var i = 0; i < this.arguments_.length; i++) {
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true;

            }
        }
        if (change) {
            this.updateParams_();
            // Update the mutator's variables if the mutator is open.
            if (this.mutator.isVisible()) {
                var blocks = this.mutator.workspace_.getAllBlocks();

                for (var i = 0, block; block = blocks[i]; i++) {
                    if (block.type == 'procedures_mutatorarg' && Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
                        block.setFieldValue(newName, 'NAME');

                    }
                }
            }

        }
    },
    /**
     * Add custom menu options to this block's context menu.
     * @param {!Array} options List of menu options to add to.

     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        // Add option to create caller.
        var option = {
            enabled: true
        };
        var name = this.getFieldValue('NAME');
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
        var xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', name);
        for (var i = 0; i < this.arguments_.length; i++) {
            var xmlArg = goog.dom.createDom('arg');

            xmlArg.setAttribute('name', this.arguments_[i]);
            xmlMutation.appendChild(xmlArg);

        }
        var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
        // Add options to create getters for each parameter.
        if (!this.isCollapsed()) {
            for (var i = 0; i < this.arguments_.length; i++) {
                var option = {
                    enabled: true
                };
                var name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
                var xmlField = goog.dom.createDom('field', null, name);
                xmlField.setAttribute('name', 'VAR');
                var xmlBlock = goog.dom.createDom('block', null, xmlField);
                xmlBlock.setAttribute('type', 'variables_get');
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option);
            }
        }
    },
    callType_: 'procedures_callnoreturn',
    /** @return {!string} This block does not define type, so 'undefined' */
    getVarType: function (varName) {
        return Object.assign({}, Blockly.Types.UNDEF);
    },
    /** Contains the type of the arguments added with mutators. */

    /**
     * Searches through a list of variables with type to assign the type of the
     * arguments.
     * @this Blockly.Block
     * @param {Array<string>} existingVars Associative array variable already
     *     defined, names as key, type as value.
     */
    setArgsType: function (existingVars) {
        var varNames = this.arguments_;

        //this.argsTypes[name] = Object.assign({}, existingVars[name]);
        for (var name in existingVars) {
            this.argsTypes[name] = existingVars[name];
            if (this.arguments_types_[name] == 'int') {
                this.argsTypes[name].typeId = Blockly.Types.NUMBER.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_NUMBER';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [];
            } else if (this.arguments_types_[name] == 'float') {
                this.argsTypes[name].typeId = Blockly.Types.DECIMAL.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_DECIMAL';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [Blockly.Types.BOOLEAN,Blockly.Types.SHORT_NUMBER,Blockly.Types.NUMBER,Blockly.Types.LARGE_NUMBER];
            } else if (this.arguments_types_[name] == 'char') {
                this.argsTypes[name].typeId = Blockly.Types.CHARACTER.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_CHAR';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [];
            } else if (this.arguments_types_[name] == 'String') {
                this.argsTypes[name].typeId = Blockly.Types.TEXT.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_TEXT';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [Blockly.Types.CHARACTER];
            } else if (this.arguments_types_[name] == 'bool') {
                this.argsTypes[name].typeId = Blockly.Types.BOOLEAN.typeId;
                this.argsTypes[name].typeMsgName_ = 'ARD_TYPE_BOOL';
                //this.argsTypes[name].compatibleTypes_ = compatibleTypes: [Blockly.Types.CHARACTER];
            } //console.log(this.argsTypes[name]);
        }
        // Check if variable has been defined already and save type
        for (var name in existingVars) {
            for (var i = 0, length_ = varNames.length; i < length_; i++) {
                if (name === varNames[i]) {
                    this.argsTypes[name] = existingVars[name];
                    //this.argsTypes[name] = this.arguments_types_[name];
                }
            }
        }
    },
    /**
     * Retrieves the type of the arguments, types defined at setArgsType.

     * @this Blockly.Block
     * @return {string} Type of the argument indicated in the input.
     */
    getArgType: function (varName) {
        for (var name in this.argsTypes) {
            if (name == varName) {
                return this.argsTypes[varName];

            }
        }
        return null;
    },
    getReturnType: function () {
        var a = Blockly.Types.NULL,
        b = this.getInputTargetBlock('RETURN');
        b && (a = b.getBlockType ? b.getBlockType() : Blockly.Types.getChildBlockType(b));
        //console.log(a);
        return a
    } //callType_: 'procedures_callreturn'

};
Blockly.Blocks['procedures_mutatorcontainer'] = {
    /**
     * Mutator block for procedure container.



     * @this Blockly.Block
     */
    init: function () {

        this.setColour(Blockly.Blocks.procedures.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput('STACK');
        this.appendDummyInput('STATEMENT_INPUT').appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox('TRUE'), 'STATEMENTS');
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};
Blockly.Blocks['procedures_mutatorarg'] = {
    init: function () {
		var argument_name='x';
		//var count = 1;
        if (Blockly.Arduino.variables_ != undefined) {
            while (Blockly.Arduino.variables_[argument_name] != undefined) {
				if(argument_name=='z')
				{
					argument_name='a';
				}else{
					argument_name=String.fromCharCode(argument_name.charCodeAt(0) + 1);
					//argument_name = argument_name++;
					//count++;
				}

            }
        }
		
		
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(new Blockly.FieldTextInput(argument_name, this.validator_), 'NAME').//appendField(new Blockly.FieldDropdown([["Integer","int"], ["String","String"], ["Character","char"], ["* Integer","*float"], ["* String","*String"], ["* char","*char"], ["* []","*[]"]]), "typedef");
        appendField(new Blockly.FieldDropdown([['Integer',
                        'int'],
                    [
                        'String',
                        'String'
                    ],
                    [
                        'Character',
                        'char'
                    ],
                    [
                        ' float',
                        'float'
                    ],
                    [
                        ' boolean',
                        'bool'
                    ]]), 'typedef');
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1;
    },
    validator_: function (a) {
        return (a = a.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '')) || null
    },
    typevalidator_: function (b) {
        b = b.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
        return (b) || null
    }
};
Blockly.Blocks.procedures_callnoreturn = {
    init: function () {
        this.appendDummyInput('TOPROW').appendField(this.id, 'NAME');
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
        this.arguments_ = [
        ];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: function () {
        return this.getFieldValue('NAME')
    },
    renameProcedure: function (a, b) {
        Blockly.Names.equals(a, this.getProcedureCall()) && (this.setFieldValue(b, 'NAME'), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP : Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace('%1', b)))
    },
    setProcedureParameters_: function (a, b) {
        var c,
        d = Blockly.Procedures.getDefinition(this.getProcedureCall(), this.workspace),
        e = d && d.mutator && d.mutator.isVisible();
        e || (this.quarkConnections_ = {}, this.quarkIds_ = null);
        if (b)
            if (goog.array.equals(this.arguments_, a))
                this.quarkIds_ = b;
            else {
                if (b.length != a.length)
                    throw 'Error: paramNames and paramIds must be the same length.';
                this.setCollapsed(!1);
                this.quarkIds_ || (this.quarkConnections_ = {}, a.join('\n') == this.arguments_.join('\n') ? this.quarkIds_ = b : this.quarkIds_ = [
                        ]);
                d = this.rendered;
                this.rendered = !1;
                for (var f = 0; f < this.arguments_.length; f++)
                    if (c = this.getInput('ARG' + f))
                        c = c.connection.targetConnection,
                        this.quarkConnections_[this.quarkIds_[f]] = c,
                        e && c &&  - 1 == b.indexOf(this.quarkIds_[f]) && (c.disconnect(), c.getSourceBlock().bumpNeighbours_());
                this.arguments_ = [
                ].concat(a);
                this.updateShape_();
                if (this.quarkIds_ = b)
                    for (f = 0; f < this.arguments_.length; f++)
                        e = this.quarkIds_[f],
                        e in this.quarkConnections_ && (c = this.quarkConnections_[e], Blockly.Mutator.reconnect(c, this, 'ARG' + f) || delete this.quarkConnections_[e]);
                (this.rendered = d) && this.render()
            }
    },
    updateShape_: function () {
        for (var a = 0; a < this.arguments_.length; a++) {
            var b = this.getField('ARGNAME' + a);
            b ? (Blockly.Events.disable(), b.setValue(this.arguments_[a]), Blockly.Events.enable()) : (b = new Blockly.FieldLabel(this.arguments_[a]), this.appendValueInput('ARG' + a).setAlign(Blockly.ALIGN_RIGHT).appendField(b, 'ARGNAME' + a).init())
        }
        for (; this.getInput('ARG' + a); )
            this.removeInput('ARG' + a),
            a++;
        if (a = this.getInput('TOPROW'))
            this.arguments_.length ? this.getField('WITH') || (a.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, 'WITH'), a.init()) : this.getField('WITH') && a.removeField('WITH')
    },
    mutationToDom: function () {
        var a = document.createElement('mutation');
        a.setAttribute('name', this.getProcedureCall());
        for (var b = 0; b < this.arguments_.length; b++) {
            var c = document.createElement('arg');
            c.setAttribute('name', this.arguments_[b]);
            a.appendChild(c)
        }
        return a
    },
    domToMutation: function (a) {
        var b = a.getAttribute('name');
        this.renameProcedure(this.getProcedureCall(), b);
        for (var b = [
            ], c = [
            ], d = 0, e; e = a.childNodes[d]; d++)
            'arg' == e.nodeName.toLowerCase() && (b.push(e.getAttribute('name')), c.push(e.getAttribute('paramId')));
        this.setProcedureParameters_(b, c)
    },
    renameVar: function (a, b) {
        for (var c = 0; c < this.arguments_.length; c++)
            Blockly.Names.equals(a, this.arguments_[c]) && (this.arguments_[c] = b, this.getField('ARGNAME' + c).setValue(b))
    },
    customContextMenu: function (a) {
        var b = {
            enabled: !0
        };
        b.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.getProcedureCall(),
        d = this.workspace;
        b.callback = function () {
            var a = Blockly.Procedures.getDefinition(c, d);
            a && a.select()
        };
        a.push(b)
    }
};
/*
Blockly.Blocks.procedures_callreturn = {
init: function () {
this.appendDummyInput('TOPROW').appendField('', 'NAME');
this.setOutput(!0);
this.setColour(Blockly.Blocks.procedures.HUE);
this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
this.arguments_ = [
];
this.quarkConnections_ = {
};
this.getBlockType();
this.quarkIds_ = null
},
getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
setProcedureParameters_: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters_,
updateShape_: Blockly.Blocks.procedures_callnoreturn.updateShape_,
mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu,
getBlockType: function () {
//return Blockly.Procedures.getDefinition(this.getProcedureCall(),this.workspace).getReturnType();
}
}; */

Blockly.Blocks.procedures_callreturn = {

    init: function () {
        this.appendDummyInput("TOPROW").appendField("", "NAME");
        //this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
        this.setOutput(!0);
        this.setColour(Blockly.Blocks.procedures.HUE);

        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null
    },
    getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters_: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters_,

    updateShape_: Blockly.Blocks.procedures_callnoreturn.updateShape_,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
    renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
    customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenus
    
};

Blockly.Blocks.procedures_ifreturn = {

    init: function () {

        this.appendValueInput('CONDITION').setCheck(Blockly.Types.BOOLEAN.checkList).appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);

        this.appendValueInput('VALUE').appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(!0);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
        this.hasReturnValue_ = !0
    },

    mutationToDom: function () {
        var a = document.createElement('mutation');
        a.setAttribute('value', Number(this.hasReturnValue_));
        return a
    },

    domToMutation: function (a) {
        this.hasReturnValue_ = 1 == a.getAttribute('value');

        this.hasReturnValue_ || (this.removeInput('VALUE'), this.appendDummyInput('VALUE').appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN))

    },

    onchange: function (a) {
        a = !1;

        var b = this;
        do {
            if ( - 1 != this.FUNCTION_TYPES.indexOf(b.type)) {
                a = !0;
                break

            }
            b = b.getSurroundParent()
        } while (b);
        a ? ('procedures_defnoreturn' == b.type && this.hasReturnValue_ ? (this.removeInput('VALUE'), this.appendDummyInput('VALUE').appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !1) : 'procedures_defreturn' != b.type || this.hasReturnValue_ || (this.removeInput('VALUE'), this.appendValueInput('VALUE').appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !0), this.setWarningText(null)) : this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING)
    },

    FUNCTION_TYPES: [

        'procedures_defnoreturn',
        'procedures_defreturn'
    ]
};
