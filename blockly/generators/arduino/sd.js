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

Blockly.Arduino['sd_setup'] = function(block) {
  var dropdown_sd_pin = block.getFieldValue('SD_PIN');
  var code = 'SD.begin('+dropdown_sd_pin+');\n';

  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>\n');
  Blockly.Arduino.addSetup('SD',code);

  //return code;
  var code = '';
  return code;
};

Blockly.Arduino['sd_setup_output'] = function(block) {
  var dropdown_sd_pin = block.getFieldValue('SD_PIN');
  var code = 'SD.begin('+dropdown_sd_pin+');\n';

  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>\n');

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['sd_open'] = function(block) {
  var dropdown_read_write = block.getFieldValue('read_write');
  var value_dir = Blockly.Arduino.valueToCode(block, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SD.open('+value_dir+', '+dropdown_read_write+')';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['sd_exists'] = function(block) {
  var value_dir = Blockly.Arduino.valueToCode(block, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SD.exists('+value_dir+') ';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['sd_actions'] = function(block) {
  var dropdown_sd_action = block.getFieldValue('sd_action');
  var value_dir = Blockly.Arduino.valueToCode(block, 'DIR', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'SD.'+dropdown_sd_action+'('+value_dir+')';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_instance'] = function(block) {
  var variable_file_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('file_instance'), Blockly.Variables.NAME_TYPE);
  var value_file = Blockly.Arduino.valueToCode(block, 'file', Blockly.Arduino.ORDER_ATOMIC);
  var code = variable_file_instance+' = '+value_file;
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(variable_file_instance,'File '+variable_file_instance+';',false);
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['file_info'] = function(block) {
  var fileName = block.getFieldValue('file_instance');
  var dropdown_info = block.getFieldValue('info');
  var code = fileName+'.'+dropdown_info+'()';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(fileName,'File '+fileName+';');
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_read'] = function(block) {
  var fileName = block.getFieldValue('file_instance');
  var dropdown_read_data = block.getFieldValue('read_data');
  var code = fileName+'.'+dropdown_read_data+'()';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(fileName,'File '+fileName+';');
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_readbuffer'] = function(block) {
  var fileName = block.getFieldValue('file_instance');
  var value_buffer = Blockly.Arduino.valueToCode(block, 'buffer', Blockly.Arduino.ORDER_ATOMIC);
  var value_length = Blockly.Arduino.valueToCode(block, 'length', Blockly.Arduino.ORDER_ATOMIC);
  var code = fileName+'.read('+value_buffer+','+value_length+')';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(fileName,'File '+fileName+';');
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_write'] = function(block) {
  var fileName = block.getFieldValue('file_instance');
  var dropdown_write_mode = block.getFieldValue('write_mode');
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = fileName+'.'+dropdown_write_mode+'('+value_data+');';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(fileName,'File '+fileName+';');
  return code;
};

Blockly.Arduino['file_seek'] = function(block) {
  var fileName = block.getFieldValue('file_instance');
  var dropdown_action = block.getFieldValue('action');
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  
  var val= '';
  if(dropdown_action == 'seek'){
    val = value_data;
  }
  var code = fileName+'.'+dropdown_action+'('+val+')';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(fileName,'File '+fileName+';');
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['file_close'] = function(block) {
  var fileName = block.getFieldValue('file_instance');
  var dropdown_close_mode = block.getFieldValue('close_mode');
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(fileName,'File '+fileName+';');
  var code = fileName+'.'+dropdown_close_mode+'();\n';
  return code;
};

Blockly.Arduino['file_readbmp'] = function(block) {
  var fileName = block.getFieldValue('file_instance');
  var value_data = Blockly.Arduino.valueToCode(block, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code = fileName+'...';
  Blockly.Arduino.addInclude('spi', '#include <SPI.h>');
  Blockly.Arduino.addInclude('SD', '#include <SD.h>');
  Blockly.Arduino.addDeclaration(fileName,'File '+fileName+';');
  return [code, Blockly.Arduino.ORDER_NONE];
};