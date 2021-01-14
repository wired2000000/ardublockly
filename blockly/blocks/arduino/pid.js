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

Blockly.Blocks['pid_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID Setup")
        .appendField(
            new Blockly.FieldInstance("PID",
                                      "controlPID",
                                      true, true, false),
            "pid_instance");
    this.appendValueInput("input")
        .setCheck(null)
        .appendField("Input:");
    this.appendValueInput("output")
        .setCheck(null)
        .appendField("Output:");
    this.appendValueInput("setpoint")
        .setCheck(null)
        .appendField("SetPoint:");
    this.appendValueInput("Kp")
        .setCheck(null)
        .appendField("Kp:");
    this.appendValueInput("Ki")
        .setCheck(null)
        .appendField("Ki:");
    this.appendValueInput("Kd")
        .setCheck(null)
        .appendField("Kd:");
    this.appendDummyInput()
        .appendField("Direction:")
        .appendField(new Blockly.FieldDropdown([["DIRECT","DIRECT"], ["REVERSE","REVERSE"]]), "PID_direction");
    this.appendDummyInput()
        .appendField("Mode:")
        .appendField(new Blockly.FieldDropdown([["AUTO","0"], ["MANUAL","1"]]), "PID_Mode");
    this.setInputsInline(true);
    this.setColour(165);
 this.setTooltip("PID Setup Parameters");
 this.setHelpUrl("https://playground.arduino.cc/Code/PIDLibrary");
  }
};

Blockly.Blocks['pid_compute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID ")
        .appendField(
            new Blockly.FieldInstance("PID",
                                      "controlPID",
                                      false, true, false),
            "pid_instance")
        .appendField("Compute");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("PID Compute variables and control variables defined on Setup");
 this.setHelpUrl("https://playground.arduino.cc/Code/PIDLibrary");
  }
};

Blockly.Blocks['pid_settuning'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID ")
        .appendField(
            new Blockly.FieldInstance("PID",
                                      "controlPID",
                                      false, true, false),
            "pid_instance")
        .appendField("Tunning ");
    this.appendValueInput("Kp")
        .setCheck(null)
        .appendField("Kp:");
    this.appendValueInput("Ki")
        .setCheck(null)
        .appendField("Ki:");
    this.appendValueInput("Kd")
        .setCheck(null)
        .appendField("Kd:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("PID dinamic control variables defined Kp, Ki , Kd");
 this.setHelpUrl("https://playground.arduino.cc/Code/PIDLibrary");
  }
};

Blockly.Blocks['pid_settime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID ")
        .appendField(
            new Blockly.FieldInstance("PID",
                                      "controlPID",
                                      false, true, false),
            "pid_instance")
        .appendField("Sample Time");
    this.appendValueInput("sampleTime")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("PID Set Sample Time");
 this.setHelpUrl("https://playground.arduino.cc/Code/PIDLibrary");
  }
};

Blockly.Blocks['pid_setlimits'] = {
  init: function() {
    this.appendDummyInput()
    	.appendField("PID ")
		.appendField(
		    new Blockly.FieldInstance("PID",
		                              "controlPID",
		                              false, true, false),
		    "pid_instance")
        .appendField("Set Output Limits");
    this.appendValueInput("min")
        .setCheck("Number")
        .appendField("Min:");
    this.appendValueInput("max")
        .setCheck("Number")
        .appendField("Max:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("PID Set SOutput Limits");
 this.setHelpUrl("https://playground.arduino.cc/Code/PIDLibrary");
  }
};

Blockly.Blocks['pid_gettuning'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PID ")
        .appendField(
		    new Blockly.FieldInstance("PID",
		                              "controlPID",
		                              false, true, false),
		    "pid_instance")
        .appendField(" Tunning:")
        .appendField(new Blockly.FieldDropdown([["Kp","Kp"], ["Ki","Ki"], ["Kd","Kd"]]), "pid_tuning");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(165);
 this.setTooltip("PID get dinamic control variables defined Kp, Ki , Kd");
 this.setHelpUrl("https://playground.arduino.cc/Code/PIDLibrary");
  }
};