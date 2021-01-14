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

goog.provide('Blockly.Blocks.softwareserial');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


Blockly.Blocks['ss_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SoftwareSerial Setup")
        .appendField(
            new Blockly.FieldInstance("SOFTWARESERIAL",
                                      "comm",
                                      true, true, false),
            "ss_instance")
        .appendField(new Blockly.FieldDropdown([["9600","9600"], ["19200","19200"], ["38400","38400"], ["57600","57600"], ["74800","74800"], ["115200","115200"], ["230400","230400"]]), "ss_bps");
    this.appendValueInput("RX")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("RX:");
    this.appendValueInput("TX")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("TX:");
    this.setInputsInline(false);
    this.setColour(180);
    this.setTooltip('SoftwareSerial Definition');
    this.setHelpUrl('https://github.com/blascarr/');
  }
};

Blockly.Blocks['ss_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("SOFTWARESERIAL",
                                      "comm",
                                      false, true, false),
            "ss_instance")
        .appendField("available");
    this.setOutput(true, "Boolean");
    this.setColour(180);
    this.setTooltip('SoftwareSerial Available');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};


Blockly.Blocks['ss_print'] = {

  init: function() {
    this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
    this.setColour(Blockly.Blocks.serial.HUE);
    this.appendDummyInput()
        .appendField("SofwareSerial print")
        .appendField(
            new Blockly.FieldInstance("SOFTWARESERIAL",
                                      "comm",
                                      false, true, false),
            "ss_instance")
    this.appendValueInput('CONTENT');
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
        .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_SERIAL_PRINT_TIP);
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
        return;  // Block deleted or irrelevant event
    }

    // Get the Serial instance from this block
    var thisInstanceName = this.getFieldValue('ss_instance');
    // Iterate through top level blocks to find setup instance for the serial id
    var blocks = Blockly.mainWorkspace.getTopBlocks();
    var setupInstancePresent = false;
    for (var x = 0; x < blocks.length; x++) {
      var func = blocks[x].getSerialSetupInstance;
      if (func) {
        var setupBlockInstanceName = func.call(blocks[x]);
        if (thisInstanceName == setupBlockInstanceName) {
          setupInstancePresent = true;
          break;
        }
      }
    }

    if (!setupInstancePresent) {
      this.setWarningText(Blockly.Msg.ARD_SERIAL_PRINT_WARN.replace('%1',
          thisInstanceName), 'ss_setup');
    } else {
      this.setWarningText(null, 'ss_setup');
    }
  },

  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'ss_instance', 'ss');
  }
};

Blockly.Blocks['readsoftwareserial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read")
        .appendField(
            new Blockly.FieldInstance("SOFTWARESERIAL",
                                      "comm",
                                      false, true, false),
            "softwareSerial")
        .appendField("readString")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "readString");
    this.setInputsInline(true);
    this.checkOutput();
    this.setColour(180);
    this.setTooltip('Software Serial Read Function');
    this.setHelpUrl('');
  },
  checkOutput: function(){
    var b=this.getFieldValue("readString");
    if (b == 'TRUE'){
      this.setOutput(true, "Text"); 
    }else{
      this.setOutput(true, "Character");
    }
    
  },
  onchange:function (a){
    this.checkOutput();
  }
};

Blockly.Blocks['peeksoftwareserial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read")
        .appendField(
            new Blockly.FieldInstance("SOFTWARESERIAL",
                                      "comm",
                                      false, true, false),
            "softwareSerial")
        .appendField("peek")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "peek");
    this.setInputsInline(true);
    this.setOutput(true, "Character");
    this.setColour(180);
 this.setTooltip("Software Serial Read or Peek Function");
 this.setHelpUrl("https://www.arduino.cc/en/Serial/Peek");
  }
};

Blockly.Blocks['serial_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"], ["Serial3","Serial3"]]), "SERIAL_ID")
        .appendField("available");
    this.setOutput(true, "Boolean");
    this.setColour(Blockly.Blocks.serial.HUE);
    this.setTooltip('Serial Available');
    this.setHelpUrl('https://www.arduino.cc/en/Serial/Available');
  }
};

Blockly.Blocks['readserial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read")
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"], ["Serial3","Serial3"]]), "Serial")
        .appendField("readString")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "readString");
    this.setInputsInline(true);
    this.checkOutput();
    //this.setOutput(true, null);
    this.setColour(Blockly.Blocks.serial.HUE);
    this.setTooltip('Serial Read Function');
    this.setHelpUrl('');
  },
  checkOutput: function(){
    var b=this.getFieldValue("readString");
    if (b == 'TRUE'){
      this.setOutput(true, "Text"); 
    }else{
      this.setOutput(true, "Character");
    }
    
  },
  onchange:function (a){
    this.checkOutput();
  }
};

Blockly.Blocks['peekserial'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read")
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"], ["Serial3","Serial3"]]), "Serial")
        .appendField("peek")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "peek");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setColour(180);
 this.setTooltip("Serial Read or Peek Function");
 this.setHelpUrl("https://www.arduino.cc/en/Serial/Peek");
  }
};