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

goog.provide('Blockly.Arduino.softwareserial');
goog.require('Blockly.Arduino');

Blockly.Arduino['ss_setup'] = function(block) {
  var ss_name = block.getFieldValue('ss_instance');
  var ss_bps = block.getFieldValue('ss_bps');
  var ss_RXPin = Blockly.Arduino.valueToCode(
      block, 'RX', Blockly.Arduino.ORDER_ATOMIC);
  var ss_TXPin = Blockly.Arduino.valueToCode(
      block, 'TX', Blockly.Arduino.ORDER_ATOMIC);
  var ss_istance = ss_name;

  Blockly.Arduino.addDeclaration(ss_istance, 'SoftwareSerial ' + ss_istance + '('+ss_RXPin+','+ss_TXPin+');');

  Blockly.Arduino.addInclude('ss', '#include <SoftwareSerial.h>');
  var setupCode = ss_istance + '.begin(' + ss_bps + ');';

  Blockly.Arduino.addSetup(ss_istance, setupCode, true);

  var code = '';
  return code;
};

Blockly.Arduino['ss_mega'] = function(block) {
  var ss_name = block.getFieldValue('ss_instance');
  var ss_speed = block.getFieldValue('SPEED');
  var ss_istance = ss_name;
  var setupCode = ss_istance + '.begin(' + ss_speed + ');';

  Blockly.Arduino.addInclude('ss', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addDeclaration(ss_istance, 'SoftwareSerial ' + ss_istance + '(2,3);',false);

  Blockly.Arduino.addSetup(ss_istance, setupCode, true);

  var code = '';
  return code;
};

Blockly.Arduino['ss_print'] = function(block) {
	var ss_name = block.getFieldValue('ss_instance');
  var ss_istance = ss_name;
	var checkbox_name = (block.getFieldValue('NEW_LINE') == 'TRUE');
	var content = Blockly.Arduino.valueToCode(
      block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.addInclude('ss', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addDeclaration(ss_istance, 'SoftwareSerial ' + ss_istance + '(2,3);',false);
	if (checkbox_name) {
		var code = ss_name + '.println(' + content + ');\n';
	} else {
		var code = ss_name + '.print(' + content + ');\n';
	}

	return code;
};

Blockly.Arduino['ss_available'] = function(block) {
  var ss_name = block.getFieldValue('ss_instance');
  var ss_istance = ss_name;
  var code = ss_name +'.available()';

  Blockly.Arduino.addInclude('ss', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addDeclaration(ss_istance, 'SoftwareSerial ' + ss_istance + '(2,3);',false);

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['readsoftwareserial'] = function(block) {
  var variable_softwareserial = Blockly.Arduino.variableDB_.getName(block.getFieldValue('softwareSerial'), Blockly.Variables.NAME_TYPE);
  var checkbox_readstring = block.getFieldValue('readString') == 'TRUE';

  var coderead = '.read()';
  if(checkbox_readstring){
    coderead = '.readString()';
  }
  var code = variable_softwareserial+coderead;
  
  Blockly.Arduino.addInclude('ss', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addDeclaration(variable_softwareserial, 'SoftwareSerial ' + variable_softwareserial + '(2,3);',false);

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['peeksoftwareserial'] = function(block) {
  var variable_softwareserial = Blockly.Arduino.variableDB_.getName(block.getFieldValue('softwareSerial'), Blockly.Variables.NAME_TYPE);
  var checkbox_peek = block.getFieldValue('peek') == 'TRUE';
  var code = '';
  if (checkbox_peek){
    code+= variable_softwareserial+'.peek()';
  }else{
    code+= variable_softwareserial+'.read)';
  }
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['peekserial'] = function(block) {
  var dropdown_serial = block.getFieldValue('Serial');
  var checkbox_peek = block.getFieldValue('peek') == 'TRUE';
  
  var code = '';
  if (checkbox_peek){
    code+= dropdown_serial+'.peek()';
  }else{
    code+= dropdown_serial+'.read()';
  }
  return [code, Blockly.Arduino.ORDER_NONE];
};