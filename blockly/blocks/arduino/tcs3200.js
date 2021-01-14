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

'use strict';

goog.provide('Blockly.Blocks.tcs3200');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Blockly.Types.addType("colorData", Blockly.Type.BasicTypes.ARRAY , [Blockly.Type.BasicTypes.COLOUR  ]);
Blockly.Blocks['tcs3200_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS3200 Config")
        .appendField(new Blockly.FieldDropdown([["Serial","0"], ["Serial1","1"], ["Serial2","2"], ["Serial3","3"], ["Bluetooth","4"]]), "comm_mode")
        .appendField(new Blockly.FieldDropdown([["9600","9600"], ["19200","19200"], ["38400","38400"], ["57600","57600"], ["115200","115200"]]), "BPS")
        .appendField("BPS")
        .appendField("DEBUG")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DEBUG")
        .appendField("CAL")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "DEBUG_CAL")
        .appendField("COLOR")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "SENDCOLOR");
    this.appendValueInput("RX")
        .setCheck("Number")
        .appendField("RX");
    this.appendValueInput("TX")
        .setCheck("Number")
        .appendField("TX");
    this.setInputsInline(true);
    this.setColour(75);
 this.setTooltip("Defines for communication Mode");
 this.setHelpUrl("https://github.com/blascarr/TCS3200-ColorSensor");
  }
};

Blockly.Blocks['tcs3200_defines'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS3200 Data")
        .appendField(new Blockly.FieldDropdown([["Debug","DEBUG"], ["Debug_Cal","DEBUG_CAL"], ["SendColor","SENDCOLOR"]]), "cmd_mode");
    this.appendValueInput("START_CMD")
        .setCheck("Text")
        .appendField("Start");
    this.appendValueInput("SEP_CMD")
        .setCheck("Text")
        .appendField("Separator");
    this.appendValueInput("END_CMD")
        .setCheck("Text")
        .appendField("End");
    this.setInputsInline(true);
    this.setColour(75);
 this.setTooltip("Defines for protocol information ");
 this.setHelpUrl("https://github.com/blascarr/TCS3200-ColorSensor");
  }
};

Blockly.Blocks['tcs3200_basicsetup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS3200 Color Sensor")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      true, true, false),
            "cs_instance");
    this.appendValueInput("S2")
        .setCheck("Number")
        .appendField("S2:");
    this.appendValueInput("S3")
        .setCheck("Number")
        .appendField("S3:");
    this.appendValueInput("OUT")
        .setCheck("Number")
        .appendField("OUT:");
    this.setInputsInline(true);
    this.setColour(75);
    this.setTooltip("Color Sensor TCS3200 Definition");
    this.setHelpUrl("https://github.com/blascarr/blockly");
  },
  getCS_SetupInstance: function() {
    return this.getFieldValue("cs_instance");
  }
};

Blockly.Blocks['tcs3200_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS3200 Color Sensor")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      true, true, false),
            "cs_instance");
    this.appendValueInput("S2")
        .setCheck("Number")
        .appendField("S2:");
    this.appendValueInput("S3")
        .setCheck("Number")
        .appendField("S3:");
    this.appendValueInput("OUT")
        .setCheck("Number")
        .appendField("OUT:");
    this.appendValueInput("LED")
        .setCheck("Number")
        .appendField("LED:");
    this.setInputsInline(true);
    this.setColour(75);
    this.setTooltip('Color Sensor TCS3200 Definition');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  },

  getCS_SetupInstance: function() {
    return this.getFieldValue("cs_instance");
  }

};

Blockly.Blocks['tcs3200_setupall'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS3200 Color Sensor")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      true, true, false),
            "cs_instance");
    this.appendValueInput("S2")
        .setCheck("Number")
        .appendField("S2");
    this.appendValueInput("S3")
        .setCheck("Number")
        .appendField("S3");
    this.appendValueInput("OUT")
        .setCheck("Number")
        .appendField("OUT");
    this.appendValueInput("S0")
        .setCheck("Number")
        .appendField("S0");
    this.appendValueInput("S1")
        .setCheck("Number")
        .appendField("S1");
    this.appendValueInput("LED")
        .setCheck("Number")
        .appendField("LED");
    this.setInputsInline(true);
    this.setColour(75);
    this.setTooltip('Color Sensor TCS3200 Complete Definition');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  },
  getCS_SetupInstance: function() {
    return this.getFieldValue("cs_instance");
  }
};

Blockly.Blocks['tcs3200_colorchange'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color of ")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      false, true, false),
            "cs_instance")
        .appendField("has changed");
    this.setOutput(true, "Boolean");
    this.setColour(75);
    this.setTooltip("Boolean that check if color has changed");
    this.setHelpUrl("https://github.com/blascarr/blockly");
  },
  getCS_SetupInstance: function() {
    return this.getFieldValue("cs_instance");
  }
};

Blockly.Blocks['tcs3200_readcolor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS3200 Read Color (String)")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      false, true, false),
            "cs_instance");
    this.setOutput(true, "String");
    this.setColour(75);
    this.setTooltip('Returns Color String');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['tcs3200_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Color")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      false, true, false),
            "cs_instance")
        .appendField(new Blockly.FieldDropdown([["RGB","true"], ["RAW","false"]]), "RGB_RAW");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip("Read Color. Update the color readed from sensor on a loop");
    this.setHelpUrl("https://github.com/blascarr/blockly");
  },
  getCS_SetupInstance: function() {
    return this.getFieldValue("cs_instance");
  }
};

Blockly.Blocks['tcs3200_readint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TCS3200 Color read (integer)")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      false, true, false),
            "cs_instance");
    this.setOutput(true, 'Number');
    this.setColour(75);
    this.setTooltip('Returns Color position on Color Table');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  },
  getCS_SetupInstance: function() {
    return this.getFieldValue("cs_instance");
  }
};


Blockly.Blocks['tcs3200_calibration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sensor Color Calibration")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      false, true, false),
            "cs_instance");
    this.appendValueInput("EEPROM_CAL")
        .setCheck(null)
        .appendField("EEPROM Dir");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('Calibration for Color Sensor');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['tcs3200_loadcalibration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Load Color Calibration")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      false, true, false),
            "cs_instance");
    this.appendValueInput("eeprom_calibration")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('Load Color Calibration');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['tcs3200_readcalibration'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Color Calibration")
        .appendField(
            new Blockly.FieldInstance("TCS3200",
                                      "CS",
                                      false, true, false),
            "cs_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
    this.setTooltip('Read Color Calibration');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  },
  getCS_SetupInstance: function() {
    return this.getFieldValue("cs_instance");
  }
};