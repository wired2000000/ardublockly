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

Blockly.Arduino['svante_go'] = function(block) {
  //var variable_svante_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('svante_instance'), Blockly.Variables.NAME_TYPE);
  var value_left_wheel = Blockly.Arduino.valueToCode(block, 'left_wheel', Blockly.Arduino.ORDER_ATOMIC);
  var value_right_wheel = Blockly.Arduino.valueToCode(block, 'right_wheel', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.addInclude('Svante', '#include <Svante.h>');

  var code = 'robot.go('+value_left_wheel+', '+value_right_wheel+');\n';
  return code;
};

Blockly.Arduino['svante_stop'] = function(block) {
  //var variable_svante_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('svante_instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('Svante', '#include <Svante.h>');
  var code = 'robot.stop();\n';
  return code;
};

Blockly.Arduino['svante_motorsdiff'] = function(block) {
  //var variable_svante_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('svante_instance'), Blockly.Variables.NAME_TYPE);
  var value_diff = Blockly.Arduino.valueToCode(block, 'diff', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('Svante', '#include <Svante.h>');
  var code = 'robot.setMotorsDiff('+value_diff+');\n';
  return code;
};

Blockly.Arduino['svante_get_irarray'] = function(block) {
  //var variable_svante_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('svante_instance'), Blockly.Variables.NAME_TYPE);
  var value_ir_array = Blockly.Arduino.valueToCode(block, 'ir_array', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('Svante', '#include <Svante.h>');
  var code = 'robot.getIRArray('+value_ir_array+')';
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['svante_linefollow'] = function(block) {
  //var variable_svante_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('svante_instance'), Blockly.Variables.NAME_TYPE);
  Blockly.Arduino.addInclude('Svante', '#include <Svante.h>');
  var code = 'robot.startLineFollow();\n';
  return code;
};

Blockly.Arduino['svante_cal_linefollow'] = function(block) {
  //var variable_svante_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('svante_instance'), Blockly.Variables.NAME_TYPE);
  var value_speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  var value_time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('Svante', '#include <Svante.h>');
  var code = 'robot.lineFollowCalibrate('+value_speed+','+value_time+');\n';
  return code;
};

Blockly.Arduino['svante_config_linefollow'] = function(block) {
  //var variable_svante_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('svante_instance'), Blockly.Variables.NAME_TYPE);
  var value_kp = Blockly.Arduino.valueToCode(block, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
  var value_kd = Blockly.Arduino.valueToCode(block, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
  var value_time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
  var value_speed = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('Svante', '#include <Svante.h>');
  var code = 'robot.lineFollowConfig('+value_kp+', '+value_kd+', '+value_time+', '+value_speed+');\n';
  return code;
};