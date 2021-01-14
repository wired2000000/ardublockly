Blockly.Arduino['smartcar_ultrasound_simple'] = function(block) {
  var value_echo = block.getFieldValue('ECHO_PIN');
  var value_trigger = block.getFieldValue('TRIGGER_PIN');

  var USDeclaration =   'float UltraSound(int echoPIN, int trigPIN){\n'+
   '\tunsigned int duration;\n'+
   '\tdigitalWrite(trigPIN, LOW); //bring low the trigger pin\n'+
   '\tdelayMicroseconds(2);\n'+
 
   '\tdigitalWrite(trigPIN, HIGH); //bring it high for 10 uS\n'+
   '\tdelayMicroseconds(10);\n'+
 
   '\tdigitalWrite(trigPIN, LOW); //bring it back low \n'+
   '\tduration = pulseIn(echoPIN, HIGH, 58000); //measure the duration of the echo pin\n'+
 
   '\t//Calculate the distance (in cm) based on the speed of sound at 340m/s.\n'+
   '\treturn duration*0.034/2; //during 1 uS the sound travels 0.00034m or 0.034cm\n'+
   '\t//during x uS it travels duration*0.034. Then divide by 2 to find the distance in cm\n'+
   '}\n';

  var USBegin ='\tpinMode('+value_echo+',INPUT);\n'+
   '\tpinMode('+value_trigger+',OUTPUT);';
  Blockly.Arduino.addDeclaration('USMethod', USDeclaration );
  Blockly.Arduino.addSetup('USBegin'+value_echo+value_trigger, USBegin);
  var code = 'UltraSound('+value_echo+','+value_trigger+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};


Blockly.Arduino['smartcar_l298n_simple'] = function(block) {

  var left = Blockly.Arduino.valueToCode(block, 'right', Blockly.Arduino.ORDER_ATOMIC);
  var right = Blockly.Arduino.valueToCode(block, 'left', Blockly.Arduino.ORDER_ATOMIC);
  var left_dir_pin = block.getFieldValue('LEFT_DIR_PIN');
  var left_thrust_pin = block.getFieldValue('LEFT_THRUST_PIN');
  var right_thrust_pin = block.getFieldValue('RIGHT_THRUST_PIN');
  var right_dir_pin = block.getFieldValue('RIGHT_DIR_PIN');
  

  var movecar = 'void move(int left_thrust, int right_thrust,int left_dir_pin,int left_thrust_pin, int right_thrust_pin, int right_dir_pin){\n'+
  '\t if( right_thrust >255) right_thrust=255;\n'+
  '\t if( right_thrust <-255) right_thrust=-255;\n'+
  '\t if( right_thrust>0){ \n'+
  '\t    digitalWrite(right_dir_pin,LOW);} else {\n'+
  '\t    digitalWrite(right_dir_pin,HIGH); \n'+
  '\t    right_thrust=255-right_thrust;}\n'+
  '\t if( left_thrust >255) left_thrust=255;\n'+
  '\t if( left_thrust <-255) left_thrust=-255;\n'+
  '\t if( left_thrust>0){ \n'+
  '\t    digitalWrite(left_dir_pin,LOW);} else {\n'+
  '\t    digitalWrite(left_dir_pin,HIGH); \n'+
  '\t    left_thrust=255-left_thrust;}\n'+
  '\t analogWrite(right_thrust_pin,right_thrust);\n'+
  '\t analogWrite(left_thrust_pin,left_thrust);\n'+
  '\t \n'+
  '\t  \n'+
  '}';
 
 var setupcar = '\tpinMode('+right_dir_pin+',OUTPUT);\n'+
   '\tpinMode('+right_thrust_pin+',OUTPUT);\n'+
   '\tpinMode('+left_thrust_pin+',OUTPUT);\n'+
   '\tpinMode('+left_dir_pin+',OUTPUT);\n';

  Blockly.Arduino.addDeclaration('smartcarsimpleDefine', movecar );
  Blockly.Arduino.addSetup('SmartcarsimplePins'+left_dir_pin+left_thrust_pin+right_thrust_pin+right_dir_pin, setupcar);
  var code = 'move('+ left +', '+ right +','+left_dir_pin+','+left_thrust_pin+ ','+right_thrust_pin+ ','+right_dir_pin+ ');\n';
  return code;
};