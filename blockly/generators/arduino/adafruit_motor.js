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



Blockly.Arduino['AF_dc_motor_run'] = function(block) {

  var parameters = block.getFieldValue('parameters');
  var motor = block.getFieldValue('motor');
  var dc_motor_instance = 'motor'+motor;
  Blockly.Arduino.addInclude('AdafruitMotorShield', '#include <AFMotor.h>');
  Blockly.Arduino.addDeclaration(dc_motor_instance, 'AF_DCMotor ' + dc_motor_instance + '('+motor+');');
  var code = dc_motor_instance + '.run('+parameters+');\n';
  return code;
};

Blockly.Arduino['AF_dc_motor_set_speed'] = function(block) {
	
	 var motor = block.getFieldValue('motor');
	  var dc_motor_instance = 'motor'+motor;
	var speed = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
	
 // var text_stepper_motor = block.getFieldValue('stepper_motor_instance');
//  var dropdown_move = block.getFieldValue('move');
//  
  Blockly.Arduino.addInclude('AdafruitMotorShield', '#include <AFMotor.h>');
  Blockly.Arduino.addDeclaration(dc_motor_instance, 'AF_DCMotor ' + dc_motor_instance + '('+motor+');');
  var code = dc_motor_instance + '.setspeed('+speed+');\n';
  return code;
};

//TODO LIST: 
// 1) put pin assignments
// 2) put value control checks