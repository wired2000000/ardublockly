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



Blockly.Blocks['AF_dc_motor_run'] = {
  init: function() {
  //  this.appendDummyInput()
  //      .appendField("AdafruitMotorSet")
  //      .appendField(new Blockly.FieldInstance("DC_MOTOR",
    //                                  "dc_motor",
     //                                 false, false, false),
     //       "dc_motor_instance");
			
	this.appendDummyInput()
        .appendField('AdafruitMotor motor:')
        .appendField(new Blockly.FieldDropdown(
            [["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]), 'motor')
			
		.appendField("direction")
        .appendField(new Blockly.FieldDropdown([["Forward","FORWARD"], ["Backward","BACKWARD"], ["Stop","STOP"]]), "parameters");
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(50);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['AF_dc_motor_set_speed'] = {
  init: function() {
 //   this.appendDummyInput()
  //      .appendField("AdafruitMotorSet")
  //      .appendField(new Blockly.FieldInstance("DC_MOTOR",
 //                                     "dc_motor",
  //                                    false, false, false),
  //          "dc_motor_instance");
    this.appendDummyInput()
        .appendField('AdafruitMotor motor:')
        .appendField(new Blockly.FieldDropdown(
            [["M1","1"], ["M2","2"], ["M3","3"], ["M4","4"]]), 'motor')
		.appendField("speed");
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

