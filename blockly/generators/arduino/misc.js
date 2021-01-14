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

Blockly.Arduino['char_type'] = function(block) {
  var text_char = block.getFieldValue('char');
  var code = '\' \'';
  if (text_char.length > 0 ){
    code = '\''+text_char+'\'';
  }
  

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['toint'] = function(block) {
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);
  
  var code = value_str_input+'.toInt()';
  
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['set_interval'] = function(block) {
  var value_time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
  var variable_auxtimer = Blockly.Arduino.variableDB_.getName(block.getFieldValue('auxtimer'), Blockly.Variables.NAME_TYPE);
  var statements_action = Blockly.Arduino.statementToCode(block, 'action');
  
  Blockly.Arduino.addVariable(variable_auxtimer, "unsigned long" +" "+Blockly.Arduino.variableDB_.getName(variable_auxtimer,Blockly.Variables.NAME_TYPE)+";");

  var code = 'if( millis() - '+variable_auxtimer+' > '+value_time+'){\n'+
    '  '+variable_auxtimer+' = millis();\n'+
    statements_action+
    '};\n';
  return code;
};

Blockly.Arduino['set_timeevent'] = function(block) {
  var value_time = Blockly.Arduino.valueToCode(block, 'time', Blockly.Arduino.ORDER_ATOMIC);
  var checkbox_forever = block.getFieldValue('forever') == 'TRUE';
  var statements_action = Blockly.Arduino.statementToCode(block, 'action');
  var variable_var = Blockly.Arduino.variableDB_.getName(block.getFieldValue('auxvar'), Blockly.Variables.NAME_TYPE);
  
  var code; 
  
  Blockly.Arduino.addVariable(variable_var, "boolean" +" "+Blockly.Arduino.variableDB_.getName(variable_var,Blockly.Variables.NAME_TYPE)+" = true;");
  if (checkbox_forever){
    code = 'if( millis() > '+value_time+'){\n';
  }else{
   
    code = 'if( millis() > '+value_time+' && '+variable_var+'){\n';
    code = code+'  \t'+variable_var+' = false;\n';
  }
  
  code= code+'\t'+statements_action+'\n};\n';
  
  
  return code;
};

Blockly.Arduino['set_event'] = function(block) {
  var value_input = Blockly.Arduino.valueToCode(block, 'input', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_operator = block.getFieldValue('operator');
  var value_var = Blockly.Arduino.valueToCode(block, 'var', Blockly.Arduino.ORDER_ATOMIC);
  var statements_action = Blockly.Arduino.statementToCode(block, 'action');
  var code = '';
  
  Blockly.Arduino.addVariable(value_var, "" +"int "+Blockly.Arduino.variableDB_.getName(value_var,Blockly.Variables.NAME_TYPE)+";");

  code = 'if('+value_input +' '+dropdown_operator+' '+value_var+'){\n'+
  '\t'+value_var +' = '+ value_input+';\n'+
  '\t'+statements_action+'\n'+
  '}';

  return code;
};

Blockly.Arduino['return'] = function(block) {
  var code = 'return;\n';
  return code;
};

Blockly.Arduino['break'] = function(block) {
  var code = 'break;\n';
  return code;
};

Blockly.Arduino['string_contains'] = function(block) {
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_from = block.getFieldValue('from');
  var value_substring = Blockly.Arduino.valueToCode(block, 'substring', Blockly.Arduino.ORDER_ATOMIC);

  var code = value_str_input+'.'+dropdown_from+'('+value_substring+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['string_to'] = function(block) {
  var dropdown_format = block.getFieldValue('format');
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);

  var code = value_str_input+'.'+dropdown_format+'()';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['string_tochararray'] = function(block) {
  var variable_buffer = Blockly.Arduino.variableDB_.getName(block.getFieldValue('buffer'), Blockly.Variables.NAME_TYPE);
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.addVariable(variable_buffer, "char[]" +" "+Blockly.Arduino.variableDB_.getName(variable_buffer,Blockly.Variables.NAME_TYPE)+";");
  var code = value_str_input+'toCharArray('+variable_buffer+','+value_str_input+'.length());\n';
  return code;
};

Blockly.Arduino['string_indexof'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_substr = Blockly.Arduino.valueToCode(block, 'substr', Blockly.Arduino.ORDER_ATOMIC);
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);

  var code = value_str_input+'.'+dropdown_name+'('+value_substr+')';

  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['string_replace'] = function(block) {
  var value_substr = Blockly.Arduino.valueToCode(block, 'substr', Blockly.Arduino.ORDER_ATOMIC);
  var value_replace = Blockly.Arduino.valueToCode(block, 'replace', Blockly.Arduino.ORDER_ATOMIC);
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);

  var code = value_str_input+'.replace('+value_substr+','+value_replace+');\n';
  return code;
};

Blockly.Arduino['string_remove'] = function(block) {
  var value_substr = Blockly.Arduino.valueToCode(block, 'substr', Blockly.Arduino.ORDER_ATOMIC);
  var value_count = Blockly.Arduino.valueToCode(block, 'count', Blockly.Arduino.ORDER_ATOMIC);
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);

  var code = value_str_input+'.remove('+value_substr+','+value_count+');\n';
  return code;
};

Blockly.Arduino['string_trim'] = function(block) {
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);
  var code = value_str_input+'.trim();\n';
  return code;
};

Blockly.Arduino['string_substring'] = function(block) {
  var value_from = Blockly.Arduino.valueToCode(block, 'from', Blockly.Arduino.ORDER_ATOMIC);
  var value_to = Blockly.Arduino.valueToCode(block, 'to', Blockly.Arduino.ORDER_ATOMIC);
  var value_str_input = Blockly.Arduino.valueToCode(block, 'str_input', Blockly.Arduino.ORDER_ATOMIC);

  var code = value_str_input+'.substring( '+value_from+', '+value_to+' )';

  return [code, Blockly.Arduino.ORDER_NONE];
};