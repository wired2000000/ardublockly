Blockly.Arduino['smartcar_ultrasound_simple'] = function(block) {
  var value_echo = block.getFieldValue('ECHO_PIN');
  var value_trigger = block.getFieldValue('TRIGGER_PIN');

  var USDeclaration =   'float UltraSound(int echoPIN, int trigPIN){\n'+
   '  unsigned int duration;\n'+
   '  digitalWrite(trigPIN, LOW); //bring low the trigger pin\n'+
   '  delayMicroseconds(2);\n'+
   '  digitalWrite(trigPIN, HIGH); //bring it high for 10 uS\n'+
   '  delayMicroseconds(10);\n'+
   '  digitalWrite(trigPIN, LOW); //bring it back low \n'+
   '  duration = pulseIn(echoPIN, HIGH, 30000); //measure the duration of the echo pin\n'+
   '  if(duration==0) return 500; //if the pulse does not arrive return the max distance'+
   '  //Calculate the distance (in cm) based on the speed of sound at 340m/s.\n'+
   '  return duration*0.034/2; //during 1 uS the sound travels 0.00034m or 0.034cm\n'+
   '  //during x uS it travels duration*0.034. Then divide by 2 to find the distance in cm\n'+
   '}\n';

  var USBegin ='  pinMode('+value_echo+',INPUT);\n'+
   '  pinMode('+value_trigger+',OUTPUT);';
  Blockly.Arduino.addDeclaration('USMethod', USDeclaration );
  Blockly.Arduino.addSetup('USBegin'+value_echo+value_trigger, USBegin);
  var code = 'UltraSound('+value_echo+','+value_trigger+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['smartcar_definepins_simple'] = function(block) {
  var left_dir_pin = block.getFieldValue('LEFT_DIR_PIN');
  var left_thrust_pin = block.getFieldValue('LEFT_THRUST_PIN');
  var right_thrust_pin = block.getFieldValue('RIGHT_THRUST_PIN');
  var right_dir_pin = block.getFieldValue('RIGHT_DIR_PIN');

  var movecar = 'void movecar(int left_thrust, int right_thrust){\n'+
  '  if( right_thrust >255) right_thrust=255;\n'+
  '  if( right_thrust <-255) right_thrust=-255;\n'+
  '  if( right_thrust>0){ \n'+
  '    digitalWrite('+right_dir_pin+',LOW);} else {\n'+
  '    digitalWrite('+right_dir_pin+',HIGH); \n'+
  '    right_thrust=255-(-right_thrust);}\n'+
  '  if( left_thrust >255) left_thrust=255;\n'+
  '  if( left_thrust <-255) left_thrust=-255;\n'+
  '  if( left_thrust>0){ \n'+
  '    digitalWrite('+left_dir_pin+',LOW);} else {\n'+
  '    digitalWrite('+left_dir_pin+',HIGH); \n'+
  '    left_thrust=255-(-left_thrust);}\n'+
  '  analogWrite('+right_thrust_pin+',right_thrust);\n'+
  '  analogWrite('+left_thrust_pin+',left_thrust);\n'+
  // '\t \n'+
  //'\t  \n'+
  '}';
 
  var setupcar = 'pinMode('+right_dir_pin+',OUTPUT);\n'+
   '  pinMode('+right_thrust_pin+',OUTPUT);\n'+
   '  pinMode('+left_thrust_pin+',OUTPUT);\n'+
   '  pinMode('+left_dir_pin+',OUTPUT);\n';
Blockly.Arduino.addDeclaration('smartcarsimpleDefine', movecar );
  Blockly.Arduino.addSetup('SmartcarsimplePins'+left_dir_pin+left_thrust_pin+right_thrust_pin+right_dir_pin, setupcar);
  var code = '';
  return code;
};

Blockly.Arduino['smartcar_l298n_simple'] = function(block) {

  var left = Blockly.Arduino.valueToCode(block, 'right', Blockly.Arduino.ORDER_ATOMIC);
  var right = Blockly.Arduino.valueToCode(block, 'left', Blockly.Arduino.ORDER_ATOMIC);
     
  
  var code = 'movecar('+ left +', '+ right +');\n';
  return code;
};