'use strict';

goog.provide('Blockly.Blocks.SCoop');

goog.require('Blockly.Blocks');

Blockly.Blocks.SCoop.HUE = 120;
Blockly.Blocks['SCoopTask'] = {
  init: function() {
	//var _tasknum = [["1", "1"], ["2", "2"], ["3", "3"],["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"],["8", "8"]];
    this.appendDummyInput()
        .appendField("Scoop Task")
	    //.appendField(new Blockly.FieldDropdown(_tasknum), "_tasknum");
		.appendField(
            new Blockly.FieldInstance("SCOOP_PROCESS",
                                      "name",
                                      true, true, false),
            "TASK_INSTANCE")
    this.appendStatementInput("setup")
        .appendField("setup code")
        .setCheck(null);
    this.appendStatementInput("loop")
        .appendField("loop code")
        .setCheck(null);
    this.setColour(Blockly.Blocks.SCoop.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['SCoop_yield'] = {
  init: function() {
      this.setColour(Blockly.Blocks.SCoop.HUE);
    this.appendDummyInput("")
		.appendField("yield");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['SCoop_sleep'] = {
  init: function() {
    this.setColour(Blockly.Blocks.SCoop.HUE);
    this.appendDummyInput("")
		    .appendField("SCoop sleep");
	this.appendValueInput("sleeplength", Number)
        .setCheck(null);
	this.appendDummyInput("")
		    .appendField("millis");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks['SCoop_sleep_sync'] = {
  init: function() {
    this.setColour(Blockly.Blocks.SCoop.HUE);
    this.appendDummyInput("")
		    .appendField("SCoop sleep sync");
	this.appendValueInput("sleeplength", Number)
        .setCheck(null);
	this.appendDummyInput("")
		    .appendField("millis");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};