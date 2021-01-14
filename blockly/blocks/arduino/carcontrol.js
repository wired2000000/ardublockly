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
Blockly.Blocks['smartcar_definepins'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Motor PINs");
    this.appendValueInput("M11")
        .setCheck("Number")
        .appendField("M11:");
    this.appendValueInput("M12")
        .setCheck("Number")
        .appendField("M12:");
    this.appendValueInput("M21")
        .setCheck("Number")
        .appendField("M21:");
    this.appendValueInput("M22")
        .setCheck("Number")
        .appendField("M22:");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('Define Motor Pins ');
    this.setHelpUrl('https://www.dlabs.co/curso-de-arduino-y-robotica-control-del-coche-siguelineas/');
  }
};

Blockly.Blocks['smartcar_ultrasound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ultrasound");
    this.appendValueInput("echo")
        .setCheck("Number")
        .appendField("Echo PIN:");
    this.appendValueInput("trigger")
        .setCheck("Number")
        .appendField("Trigger Pin:");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Returns Ultrasound Sensor in defined Echo/Trigger Pins');
    this.setHelpUrl('https://www.dlabs.co/curso-arduino-y-robotica-sensor-ultrasonido/');
  }
};

Blockly.Blocks['smartcar_l298n'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move Car");
    this.appendValueInput("M11")
        .setCheck("Number")
        .appendField("M11:");
    this.appendValueInput("M12")
        .setCheck("Number")
        .appendField("M12:");
    this.appendValueInput("M21")
        .setCheck("Number")
        .appendField("M21:");
    this.appendValueInput("M22")
        .setCheck("Number")
        .appendField("M22:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Move Car Function');
    this.setHelpUrl('https://www.dlabs.co/curso-de-arduino-y-robotica-control-del-coche-siguelineas/');
  }
};

