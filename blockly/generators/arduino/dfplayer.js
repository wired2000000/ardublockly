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

Blockly.Arduino['dfplayer_instance'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var variable_ss_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('ss_instance'), Blockly.Variables.NAME_TYPE);

  Blockly.Arduino.addInclude('ss', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');
  //Blockly.Arduino.addDeclaration(variable_ss_instance, 'SoftwareSerial ' + variable_ss_instance + '('+ss_RXPin+','+ss_TXPin+');');

  var code = variable_instance+'.begin('+variable_ss_instance+');\n';
  return code;
};

Blockly.Arduino['dfplayer_exist'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var variable_ss_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('ss_instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('ss', '#include <SoftwareSerial.h>');
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');
  var code = variable_instance+'.begin('+variable_ss_instance+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['dfplayer_play'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.play('+value_name+');\n';
  return code;
};

Blockly.Arduino['dfplayer_play'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_play_option = block.getFieldValue('play_option');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.'+dropdown_play_option+'('+value_name+');\n';
  return code;
};

Blockly.Arduino['dfplayer_opt'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var dropdown_name = block.getFieldValue('NAME');
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.'+dropdown_name+'();\n';
  
  return code;
};

Blockly.Arduino['dfplayer_playmp3folder'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_song = Blockly.Arduino.valueToCode(block, 'song', Blockly.Arduino.ORDER_ATOMIC);
  var value_folder = Blockly.Arduino.valueToCode(block, 'folder', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_large = block.getFieldValue('large') == 'TRUE';
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');
  
  var dfunction = 'playFolder';
  if (checkbox_large){
    dfunction = 'playLargeFolder';
  }
  var code = variable_instance+'.'+dfunction+'('+value_folder+','+value_song+');\n';
  return code;
};

Blockly.Arduino['dfplayer_volume'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_volume = Blockly.Arduino.valueToCode(block, 'volume', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.volume('+value_volume+');\n';
  return code;
};

Blockly.Arduino['dfplayer_status'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.readState()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['dfplayer_filenumber'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.readCurrentFileNumber()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['dfplayer_filecounts'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.readFileCounts()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['dfplayer_filecountsinfolder'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  var value_folder = Blockly.Arduino.valueToCode(block, 'folder', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var code = variable_instance+'.readFileCountsInFolder('+value_folder+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['dfplayer_checkstatus'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');

  var check= 'String DFPlayerStatus(uint8_t type, int value){\n'+
'  String error;\n'+
'  switch (type) {\n'+
'    case TimeOut:\n'+
'      error = "Time Out!";\n'+
'      break;\n'+
'    case WrongStack:\n'+
'      error = "Stack Wrong!";\n'+
'      break;\n'+
'    case DFPlayerCardInserted:\n'+
'      error = "Card Inserted!";\n'+
'      break;\n'+
'    case DFPlayerCardRemoved:\n'+
'      error = "Card Removed!";\n'+
'      break;\n'+
'    case DFPlayerCardOnline:\n'+
'      error = "Card Online!";\n'+
'      break;\n'+
'    case DFPlayerPlayFinished:\n'+
'      error = "Number:";\n'+
'      error += value;\n'+
'      error += " Play Finished!";\n'+
'      break;\n'+
'    case DFPlayerError:\n'+
'      //Serial.print("DFPlayerError:");\n'+
'      switch (value) {\n'+
'        case Busy:\n'+
'          error = "Card not found";\n'+
'          break;\n'+
'        case Sleeping:\n'+
'          error = "Sleeping";\n'+
'          break;\n'+
'        case SerialWrongStack:\n'+
'          error = "Get Wrong Stack";\n'+
'          break;\n'+
'        case CheckSumNotMatch:\n'+
'          error = "Check Sum Not Match";\n'+
'          break;\n'+
'        case FileIndexOut:\n'+
'          error = "File Index Out of Bound";\n'+
'          break;\n'+
'        case FileMismatch:\n'+
'          error = "Cannot Find File";\n'+
'          break;\n'+
'        case Advertise:\n'+
'          error = "In Advertise";\n'+
'          break;\n'+
'        default:\n'+
'          error = "DFPlayerError: Unknown";\n'+
'          break;\n'+
'      }\n'+
'      break;\n'+
'    default:\n'+
'      break;\n'+
'  }\n'+
'  return error;\n'+
'}';
  Blockly.Arduino.addDeclaration('DFPLAYER_check', check);

  var code = 'DFPlayerStatus('+variable_instance+'.readType(),'+variable_instance+'.read())';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['dfplayer_available'] = function(block) {
  var variable_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('dfplayer_instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('DFPLAYER', '#include <DFRobotDFPlayerMini.h>',false);
  Blockly.Arduino.addDeclaration('DFPLAYER_instance'+variable_instance, 'DFRobotDFPlayerMini '+variable_instance+';');
  
  var code = variable_instance+'.available()';

  return [code, Blockly.Arduino.ORDER_NONE];
};