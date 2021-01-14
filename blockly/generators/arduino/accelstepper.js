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

Blockly.Arduino['accelstepper_setup'] = function(block) {
  var text_stepper_motor = block.getFieldValue('stepper_motor_instance');
  var value_pins = Blockly.Arduino.valueToCode(block, 'pins', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin1 = Blockly.Arduino.valueToCode(block, 'pin1', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin2 = Blockly.Arduino.valueToCode(block, 'pin2', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin3 = Blockly.Arduino.valueToCode(block, 'pin3', Blockly.Arduino.ORDER_ATOMIC);
  var value_pin4 = Blockly.Arduino.valueToCode(block, 'pin4', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('acc', '#include <AccelStepper.h>');
    Blockly.Arduino.addDeclaration(text_stepper_motor, 'AccelStepper ' + text_stepper_motor + '('+value_pins+','+value_pin1+','+value_pin2+','+value_pin3+','+value_pin4+');');
  var code = '';
  return code;
};

Blockly.Arduino['accelstepper_info'] = function(block) {
  var text_stepper_motor = block.getFieldValue('stepper_motor_instance');
  var dropdown_info = block.getFieldValue('info');
  Blockly.Arduino.addInclude('acc', '#include <AccelStepper.h>');
  //Blockly.Arduino.addDeclaration(stepper_instance, 'AccelStepper ' + ss_istance + '('+ss_RXPin+','+ss_TXPin+');');
  var code = text_stepper_motor + '.'+dropdown_info+'()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['accelstepper_run'] = function(block) {
  var text_stepper_motor = block.getFieldValue('stepper_motor_instance');
  var dropdown_stepper_run = block.getFieldValue('stepper_run');
  Blockly.Arduino.addInclude('acc', '#include <AccelStepper.h>');
  //Blockly.Arduino.addDeclaration(stepper_instance, 'AccelStepper ' + ss_istance + '('+ss_RXPin+','+ss_TXPin+');');
  var code = text_stepper_motor + '.'+dropdown_stepper_run+'();\n';
  return code;
};

Blockly.Arduino['accelstepper_move'] = function(block) {
  var text_stepper_motor = block.getFieldValue('stepper_motor_instance');
  var dropdown_move = block.getFieldValue('move');
  var value_steps = Blockly.Arduino.valueToCode(block, 'steps', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('acc', '#include <AccelStepper.h>');
  //Blockly.Arduino.addDeclaration(stepper_instance, 'AccelStepper ' + ss_istance + '('+ss_RXPin+','+ss_TXPin+');');
  var code = text_stepper_motor + '.'+dropdown_move+'('+value_steps+');\n';
  return code;
};

Blockly.Arduino['accelstepper_set'] = function(block) {
  var text_stepper_motor = block.getFieldValue('stepper_motor_instance');
  var dropdown_parameters = block.getFieldValue('parameters');
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addInclude('acc', '#include <AccelStepper.h>');
  //Blockly.Arduino.addDeclaration(stepper_instance, 'AccelStepper ' + ss_istance + '('+ss_RXPin+','+ss_TXPin+');');
  var code = text_stepper_motor + '.'+dropdown_parameters+'('+value_value+');\n';
  return code;
};

Blockly.Arduino['accelstepper_onoff'] = function(block) {
  var text_stepper_motor = block.getFieldValue('stepper_motor_instance');
  var dropdown_parameters = block.getFieldValue('parameters');
  Blockly.Arduino.addInclude('acc', '#include <AccelStepper.h>');
  //Blockly.Arduino.addDeclaration(stepper_instance, 'AccelStepper ' + ss_istance + '('+ss_RXPin+','+ss_TXPin+');');
  var code = text_stepper_motor + '.'+dropdown_parameters+'();\n';
  return code;
};
