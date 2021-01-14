/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';
goog.provide('Blockly.Blocks.lists');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.lists.HUE = 260;

Blockly.Blocks['lists_create_empty'] = {
  /**
   * Block for creating an empty list.
   * The 'list_create_with' block is preferred as it is more flexible.
   * <block type="lists_create_with">
   *   <mutation items="0"></mutation>
   * </block>
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_CREATE_EMPTY_TITLE,
      "output": "Array",
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP,
      "helpUrl": Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL
    });
  }
};

Blockly.Blocks['lists_create_with_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_create_with_item'] = {
  /**
   * Mutator bolck for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['lists_repeat'] = {
  /**
   * Block for creating a list with one element repeated.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_REPEAT_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "ITEM"
        },
        {
          "type": "input_value",
          "name": "NUM",
          "check": Blockly.Types.NUMBER.checkList
        }
      ],
      "output": "Array",
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.LISTS_REPEAT_HELPURL
    });
  }
};
 /**
   * Block for list length.
   * @this Blockly.Block
   */
/*
Blockly.Blocks['lists_length'] = {
 
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_LENGTH_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": Blockly.Types.TEXT.checkList.concat('Array')
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_LENGTH_TOOLTIP,
      "helpUrl": Blockly.Msg.LISTS_LENGTH_HELPURL
    });
  }
};  */

Blockly.Blocks['lists_isEmpty'] = {
  /**
   * Block for is the list empty?
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_ISEMPTY_TITLE,
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE",
          "check": Blockly.Types.TEXT.checkList.concat('Array')
        }
      ],
      "output": Blockly.Types.BOOLEAN.output,
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_ISEMPTY_TOOLTIP,
      "helpUrl": Blockly.Msg.LISTS_ISEMPTY_HELPURL
    });
  }
};

Blockly.Blocks['lists_indexOf'] = {
  /**
   * Block for finding an item in the list.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [[Blockly.Msg.LISTS_INDEX_OF_FIRST, 'FIRST'],
         [Blockly.Msg.LISTS_INDEX_OF_LAST, 'LAST']];
    this.setHelpUrl(Blockly.Msg.LISTS_INDEX_OF_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.appendValueInput('VALUE')
        .setCheck('Array')
        .appendField(Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST);
    this.appendValueInput('FIND')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'END');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_INDEX_OF_TOOLTIP);
  }
};


  /**
   * Block for setting the element at index.
   * @this Blockly.Block
   */
   /*
Blockly.Blocks['lists_setIndex'] = {

  init: function() {
    var MODE =
        [[Blockly.Msg.LISTS_SET_INDEX_SET, 'SET'],
         [Blockly.Msg.LISTS_SET_INDEX_INSERT, 'INSERT']];
    this.WHERE_OPTIONS =
        [[Blockly.Msg.LISTS_GET_INDEX_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_INDEX_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_INDEX_FIRST, 'FIRST'],
         [Blockly.Msg.LISTS_GET_INDEX_LAST, 'LAST'],
         [Blockly.Msg.LISTS_GET_INDEX_RANDOM, 'RANDOM']];
    this.setHelpUrl(Blockly.Msg.LISTS_SET_INDEX_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(MODE), 'MODE')
        .appendField('', 'SPACE');
    this.appendDummyInput('AT');
    this.appendValueInput('TO')
        .appendField(Blockly.Msg.LISTS_SET_INDEX_INPUT_TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LISTS_SET_INDEX_TOOLTIP);
    this.updateAt_(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var combo = thisBlock.getFieldValue('MODE') + '_' +
          thisBlock.getFieldValue('WHERE');
      return Blockly.Msg['LISTS_SET_INDEX_TOOLTIP_' + combo];
    });
  }, 
  /**
   * Create XML to represent whether there is an 'AT' input.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   *
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isAt = this.getInput('AT').type == Blockly.INPUT_VALUE;
    container.setAttribute('at', isAt);
    return container;
  }, */
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   *
  domToMutation: function(xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'at' defaults to true.
    var isAt = (xmlElement.getAttribute('at') != 'false');
    this.updateAt_(isAt);
  }, */
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   *
  updateAt_: function(isAt) {
    // Destroy old 'AT' and 'ORDINAL' input.
    this.removeInput('AT');
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck(Blockly.Types.NUMBER.checkList);
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL')
            .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT');
    }
    var menu = new Blockly.FieldDropdown(this.WHERE_OPTIONS, function(value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE');
        return null;
      }
      return undefined;
    });
    this.moveInputBefore('AT', 'TO');
    if (this.getInput('ORDINAL')) {
      this.moveInputBefore('ORDINAL', 'TO');
    }

    this.getInput('AT').appendField(menu, 'WHERE');
  }
}; */

