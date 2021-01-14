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

Blockly.Blocks['sd_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SD setup in pin")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'SD_PIN');
    this.setColour(75);
	 this.setTooltip("SD Setup Instance");
	 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['sd_setup_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SD setup in pin")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'SD_PIN');
    this.setOutput(true, "Boolean");
    this.setColour(75);
 this.setTooltip("SD Setup Instance");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['sd_open'] = {
  init: function() {
    this.appendValueInput("DIR")
        .setCheck("Text")
        .appendField("SD open")
        .appendField(new Blockly.FieldDropdown([["read","FILE_READ"], ["Write","FILE_WRITE"]]), "read_write")
        .appendField("Dir:");
    this.setInputsInline(true);
    this.setOutput(true, "FILE");
    this.setColour(75);
 this.setTooltip("SD Open Directory");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['sd_exists'] = {
  init: function() {
    this.appendValueInput("DIR")
        .setCheck("Text")
        .appendField("SD exist File");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(75);
 this.setTooltip("SD Exists Directory");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['sd_actions'] = {
  init: function() {
    this.appendValueInput("DIR")
        .setCheck("Text")
        .appendField("SD")
        .appendField(new Blockly.FieldDropdown([["create Dir","mkdir"], ["remove Dir","rmdir"], ["remove File","remove"]]), "sd_action");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(75);
 this.setTooltip("SD Open Directory");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['file_instance'] = {
  init: function() {
    this.appendValueInput("file")
        .setCheck("FILE")
        .appendField("Get File")
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  true, false, false),
        "file_instance")
        .appendField("From: ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("File_instance for File Object");
 this.setHelpUrl("https://github.com/blascarr");
  }
};

Blockly.Blocks['file_info'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get File")
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  false, false, false),
        "file_instance")
        .appendField(new Blockly.FieldDropdown([["name","name"], ["size","size"]]), "info");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setColour(90);
 this.setTooltip("Get Info from File");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['file_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File")
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  false, false, false),
        "file_instance")
        .appendField(new Blockly.FieldDropdown([["read","read"], ["peek","peek"]]), "read_data");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setColour(90);
 this.setTooltip("Get Data from File");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['file_readbuffer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File")
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  false, false, false),
        "file_instance");
    this.appendValueInput("buffer")
        .setCheck(null)
        .appendField(" Read on buffer");
    this.appendValueInput("length")
        .setCheck("Number")
        .appendField("with length");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setColour(90);
 this.setTooltip("Get Data from File");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['file_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File")
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  false, false, false),
        "file_instance");
    this.appendValueInput("data")
        .setCheck(null)
        .appendField(new Blockly.FieldDropdown([["print","print"], ["println","println"], ["write","write"]]), "write_mode")
        .appendField("data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Write Data on File");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['file_seek'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File")
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  false, false, false),
        "file_instance");
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField(" check if ")
        .appendField(new Blockly.FieldDropdown([["available","available"], ["is Directory","isDirectory"], ["exist data on","seek"]]), "action");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(90);
 this.setTooltip("Seek Data on File");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['file_close'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("File ")
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  false, false, false),
        "file_instance")
        .appendField(new Blockly.FieldDropdown([["save","flush"], ["save and close","close"]]), "close_mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("flush and close File");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};

Blockly.Blocks['file_readbmp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read BMP on" )
        .appendField(
        new Blockly.FieldInstance("FILE",
                                  "file",
                                  false, false, false),
        "file_instance");
    this.appendValueInput("data")
        .setCheck("Text")
        .appendField(" From: ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("Write Data on File");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/SD");
  }
};