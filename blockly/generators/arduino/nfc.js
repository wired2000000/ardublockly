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

Blockly.Arduino['pn532_setup'] = function(block) {
	var variable_nfc_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('nfc_instance'), Blockly.Variables.NAME_TYPE);
	var dropdown_method = block.getFieldValue('method');
	var dropdown_hs = block.getFieldValue('HS');
	var include='#include <NfcAdapter.h>\n';
	var instance = '';

	if(dropdown_method == 'PN532_I2C'){
		Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
		Blockly.Arduino.addInclude('spi', '');
		instance += dropdown_method +' pn532 (Wire);\n';

	}else if (dropdown_method == 'PN532_HSU'){
		instance += dropdown_method +' pn532 ('+dropdown_hs+');\n';
		Blockly.Arduino.addInclude('spi', '');
	}else if(dropdown_method == 'PN532_SPI'){
		Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
		instance += dropdown_method +' pn532 (SPI,10);';
	} 
	Blockly.Arduino.addInclude('pn532', '#include <PN532.h>');
	include += '#include <'+dropdown_method+'.h>';
	instance += 'PN532 '+variable_nfc_instance+ ' (pn532);';
	Blockly.Arduino.addInclude('NFC', include);
	Blockly.Arduino.addDeclaration('NFC', instance);
	Blockly.Arduino.addSetup('NFC',variable_nfc_instance+'.begin();\n');

	//var code = '...;\n';
	//return code;
	var code = '';
    return code;
};

Blockly.Arduino['pn532_present'] = function(block) {
  var variable_nfc_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('nfc_instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addDeclaration('NFC_uid', 'uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };\n  uint8_t uidLength;');
  var code = variable_nfc_instance+'.readPassiveTargetID(PN532_MIFARE_ISO14443A, &uid[0], &uidLength)';

  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addInclude('pn532', '#include <PN532.h>',false);
  Blockly.Arduino.addDeclaration('NFC', 'PN532_SPI '+variable_nfc_instance+' (SPI,10);',false);
  Blockly.Arduino.addSetup('NFC',variable_nfc_instance+'.begin();\n',false);
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['pn532_uid'] = function(block) {
  var variable_nfc_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('nfc_instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addDeclaration('NFC_uid', 'uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };\n  uint8_t uidLength;');
  var code = variable_nfc_instance+'.readPassiveTargetID(PN532_MIFARE_ISO14443A, &uid[0], &uidLength)';

  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addInclude('pn532', '#include <PN532.h>',false);
  Blockly.Arduino.addDeclaration('NFC', 'PN532_SPI '+variable_nfc_instance+' (SPI,10);',false);
  Blockly.Arduino.addSetup('NFC',variable_nfc_instance+'.begin();\n',false);

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['pn532_write'] = function(block) {
  var variable_nfc_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('nfc_instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_nfc_sector = block.getFieldValue('nfc_sector');
  var checkbox_is_ndef = block.getFieldValue('is_ndef') == 'TRUE';
  var value_msg = Blockly.Arduino.valueToCode(block, 'msg', Blockly.Arduino.ORDER_ATOMIC);
  var value_keya = Blockly.Arduino.valueToCode(block, 'keya', Blockly.Arduino.ORDER_ATOMIC);
  var value_keyb = Blockly.Arduino.valueToCode(block, 'keyb', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('spi', '#include <SPI.h>',false);
  Blockly.Arduino.addInclude('pn532', '#include <PN532.h>',false);
  Blockly.Arduino.addDeclaration('NFC', 'PN532_SPI '+variable_nfc_instance+' (SPI,10);',false);
  Blockly.Arduino.addSetup('NFC',variable_nfc_instance+'.begin();\n',false);
  
  var code = '...;\n';
  return code;
};