Blockly.Blocks['lists_getSublist'] = {
  /**
   * Block for getting sublist.
   * @this Blockly.Block
   */
  init: function() {
    this['WHERE_OPTIONS_1'] =
        [[Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST, 'FIRST']];
    this['WHERE_OPTIONS_2'] =
        [[Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START, 'FROM_START'],
         [Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END, 'FROM_END'],
         [Blockly.Msg.LISTS_GET_SUBLIST_END_LAST, 'LAST']];
    this.setHelpUrl(Blockly.Msg.LISTS_GET_SUBLIST_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendValueInput('LIST')
        .setCheck('Array')
        .appendField(Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    this.appendDummyInput('AT1');
    this.appendDummyInput('AT2');
    if (Blockly.Msg.LISTS_GET_SUBLIST_TAIL) {
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg.LISTS_GET_SUBLIST_TAIL);
    }
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.updateAt_(1, true);
    this.updateAt_(2, true);
    this.setTooltip(Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP);
  },
  /**
   * Create XML to represent whether there are 'AT' inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var isAt1 = this.getInput('AT1').type == Blockly.INPUT_VALUE;
    container.setAttribute('at1', isAt1);
    var isAt2 = this.getInput('AT2').type == Blockly.INPUT_VALUE;
    container.setAttribute('at2', isAt2);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var isAt1 = (xmlElement.getAttribute('at1') == 'true');
    var isAt2 = (xmlElement.getAttribute('at2') == 'true');
    this.updateAt_(1, isAt1);
    this.updateAt_(2, isAt2);
  },
  /**
   * Create or delete an input for a numeric index.
   * This block has two such inputs, independant of each other.
   * @param {number} n Specify first or second input (1 or 2).
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this Blockly.Block
   */
  updateAt_: function(n, isAt) {
    // Create or delete an input for the numeric index.
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT' + n);
    this.removeInput('ORDINAL' + n, true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT' + n).setCheck(Blockly.Types.NUMBER.checkList);
      if (Blockly.Msg.ORDINAL_NUMBER_SUFFIX) {
        this.appendDummyInput('ORDINAL' + n)
            .appendField(Blockly.Msg.ORDINAL_NUMBER_SUFFIX);
      }
    } else {
      this.appendDummyInput('AT' + n);
    }
    var menu = new Blockly.FieldDropdown(this['WHERE_OPTIONS_' + n],
        function(value) {
      var newAt = (value == 'FROM_START') || (value == 'FROM_END');
      // The 'isAt' variable is available due to this function being a closure.
      if (newAt != isAt) {
        var block = this.sourceBlock_;
        block.updateAt_(n, newAt);
        // This menu has been destroyed and replaced.  Update the replacement.
        block.setFieldValue(value, 'WHERE' + n);
        return null;
      }
      return undefined;
    });
    this.getInput('AT' + n)
        .appendField(menu, 'WHERE' + n);
    if (n == 1) {
      this.moveInputBefore('AT1', 'AT2');
      if (this.getInput('ORDINAL1')) {
        this.moveInputBefore('ORDINAL1', 'AT2');
      }
    }
    if (Blockly.Msg.LISTS_GET_SUBLIST_TAIL) {
      this.moveInputBefore('TAIL', null);
    }
  }
};

Blockly.Blocks['lists_sort'] = {
  /**
   * Block for sorting a list.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.LISTS_SORT_TITLE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "TYPE",
          "options": [
            [Blockly.Msg.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
            [Blockly.Msg.LISTS_SORT_TYPE_TEXT, "TEXT"],
            [Blockly.Msg.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "DIRECTION",
          "options": [
            [Blockly.Msg.LISTS_SORT_ORDER_ASCENDING, "1"],
            [Blockly.Msg.LISTS_SORT_ORDER_DESCENDING, "-1"]
          ]
        },
        {
          "type": "input_value",
          "name": "LIST",
          "check": "Array"
        }
      ],
      "output": "Array",
      "colour": Blockly.Blocks.lists.HUE,
      "tooltip": Blockly.Msg.LISTS_SORT_TOOLTIP,
      "helpUrl": Blockly.Msg.LISTS_SORT_HELPURL
    });
  }
};

Blockly.Blocks['lists_split'] = {
  /**
   * Block for splitting text into a list, or joining a list into text.
   * @this Blockly.Block
   */
  init: function() {
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    var dropdown = new Blockly.FieldDropdown(
        [[Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT, 'SPLIT'],
         [Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST, 'JOIN']],
        function(newMode) {
          thisBlock.updateType_(newMode);
        });
    this.setHelpUrl(Blockly.Msg.LISTS_SPLIT_HELPURL);
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendValueInput('INPUT')
        .setCheck(Blockly.Types.TEXT.checkList)
        .appendField(dropdown, 'MODE');
    this.appendValueInput('DELIM')
        .setCheck(Blockly.Types.TEXT.checkList)
        .appendField(Blockly.Msg.LISTS_SPLIT_WITH_DELIMITER);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('MODE');
      if (mode == 'SPLIT') {
        return Blockly.Msg.LISTS_SPLIT_TOOLTIP_SPLIT;
      } else if (mode == 'JOIN') {
        return Blockly.Msg.LISTS_SPLIT_TOOLTIP_JOIN;
      }
      throw 'Unknown mode: ' + mode;
    });
  },
  /**
   * Modify this block to have the correct input and output types.
   * @param {string} newMode Either 'SPLIT' or 'JOIN'.
   * @private
   * @this Blockly.Block
   */
  updateType_: function(newMode) {
    if (newMode == 'SPLIT') {
      this.outputConnection.setCheck('Array');
      this.getInput('INPUT').setCheck(Blockly.Types.TEXT.checkList);
    } else {
      this.outputConnection.setCheck(Blockly.Types.TEXT.checkList);
      this.getInput('INPUT').setCheck('Array');
    }
  },
  /**
   * Create XML to represent the input and output types.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('mode', this.getFieldValue('MODE'));
    return container;
  },
  /**
   * Parse XML to restore the input and output types.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.updateType_(xmlElement.getAttribute('mode'));
  }
};
