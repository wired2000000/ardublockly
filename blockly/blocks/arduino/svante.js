Blockly.Blocks['svante_go'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move");
    this.appendValueInput("left_wheel")
        .setCheck("Number")
        .appendField("Left Wheel");
    this.appendValueInput("right_wheel")
        .setCheck("Number")
        .appendField("Right Wheel");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['svante_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['svante_motorsdiff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Diff motors");
    this.appendValueInput("diff")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['svante_get_irarray'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get IR Array");
    this.appendValueInput("ir_array")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['svante_linefollow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start FollowLines");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['svante_cal_linefollow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Calibrate FollowLines");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Speed");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Time");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['svante_config_linefollow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Config FollowLines");
    this.appendValueInput("Kp")
        .setCheck("Number")
        .appendField("Kp");
    this.appendValueInput("Kd")
        .setCheck("Number")
        .appendField("Kd");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Time");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("Speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};