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
Blockly.Blocks['smartcar_definepins_simple'] = {
  init: function() {
    this.appendDummyInput()
 		.appendField('Left dir pin')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'LEFT_DIR_PIN')
	this.appendDummyInput()
		.appendField('Left thrust pin')
        .appendField(new Blockly.FieldDropdown(
			Blockly.Arduino.Boards.selected.digitalPins), 'LEFT_THRUST_PIN')
	this.appendDummyInput()
		.appendField('Right thrust pin')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'RIGHT_THRUST_PIN')
	this.appendDummyInput()
		.appendField('Right dir pin')
        .appendField(new Blockly.FieldDropdown(
		Blockly.Arduino.Boards.selected.digitalPins), 'RIGHT_DIR_PIN')
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('Define Motor Pins ');
    //this.setHelpUrl('https://www.dlabs.co/curso-de-arduino-y-robotica-control-del-coche-siguelineas/');
  }
};

Blockly.Blocks['smartcar_ultrasound_simple'] = {
  /**
   * Block for for the spi transfer with a return value.
   * @this Blockly.Block
   */
  init: function() {
    // Drop down list to contain all digital pins plus an option for 'none'
  
   

    this.setHelpUrl('http://arduino.cc/en/Reference/SPITransfer');
    this.setColour(Blockly.Blocks.spi.HUE);
  

    this.appendDummyInput()
        .appendField('distance in cm')
		.appendField('trigger pin')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'TRIGGER_PIN')
		.appendField('echo pin')
        .appendField(new Blockly.FieldDropdown(
		Blockly.Arduino.Boards.selected.digitalPins), 'ECHO_PIN');
        
    this.setInputsInline(true);
    this.setOutput(true);
    //this.setTooltip(Blockly.Msg.ARD_SPI_TRANSRETURN_TIP);
  },
  
};

Blockly.Blocks['smartcar_l298n_simple'] = {
  init: function() {
    this.appendDummyInput()

//	this.appendDummyInput()
    this.appendValueInput("left")
        .setCheck("Number")
        .appendField("Left motor thrust:");
    this.appendValueInput("right")
        .setCheck("Number")
        .appendField("Right motor thrust:");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Move Car Function');
    //this.setHelpUrl('https://www.dlabs.co/curso-de-arduino-y-robotica-control-del-coche-siguelineas/');
  }
};

