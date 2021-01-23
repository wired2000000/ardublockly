'use strict';

goog.provide('Blockly.Arduino.SCoop');

goog.require('Blockly.Arduino');
//var is_yield_in_loop=false;

Blockly.Arduino['SCoopTask']=function() {
	//var _tasknum = this.getFieldValue('_tasknum');
	var _taskname = this.getFieldValue('TASK_INSTANCE');
	var statements_setup = Blockly.Arduino.statementToCode(this, 'setup');
	var statements_loop = Blockly.Arduino.statementToCode(this, 'loop');
	var taskcode='defineTask(scoopTask'+_taskname+')\n'
	+'void scoopTask'+_taskname+'::setup()\n'
	+'{\n'
	+ statements_setup
	+'}\n'
	+'void scoopTask'+_taskname+'::loop()\n'
	+'{\n'
	+ statements_loop
	+'}\n';
	Blockly.Arduino.addInclude('include_Scoop' , '#include \"SCoop.h\"');
	Blockly.Arduino.setups_['scoop_start'] = 'mySCoop.start();';
	Blockly.Arduino.definitions_['scoop_task'+_taskname] = taskcode;
	var code="";
	//if (task_count==0) { 
	//if (!(this.getFieldValue('TASK_INSTANCE')))
	//   is_yield_in_loop=false;
	//if (!(is_yield_in_loop))
	//{
	   code="yield();";
	//   is_yield_in_loop=true;
	//}
	//}
	//task_count++;
	return code;
};

Blockly.Arduino['SCoop_yield']=function() {
	var code = 'yield();\n';
	return code;
};
Blockly.Arduino['SCoop_sleep'] = function() {
  var value_sleeplength = Blockly.Arduino.valueToCode(this, 'sleeplength',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sleep('+value_sleeplength+');\n'
  return code;
};
Blockly.Arduino['SCoop_sleep_sync'] = function() {
  var value_sleeplength = Blockly.Arduino.valueToCode(this, 'sleeplength',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sleepSync('+value_sleeplength+');\n'
  return code;
};
