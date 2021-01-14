/*
__________ .__                                                   
\______   \|  |  _____     ______  ____  _____   _______ _______ 
 |    |  _/|  |  \__  \   /  ___/_/ ___\ \__  \  \_  __ \\_  __ \
 |    |   \|  |__ / __ \_ \___ \ \  \___  / __ \_ |  | \/ |  | \/
 |______  /|____/(____  //____  > \___  >(____  / |__|    |__|   
        \/            \/      \/      \/      \/                 

Blascarr invests time and resources providing this open source code like some other libraries, please
respect the job and support open-source software.

Written by Adrian for Blascarr
*/

Blockly.Blocks['accelstepper_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AccelStepper:")
        .appendField(new Blockly.FieldInstance("STEPPER",
                                      "stepper_motor",
                                      false, false, false),
            "stepper_motor_instance");
    this.appendValueInput("pins")
        .setCheck("Number")
        .appendField("Mode:");
    this.appendValueInput("pin1")
        .setCheck("Number")
        .appendField("Pin 1:");
    this.appendValueInput("pin2")
        .setCheck("Number")
        .appendField("Pin 2:");
    this.appendValueInput("pin3")
        .setCheck("Number")
        .appendField("Pin 3:");
    this.appendValueInput("pin4")
        .setCheck("Number")
        .appendField("Pin 4:");
    this.setInputsInline(true);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['accelstepper_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldInstance("STEPPER",
                                      "stepper_motor",
                                      false, false, false),
            "stepper_motor_instance")
        .appendField(new Blockly.FieldDropdown([["currentPosition","currentPosition"], ["targetPosition","targetPosition"], ["speed","speed"], ["distanceToGo","distanceToGo"], ["maxSpeed","maxSpeed"], ["is running","isRunning"]]), "info");
    this.setOutput(true, "Number");
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['accelstepper_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("")
        .appendField(new Blockly.FieldInstance("STEPPER",
                                      "stepper_motor",
                                      false, false, false),
            "stepper_motor_instance")
        .appendField(new Blockly.FieldDropdown([["run","run"], ["stop","stop"], ["run Speed","runSpeed"]]), "stepper_run");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['accelstepper_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldInstance("STEPPER",
                                      "stepper_motor",
                                      false, false, false),
            "stepper_motor_instance")
        .appendField(new Blockly.FieldDropdown([["absolute","moveTo"], ["relative","move"]]), "move");
    this.appendValueInput("steps")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['accelstepper_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldInstance("STEPPER",
                                      "stepper_motor",
                                      false, false, false),
            "stepper_motor_instance")
        .appendField(new Blockly.FieldDropdown([["Speed","setSpeed"], ["Acceleration","setAcceleration"], ["Max Speed","setMaxSpeed"], ["Current Position","setCurrentPosition"]]), "parameters");
    this.appendValueInput("value")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['accelstepper_onoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldInstance("STEPPER",
                                      "stepper_motor",
                                      false, false, false),
            "stepper_motor_instance")
        .appendField("Outputs")
        .appendField(new Blockly.FieldDropdown([["Enable","enableOutputs"], ["Disable","disableOutputs"]]), "parameters");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
