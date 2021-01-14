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

Blockly.Arduino['attach_interrupt'] = function(block) {
  var int_pin = block.getFieldValue('INT_PIN');
  var int_mode = block.getFieldValue('INT_MODE');
  var isr_name = Blockly.Arduino.valueToCode(block, 'ISR', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'attachInterrupt('+int_pin+','+isr_name+', '+int_mode+');\n';
  Blockly.Arduino.addSetup('INT_'+int_pin,code);
  var code = '';
  return code;
}

Blockly.Arduino['attach_interruptpin'] = function(block) {
  var int_pin = block.getFieldValue('INT_PIN');
  var int_mode = block.getFieldValue('INT_MODE');
  var value_isr = Blockly.Arduino.valueToCode(block, 'ISR', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'attachInterrupt(digitalPinToInterrupt('+int_pin+'),'+value_isr.replace("(","").replace(")","").replace("()","")+', '+int_mode+');\n';
  Blockly.Arduino.addSetup('INT_'+int_pin,code);
  var code = '';
  return code;
};

Blockly.Arduino['routine_setup'] = function(block) {
  var isr_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('isr_instance'), Blockly.Variables.NAME_TYPE);
  var isr_statements = Blockly.Arduino.statementToCode(block, 'ISR_statements');
  var code = 'void '+isr_instance+'(){\n'
	  +isr_statements
	  +'};\n';
  Blockly.Arduino.addDeclaration('ROUTINE'+isr_instance,code);
  var code = '';
  return code;
};

Blockly.Arduino['attach_routine'] = function(block) {
  var isr_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('isr_instance'), Blockly.Variables.NAME_TYPE);
  var code = 'void '+isr_instance+'(){\n'
	  +'};\n';
  Blockly.Arduino.addDeclaration('ROUTINE'+isr_instance,code,false);
  return [isr_instance, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['detach_interrupt'] = function(block) {
  var dropdown_int_pin = block.getFieldValue('INT_PIN');
  var code = 'detachInterrupt('+dropdown_int_pin+');\n';
  return code;
};

Blockly.Arduino['en_interrupt'] = function(block) {
  var checkbox_en_int = block.getFieldValue('en_int') == 'TRUE';
  var code = '';
  if (checkbox_en_int){
  	code = 'interrupts();';
  }else{
  	code = 'noInterrupts();';
  }
  
  return code;
};

Blockly.Arduino['volatile_block'] = function(block) {
  var value_code = Blockly.Arduino.valueToCode(block, 'code_in', Blockly.Arduino.ORDER_ATOMIC);
  if(value_code != "" && Blockly.Arduino.variables_[value_code] != null){
    Blockly.Arduino.variables_[value_code] ='volatile '+Blockly.Arduino.variables_[value_code];
  }
  
  Blockly.Arduino.addDeclaration('VOLATILE'+Blockly.Arduino.variables_[value_code],Blockly.Arduino.variables_[value_code]);
  //return [code, Blockly.Arduino.ORDER_NONE];
  var code = '';
  return code;
};