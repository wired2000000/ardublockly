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

Blockly.Blocks['dfplayer_instance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance")
        .appendField("in Serial")
        .appendField(
            new Blockly.FieldInstance("SOFTWARESERIAL",
                                      "comm",
                                      false, true, false),
            "ss_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Setup DFplayer Instance");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_exist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance")
        .appendField("in Serial")
        .appendField(
            new Blockly.FieldInstance("SOFTWARESERIAL",
                                      "comm",
                                      false, false, false),
            "ss_instance");
    this.setOutput(true, "Boolean");
    this.setColour(135);
 this.setTooltip("Setup DFplayer Instance");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_available'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "dfplayer_instance")
        .appendField("Available");
    this.setOutput(true, "Boolean");
    this.setColour(135);
 this.setTooltip("Check if MP3 is sending status info");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(" ")
        .appendField(new Blockly.FieldDropdown([["play","play"], ["loop","loop"], ["playMP3Folder","playMP3Folder"], ["advertise","advertise"]]), "play_option")
        .appendField("song number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Play DFplayer. Define the number of the song");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_opt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance")
        .appendField(new Blockly.FieldDropdown([["start","start"], ["next","next"], ["previous","previous"], ["random","randomAll"], ["pause","pause"], ["stop","stop"], ["volumeUp","volumeUp"], ["volumeDown","volumeDown"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Options DFplayer . Play, pause, stop, next, previous song and volume up and down.");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_playmp3folder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance")
        .appendField("play Song:");
    this.appendValueInput("song")
        .setCheck("Number");
    this.appendValueInput("folder")
        .setCheck("Number")
        .appendField("on folder:");
    this.appendDummyInput()
        .appendField("Large ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "large");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Play Song of DFplayer on folder");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_volume'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance");
    this.appendValueInput("volume")
        .setCheck("Number")
        .appendField("Set Volume");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
 this.setTooltip("Set Volume of DFplayer");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read State of DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("Read Status of DFplayer");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_filenumber'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read File Number of ")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("Read File number cursos of DFplayer");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_filecounts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read number of files of")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("Setup DFplayer Instance");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_filecountsinfolder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read number of files of")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance");
    this.appendValueInput("folder")
        .setCheck("Number")
        .appendField("on folder:");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("Setup DFplayer Instance");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};

Blockly.Blocks['dfplayer_checkstatus'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Check Status of DFPlayer")
        .appendField(
            new Blockly.FieldInstance("dfplayer",
                                      "mp3",
                                      false, false, false),
            "instance");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setColour(135);
 this.setTooltip("Check Status of DFplayer");
 this.setHelpUrl("https://www.dfrobot.com/wiki/index.php/DFPlayer_Mini_SKU:DFR0299");
  }
};