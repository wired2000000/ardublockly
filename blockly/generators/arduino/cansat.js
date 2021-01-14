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

Blockly.Arduino['bmp_begin'] = function(block) {
  var variable_bmp180 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('BMP180'), Blockly.Variables.NAME_TYPE);
  
  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('BMP180', '#include <BMP180.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  
  Blockly.Arduino.addDeclaration(variable_bmp180, 'BMP180 '+variable_bmp180+';');

  var code = variable_bmp180+'.begin()';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['bmp_simplebegin'] = function(block) {
  var variable_bmp180 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('BMP180'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('BMP180', '#include <BMP180.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_bmp180, 'BMP180 '+variable_bmp180+';');
  Blockly.Arduino.addSetup(variable_bmp180+'_instance', variable_bmp180+'.begin();');

  var code = '';
  return code;
};

Blockly.Arduino['bmp_getdata'] = function(block) {
  var variable_bmp180 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('BMP180'), Blockly.Variables.NAME_TYPE);
  var value_t = Blockly.Arduino.valueToCode(block, 'T', Blockly.Arduino.ORDER_ATOMIC);
  var value_p = Blockly.Arduino.valueToCode(block, 'P', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('BMP180', '#include <BMP180.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_bmp180, 'BMP180 '+variable_bmp180+';');

  var code = variable_bmp180+'.getData('+value_t+', '+value_p+');\n';
  return code;
};

Blockly.Arduino['bmp_getabsdata'] = function(block) {
  var variable_bmp180 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('BMP180'), Blockly.Variables.NAME_TYPE);
  var dropdown_option = block.getFieldValue('option');
  var value_p = Blockly.Arduino.valueToCode(block, 'P', Blockly.Arduino.ORDER_ATOMIC);
  var value_p0 = Blockly.Arduino.valueToCode(block, 'P0', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('BMP180', '#include <BMP180.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_bmp180, 'BMP180 '+variable_bmp180+';');

  var code = variable_bmp180+'.'+dropdown_option+'('+value_p+', '+value_p0+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['bmp_geterror'] = function(block) {
  var variable_bmp180 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('BMP180'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('BMP180', '#include <BMP180.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');

  var code = variable_bmp180+'.getError()';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['bmp_startdata'] = function(block) {
  var variable_bmp180 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('BMP180'), Blockly.Variables.NAME_TYPE);
  var dropdown_option = block.getFieldValue('option');

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('BMP180', '#include <BMP180.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_bmp180, 'BMP180 '+variable_bmp180+';');
  var value = '';
  if (dropdown_option =='startPressure'){
    value = 30;
  }
  var code = variable_bmp180+'.'+dropdown_option+'('+value+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['bmp_getdatatp'] = function(block) {
  var variable_bmp180 = Blockly.Arduino.variableDB_.getName(block.getFieldValue('BMP180'), Blockly.Variables.NAME_TYPE);
  var dropdown_option = block.getFieldValue('option');
  var value_t = Blockly.Arduino.valueToCode(block, 'T', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('BMP180', '#include <BMP180.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_bmp180, 'BMP180 '+variable_bmp180+';');

  var code = variable_bmp180+'.'+dropdown_option+'('+value_t+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['rfm69_instance'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var value_freq = block.getFieldValue('freq');
  var value_id = Blockly.Arduino.valueToCode(block, 'ID', Blockly.Arduino.ORDER_ATOMIC);
  var value_networkid = Blockly.Arduino.valueToCode(block, 'NetworkID', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');
  var code = variable_radio+'.initialize('+value_freq+','+value_id+','+value_networkid+');\n';
  return code;
};



Blockly.Arduino['rfm69_events'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var dropdown_evt = block.getFieldValue('evt');

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');

  var code = variable_radio+'.'+dropdown_evt+'()';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['rfm69_setdataconfig'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var dropdown_data = block.getFieldValue('data');
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');

  var code = variable_radio+'.'+dropdown_data+'('+value_value+');\n';
  return code;
};

Blockly.Arduino['rfm69_getdataconfig'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var dropdown_data = block.getFieldValue('data');
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');

  var code = variable_radio+'.'+dropdown_data+'('+value_value+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['rfm69_mode'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var dropdown_mode = block.getFieldValue('mode');

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');

  var code = variable_radio+'.'+dropdown_mode+'();\n';
  return code;
};

Blockly.Arduino['rfm69_setencrypt'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');

  var code = variable_radio+'.encrypt('+value_value+');\n';
  return code;
};

Blockly.Arduino['rfm69_receive'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');

  var code = variable_radio+'.ACKReceived('+value_value+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['rfm69_send'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var value_addr = Blockly.Arduino.valueToCode(block, 'addr', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_requestack = block.getFieldValue('requestACK') == 'TRUE';

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');
  var requestACK ='false';
  if (checkbox_requestack ){
    requestACK = 'true';
  }else{
    requestACK = 'false';
  }

  var senddata = '';
  var datalength;
  if(value_value.indexOf("\"") != -1){
    senddata = value_value;
    datalength = value_value.length-2; 
  }else{

    senddata = value_value+'.c_str()';
    datalength = value_value+'.length()'; 
  }

  var code = variable_radio+'.send('+value_addr+', '+senddata +','+datalength +','+ requestACK+');\n';
  return code;
};

Blockly.Arduino['rfm69_sendwithretry'] = function(block) {
  var variable_radio = Blockly.Arduino.variableDB_.getName(block.getFieldValue('radio'), Blockly.Variables.NAME_TYPE);
  var value_addr = Blockly.Arduino.valueToCode(block, 'addr', Blockly.Arduino.ORDER_ATOMIC);
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var value_retries = Blockly.Arduino.valueToCode(block, 'retries', Blockly.Arduino.ORDER_ATOMIC);
  var value_wait_time = Blockly.Arduino.valueToCode(block, 'wait_time', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('qbcan', '#include <qbcan.h>');
  //Blockly.Arduino.addInclude('RFM69', '#include <RFM69.h>');
  Blockly.Arduino.addInclude('Wire', '#include <Wire.h>');
  Blockly.Arduino.addInclude('SPI', '#include <SPI.h>');
  Blockly.Arduino.addDeclaration(variable_radio, 'RFM69 '+variable_radio+';');
  var senddata = '';
  var datalength;
  if(value_value.indexOf("\"") != -1){
    senddata = value_value;
    datalength = value_value.length-2; 
  }else{

    senddata = value_value+'.c_str()';
    datalength = value_value+'.length()'; 
  }

  var code = variable_radio+'.sendWithRetry('+value_addr+', '+senddata+', '+datalength+', '+value_retries+' ,'+value_wait_time+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};