Blockly.Arduino['pid_setup'] = function(block) {
  var pid_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pid_instance'), Blockly.Variables.NAME_TYPE);
  var value_input = Blockly.Arduino.valueToCode(block, 'input', Blockly.Arduino.ORDER_ATOMIC);
  var value_output = Blockly.Arduino.valueToCode(block, 'output', Blockly.Arduino.ORDER_ATOMIC);
  var value_setpoint = Blockly.Arduino.valueToCode(block, 'setpoint', Blockly.Arduino.ORDER_ATOMIC);
  var value_kp = Blockly.Arduino.valueToCode(block, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
  var value_ki = Blockly.Arduino.valueToCode(block, 'Ki', Blockly.Arduino.ORDER_ATOMIC);
  var value_kd = Blockly.Arduino.valueToCode(block, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
  var pid_direction = block.getFieldValue('PID_direction');
  var pid_mode = block.getFieldValue('PID_Mode');

  var PID_object = 'PID '+pid_instance+'(&'+value_input+', &'+value_output+', &'+value_setpoint+', '+value_kp+', '+value_ki+', '+value_kd+', '+pid_direction+');\n';

  Blockly.Arduino.addInclude('PID', '#include <PID_v1.h>\n');
  Blockly.Arduino.addVariable('input_'+pid_instance,'double '+value_input+';',true);
  Blockly.Arduino.addVariable('output_'+pid_instance,'double '+value_output+';',true);
  Blockly.Arduino.addVariable('setpoint_'+pid_instance,'double '+value_setpoint+';',true);
  Blockly.Arduino.addDeclaration('PID',PID_object);
  Blockly.Arduino.addSetup('Mode'+pid_instance, pid_instance+'.SetMode('+pid_mode+');', true);
  //return code;
  var code = '';
  return code;
};

Blockly.Arduino['pid_compute'] = function(block) {
  var pid_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pid_instance'), Blockly.Variables.NAME_TYPE);

  var PID_object = 'PID '+pid_instance+'(&Input, &Output, &Setpoint, 1, 1, 1, DIRECT);\n';

  Blockly.Arduino.addInclude('PID', '#include <PID_v1.h>\n',false);
  Blockly.Arduino.addVariable('input_'+pid_instance,'double Input;',false);
  Blockly.Arduino.addVariable('output_'+pid_instance,'double Output;',false);
  Blockly.Arduino.addVariable('setpoint_'+pid_instance,'double Setpoint;',false);
  Blockly.Arduino.addDeclaration('PID',PID_object,false);

  var code = pid_instance+'.Compute();\n';
  return code;
};

Blockly.Arduino['pid_settuning'] = function(block) {
  var pid_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pid_instance'), Blockly.Variables.NAME_TYPE);
  var value_kp = Blockly.Arduino.valueToCode(block, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
  var value_ki = Blockly.Arduino.valueToCode(block, 'Ki', Blockly.Arduino.ORDER_ATOMIC);
  var value_kd = Blockly.Arduino.valueToCode(block, 'Kd', Blockly.Arduino.ORDER_ATOMIC);

  var PID_object = 'PID '+pid_instance+'(&Input, &Output, &Setpoint, 1, 1, 1, DIRECT);\n';

  Blockly.Arduino.addInclude('PID', '#include <PID_v1.h>\n',false);
  Blockly.Arduino.addVariable('input_'+pid_instance,'double Input;',false);
  Blockly.Arduino.addVariable('output_'+pid_instance,'double Output;',false);
  Blockly.Arduino.addVariable('setpoint_'+pid_instance,'double Setpoint;',false);
  Blockly.Arduino.addDeclaration('PID',PID_object,false);

  var code = pid_instance+'.SetTunings('+value_kp+','+value_ki+','+value_kd+');\n';
  return code;
};

Blockly.Arduino['pid_settime'] = function(block) {
  var pid_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pid_instance'), Blockly.Variables.NAME_TYPE);
  var sampletime = Blockly.Arduino.valueToCode(block, 'sampleTime', Blockly.Arduino.ORDER_ATOMIC);

  var PID_object = 'PID '+pid_instance+'(&Input, &Output, &Setpoint, 1, 1, 1, DIRECT);\n';

  Blockly.Arduino.addInclude('PID', '#include <PID_v1.h>\n',false);
  Blockly.Arduino.addVariable('input_'+pid_instance,'double Input;',false);
  Blockly.Arduino.addVariable('output_'+pid_instance,'double Output;',false);
  Blockly.Arduino.addVariable('setpoint_'+pid_instance,'double Setpoint;',false);
  Blockly.Arduino.addDeclaration('PID',PID_object,false);

  var code = pid_instance+'.SetSampleTime('+sampletime+');\n';
  return code;
};

Blockly.Arduino['pid_setlimits'] = function(block) {
  var pid_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pid_instance'), Blockly.Variables.NAME_TYPE);
  var value_min = Blockly.Arduino.valueToCode(block, 'min', Blockly.Arduino.ORDER_ATOMIC);
  var value_max = Blockly.Arduino.valueToCode(block, 'max', Blockly.Arduino.ORDER_ATOMIC);
  
  var PID_object = 'PID '+pid_instance+'(&Input, &Output, &Setpoint, 1, 1, 1, DIRECT);\n';

  Blockly.Arduino.addInclude('PID', '#include <PID_v1.h>\n',false);
  Blockly.Arduino.addVariable('input_'+pid_instance,'double Input;',false);
  Blockly.Arduino.addVariable('output_'+pid_instance,'double Output;',false);
  Blockly.Arduino.addVariable('setpoint_'+pid_instance,'double Setpoint;',false);
  Blockly.Arduino.addDeclaration('PID',PID_object,false);

  var code = pid_instance+'.SetOutputLimits('+value_min+','+value_max+');\n';
  return code;
};

Blockly.Arduino['pid_gettuning'] = function(block) {
  var pid_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('pid_instance'), Blockly.Variables.NAME_TYPE);
  var pid_tuning = block.getFieldValue('pid_tuning');
  
  var PID_object = 'PID '+pid_instance+'(&Input, &Output, &Setpoint, 1, 1, 1, DIRECT);\n';

  Blockly.Arduino.addInclude('PID', '#include <PID_v1.h>\n',false);
  Blockly.Arduino.addVariable('input_'+pid_instance,'double Input;',false);
  Blockly.Arduino.addVariable('output_'+pid_instance,'double Output;',false);
  Blockly.Arduino.addVariable('setpoint_'+pid_instance,'double Setpoint;',false);
  Blockly.Arduino.addDeclaration('PID',PID_object,false);
  var getK;
  if (pid_tuning == 'Kp'){
    getK='.GetKp()'
  }else if(pid_tuning == 'Kp'){
    getK='.GetKi()'
  }else if(pid_tuning == 'Kd'){
    getK='.GetKd()'
  }
  var code = pid_instance+getK;

  return [code, Blockly.Arduino.ORDER_NONE];
};