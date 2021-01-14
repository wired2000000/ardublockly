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

Blockly.Arduino['smartcar_ultrasound'] = function(block) {
  var value_echo = Blockly.Arduino.valueToCode(block, 'echo', Blockly.Arduino.ORDER_ATOMIC);
  var value_trigger = Blockly.Arduino.valueToCode(block, 'trigger', Blockly.Arduino.ORDER_ATOMIC);

  var USDeclaration =   'float US(int echoPIN, int trigPIN){\n'+
   '\tfloat duration;\n'+
   '\tdigitalWrite(trigPIN, LOW); //Limpiamos la onda de salida (TRIGGER)\n'+
   '\tdelayMicroseconds(2);\n'+
 
   '\tdigitalWrite(trigPIN, HIGH); //Activamos el impulso de salida (TRIGGER)\n'+
   '\tdelayMicroseconds(10);\n'+
 
   '\tdigitalWrite(trigPIN, LOW); //Desactivamos el impulso de salida (TRIGGER) de duracion 10ms \n'+
   '\tduration = pulseIn(echoPIN, HIGH, 58000); //Medimos la duracion de la onda hasta que rebota y llega a la entrada ECHO\n'+
 
   '\t//Calculate the distance (in cm) based on the speed of sound.\n'+
   '\treturn duration/29.1/2; //29.1 es la inversa de 0.34 = 340/10000\n'+
   '}\n';

  var USBegin ='\tpinMode('+value_echo+',INPUT);\n'+
   '\tpinMode('+value_trigger+',OUTPUT);';
  Blockly.Arduino.addDeclaration('USMethod', USDeclaration );
  Blockly.Arduino.addSetup('USBegin', USBegin);
  var code = 'US('+value_echo+','+value_trigger+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['smartcar_definepins'] = function(block) {
  var value_m11 = Blockly.Arduino.valueToCode(block, 'M11', Blockly.Arduino.ORDER_ATOMIC);
  var value_m12 = Blockly.Arduino.valueToCode(block, 'M12', Blockly.Arduino.ORDER_ATOMIC);
  var value_m21 = Blockly.Arduino.valueToCode(block, 'M21', Blockly.Arduino.ORDER_ATOMIC);
  var value_m22 = Blockly.Arduino.valueToCode(block, 'M22', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.addVariable('M11','int M11='+value_m11+';',true);
  Blockly.Arduino.addVariable('M12','int M12='+value_m12+';',true);
  Blockly.Arduino.addVariable('M21','int M21='+value_m21+';',true);
  Blockly.Arduino.addVariable('M22','int M22='+value_m22+';',true);

  var movecar = 'void move(int S11, int S12, int S21, int S22){\n'+
	'\tanalogWrite(M11,S11);\n'+
 	'\tanalogWrite(M12,S12);\n'+
 	'\tanalogWrite(M21,S21);\n'+
 	'\tanalogWrite(M22,S22);\n'+
	'}';

  var setupcar = '\tpinMode(M11,OUTPUT);\n'+
   '\tpinMode(M12,OUTPUT);\n'+
   '\tpinMode(M21,OUTPUT);\n'+
   '\tpinMode(M22,OUTPUT);\n';
  Blockly.Arduino.addDeclaration('smartcarDefine', movecar );
  Blockly.Arduino.addSetup('SmartcarPins', setupcar);
  var code = '';
  return code;
};

Blockly.Arduino['smartcar_l298n'] = function(block) {
  var value_m11 = Blockly.Arduino.valueToCode(block, 'M11', Blockly.Arduino.ORDER_ATOMIC);
  var value_m12 = Blockly.Arduino.valueToCode(block, 'M12', Blockly.Arduino.ORDER_ATOMIC);
  var value_m21 = Blockly.Arduino.valueToCode(block, 'M21', Blockly.Arduino.ORDER_ATOMIC);
  var value_m22 = Blockly.Arduino.valueToCode(block, 'M22', Blockly.Arduino.ORDER_ATOMIC);

  var movecar = 'void move(int S11, int S12, int S21, int S22){\n'+
  '\tanalogWrite(M11,S11);\n'+
  '\tanalogWrite(M12,S12);\n'+
  '\tanalogWrite(M21,S21);\n'+
  '\tanalogWrite(M22,S22);\n'+
  '}';

  Blockly.Arduino.addVariable('M11','int M11=5;',false);
  Blockly.Arduino.addVariable('M12','int M12=6;',false);
  Blockly.Arduino.addVariable('M21','int M21=9;',false);
  Blockly.Arduino.addVariable('M22','int M22=10;',false);


  Blockly.Arduino.addDeclaration('smartcarDefine', movecar );

  var code = 'move('+value_m11+', '+value_m12+', '+value_m21+', '+value_m22+');\n';
  return code;
};