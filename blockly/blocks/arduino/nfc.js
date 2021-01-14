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
Blockly.Blocks['pn532_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NFC ")
        .appendField(
            new Blockly.FieldInstance("NFC",
                                      "nfc",
                                      true, true, false),
            "nfc_instance")
        .appendField(new Blockly.FieldDropdown([["HSU","PN532_HSU"], ["SPI","PN532_SPI"], ["I2C","PN532_I2C"]]), "method")
        .appendField(new Blockly.FieldDropdown([["Serial","Serial"], ["Serial1","Serial1"], ["Serial2","Serial2"], ["Serial3","Serial3"]]), "HS");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip('Create connection with NFC Reader');
    this.setHelpUrl('https://github.com/elechouse/PN532');
  }
};

Blockly.Blocks['pn532_present'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("NFC detected")
        .appendField(
            new Blockly.FieldInstance("NFC",
                                      "nfc",
                                      false, true, false),
            "nfc_instance");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip('Check if NFC Tag message is present');
    this.setHelpUrl('https://github.com/elechouse/PN532');
  }
};


Blockly.Blocks['pn532_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read ")
        .appendField(
            new Blockly.FieldInstance("NFC",
                                      "nfc",
                                      false, true, false),
            "nfc_instance")
        .appendField("Sector")
        .appendField(new Blockly.FieldDropdown([["1","sector_1"], ["2","sector_2"], ["3","sector_3"], ["4","sector_4"], ["5","sector_5"], ["6","sector_6"], ["7","sector_7"], ["8","sector_8"], ["9","sector_9"], ["10","sector_10"], ["11","sector_11"], ["12","sector_12"], ["13","sector_13"], ["14","sector_14"], ["15","sector_15"]]), "nfc_sector");
    this.appendValueInput("keya")
        .setCheck(null)
        .appendField("Key A:");
    this.appendValueInput("keyb")
        .setCheck(null)
        .appendField("Key B:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Read Message from NFC');
    this.setHelpUrl('https://github.com/elechouse/PN532');
  }
};

Blockly.Blocks['pn532_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Write")
        .appendField(
            new Blockly.FieldInstance("NFC",
                                      "nfc",
                                      false, true, false),
            "nfc_instance")
        .appendField("Sector")
        .appendField(new Blockly.FieldDropdown([["1","sector_1"], ["2","sector_2"], ["3","sector_3"], ["4","sector_4"], ["5","sector_5"], ["6","sector_6"], ["7","sector_7"], ["8","sector_8"], ["9","sector_9"], ["10","sector_10"], ["11","sector_11"], ["12","sector_12"], ["13","sector_13"], ["14","sector_14"], ["15","sector_15"]]), "nfc_sector")
        .appendField("NDEF:")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "is_ndef");
    this.appendValueInput("msg")
        .setCheck(null)
        .appendField("message:");
    this.appendValueInput("keya")
        .setCheck(null)
        .appendField("Key A:");
    this.appendValueInput("keyb")
        .setCheck(null)
        .appendField("Key B:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Write Message from NFC');
    this.setHelpUrl('https://github.com/elechouse/PN532');
  }
};

Blockly.Blocks['pn532_uid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get UID")
        .appendField(
            new Blockly.FieldInstance("NFC",
                                      "nfc",
                                      false, true, false),
            "nfc_instance");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('Get UID form NFC Card');
    this.setHelpUrl('https://github.com/elechouse/PN532');
  }
};