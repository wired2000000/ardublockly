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

'use strict';

goog.require('Blockly.Arduino');

Blockly.Arduino['madgwick_setup'] = function(block) {
  var filter_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('filter_instance'), Blockly.Variables.NAME_TYPE);
  var madgwick_freq = Blockly.Arduino.valueToCode(block, 'madgwick_freq', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.addInclude('madgwick', '#include <MadgwickAHRS.h>\n');
  Blockly.Arduino.addDeclaration(filter_instance,'Madgwick '+filter_instance+';',true);
  var setupCode = filter_instance+'.begin('+madgwick_freq+');';
  Blockly.Arduino.addSetup(filter_instance+'_setup', setupCode, true);
  var code = '';
  return code;
};

Blockly.Arduino['imu_setup'] = function(block) {
	var IMU_instance = block.getFieldValue('imu_instance');
	var imu_model = block.getFieldValue('imu_model');
	var i2c_addr = block.getFieldValue('i2c_addr');
	var imu_MPULib;

	if (imu_model == 'MPU9250'){
		imu_MPULib = '#include <IMU_MPU9250.h>';
		Blockly.Arduino.addInclude('mpu', imu_MPULib);
	}else if (imu_model == 'MPU6050'){
		imu_MPULib = '#include <IMU_MPU6050.h>';
		Blockly.Arduino.addInclude('mpu', imu_MPULib);
	}
	
	Blockly.Arduino.addDeclaration(IMU_instance, imu_model+' '+IMU_instance+';', true);

	var setupCode = ''+
	IMU_instance+'.calibrate'+imu_model+'('+IMU_instance+'.gyroBias, '+IMU_instance+'.accelBias);\n  '+
	IMU_instance+'.init'+imu_model+'();';
	Blockly.Arduino.addSetup('Wire_begin', 'Wire.begin();', true);
	Blockly.Arduino.addSetup(IMU_instance, setupCode, true);
var code = '';
  return code;
};

Blockly.Arduino['imu_update'] = function(block) {
	var imu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('imu_instance'), Blockly.Variables.NAME_TYPE);
  	var filter_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('filter_instance'), Blockly.Variables.NAME_TYPE);
	
	Blockly.Arduino.addInclude('madgwick', '#include <MadgwickAHRS.h>\n');
	Blockly.Arduino.addInclude('mpu', '#include <IMU_MPU6050.h>',false);


	Blockly.Arduino.addDeclaration(filter_instance,'Madgwick '+filter_instance+';',true);
	Blockly.Arduino.addDeclaration(imu_instance,'MPU6050 '+imu_instance+';',false);
	//Blockly.Arduino.addDeclaration('RPY_instance','float roll, pitch, yaw;');

	Blockly.Arduino.addSetup('Wire_begin', 'Wire.begin();', true);

	Blockly.Arduino.addVariable('roll','float roll;',true);
	Blockly.Arduino.addVariable('pitch','float pitch;',true);
	Blockly.Arduino.addVariable('yaw','float yaw;',true);
	Blockly.Arduino.addVariable('microsPerReading','long microsPerReading;',true);

	var imu_updatecode = '\nvoid updateIMU(float *roll, float *pitch, float *yaw){\n'+
		'\n\tif ('+imu_instance+'.readByte(MPU6050_ADDRESS, INT_STATUS) & 0x01){'+
		'\t\t'+imu_instance+'.readAccelData('+imu_instance+'.accelCount);\n'+
		'\t\t'+imu_instance+'.getAres();\n\n'+
		'\t\t'+imu_instance+'.ax = (float)'+imu_instance+'.accelCount[0]*'+imu_instance+'.aRes;\n'+
		'\t\t'+imu_instance+'.ay = (float)'+imu_instance+'.accelCount[1]*'+imu_instance+'.aRes;\n'+
		'\t\t'+imu_instance+'.az = (float)'+imu_instance+'.accelCount[2]*'+imu_instance+'.aRes;\n'+
		'\t\t'+imu_instance+'.readGyroData('+imu_instance+'.gyroCount);\n'+
		'\t\t'+imu_instance+'.getGres();\n\n'+
		'\t\t'+imu_instance+'.gx = (float)'+imu_instance+'.gyroCount[0]*'+imu_instance+'.gRes;\n'+
		'\t\t'+imu_instance+'.gy = (float)'+imu_instance+'.gyroCount[1]*'+imu_instance+'.gRes;\n'+
		'\t\t'+imu_instance+'.gz = (float)'+imu_instance+'.gyroCount[2]*'+imu_instance+'.gRes;\n'+
		'\t}\n\n'+
		'\t'+imu_instance+'.updateTime();\n'+
		'\t'+imu_instance+'.delt_t = millis() - '+imu_instance+'.count;\n'+
		'\tif ('+imu_instance+'.delt_t > microsPerReading){\n'+
		'\t\tfilter.updateIMU('+imu_instance+'.gx, '+imu_instance+'.gy, '+imu_instance+'.gz, '+imu_instance+'.ax, '+imu_instance+'.ay, '+imu_instance+'.az);\n'+
		'\t\t*roll = '+filter_instance+'.getRoll();\n'+
		'\t\t*pitch = '+filter_instance+'.getPitch();\n'+
		'\t\t*yaw = '+filter_instance+'.getYaw();\n'+
		'\t\t'+imu_instance+'.count = millis();\n'+
		'\t}\n'+
		'}';

	Blockly.Arduino.addDeclaration('imu_update',imu_updatecode);

	var code = 'updateIMU(&roll, &pitch, &yaw);\n';
	return code;
};

Blockly.Arduino['imu_update_rpy'] = function(block) {
  var imu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('imu_instance'), Blockly.Variables.NAME_TYPE);
  var filter_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('filter_instance'), Blockly.Variables.NAME_TYPE);
  var roll = Blockly.Arduino.valueToCode(block, 'roll', Blockly.Arduino.ORDER_ATOMIC);
  var pitch = Blockly.Arduino.valueToCode(block, 'pitch', Blockly.Arduino.ORDER_ATOMIC);
  var yaw = Blockly.Arduino.valueToCode(block, 'yaw', Blockly.Arduino.ORDER_ATOMIC);
  
  	Blockly.Arduino.addInclude('madgwick', '#include <MadgwickAHRS.h>\n');
	Blockly.Arduino.addInclude('mpu', '#include <IMU_MPU6050.h>',false);

	Blockly.Arduino.addVariable(filter_instance, 'Madgwick '+filter_instance+';',true);
	Blockly.Arduino.addDeclaration(imu_instance,'MPU6050 '+imu_instance+';',false);
	//Blockly.Arduino.addDeclaration('RPY_instance','float roll, pitch, yaw;');

	Blockly.Arduino.addSetup('Wire_begin', 'Wire.begin();', true);

	Blockly.Arduino.addVariable('roll','float roll;',true);
	Blockly.Arduino.addVariable('pitch','float pitch;',true);
	Blockly.Arduino.addVariable('yaw','float yaw;',true);
	Blockly.Arduino.addVariable('microsPerReading','long microsPerReading;',true);
	
	var imu_updatecode = '\nvoid updateIMU(float *roll, float *pitch, float *yaw){\n'+
		'\n\tif ('+imu_instance+'.readByte(MPU6050_ADDRESS, INT_STATUS) & 0x01){'+
		'\t\t'+imu_instance+'.readAccelData('+imu_instance+'.accelCount);\n'+
		'\t\t'+imu_instance+'.getAres();\n\n'+
		'\t\t'+imu_instance+'.ax = (float)'+imu_instance+'.accelCount[0]*'+imu_instance+'.aRes;\n'+
		'\t\t'+imu_instance+'.ay = (float)'+imu_instance+'.accelCount[1]*'+imu_instance+'.aRes;\n'+
		'\t\t'+imu_instance+'.az = (float)'+imu_instance+'.accelCount[2]*'+imu_instance+'.aRes;\n'+
		'\t\t'+imu_instance+'.readGyroData('+imu_instance+'.gyroCount);\n'+
		'\t\t'+imu_instance+'.getGres();\n\n'+
		'\t\t'+imu_instance+'.gx = (float)'+imu_instance+'.gyroCount[0]*'+imu_instance+'.gRes;\n'+
		'\t\t'+imu_instance+'.gy = (float)'+imu_instance+'.gyroCount[1]*'+imu_instance+'.gRes;\n'+
		'\t\t'+imu_instance+'.gz = (float)'+imu_instance+'.gyroCount[2]*'+imu_instance+'.gRes;\n'+
		'\t}\n\n'+
		'\t'+imu_instance+'.updateTime();\n'+
		'\t'+imu_instance+'.delt_t = millis() - '+imu_instance+'.count;\n'+
		'\tif ('+imu_instance+'.delt_t > microsPerReading){\n'+
		'\t\tfilter.updateIMU('+imu_instance+'.gx, '+imu_instance+'.gy, '+imu_instance+'.gz, '+imu_instance+'.ax, '+imu_instance+'.ay, '+imu_instance+'.az);\n'+
		'\t\t*'+roll+' = '+filter_instance+'.getRoll();\n'+
		'\t\t*'+pitch+' = '+filter_instance+'.getPitch();\n'+
		'\t\t*'+yaw+' = '+filter_instance+'.getYaw();\n'+
		'\t\t'+imu_instance+'.count = millis();\n'+
		'\t}\n'+
		'}';

	Blockly.Arduino.addDeclaration('imu_update',imu_updatecode);

	var code = 'updateIMU(&'+roll+', &'+pitch+', &'+yaw+');\n';
	return code;
};

Blockly.Arduino['imu_orientation'] = function(block) {
	var imu_instance = block.getFieldValue('imu_instance');
	var IMU_data = block.getFieldValue('imu_data');

	var imu_code='';
	Blockly.Arduino.addInclude('mpu', '#include <IMU_MPU6050.h>',false);
	Blockly.Arduino.addDeclaration(imu_instance,'MPU6050 '+imu_instance+';',false);
	
	var dataIMU
	if (IMU_data =='roll'){
		imu_code += IMU_instance + '.getRoll()';
	}else if(IMU_data =='pitch'){
		imu_code += IMU_instance + '.getPitch()';
	}else if(IMU_data =='yaw'){
		imu_code += IMU_instance + '.getYaw()';
	}

	return [imu_code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['imu_read_data'] = function(block) {
  var imu_instance = Blockly.Arduino.variableDB_.getName(block.getFieldValue('imu_instance'), Blockly.Variables.NAME_TYPE);
  var imu_code = imu_instance+'.readAccelData('+imu_instance+'.accelCount);\n'+
    imu_instance+'.getAres();\n'+
    imu_instance+'.readGyroData('+imu_instance+'.gyroCount);\n'+
    imu_instance+'.getGres();\n'+
    imu_instance+'.readMagData('+imu_instance+'.magCount);\n'+
    imu_instance+'.getMres();\n';

    Blockly.Arduino.addInclude('mpu', '#include <IMU_MPU6050.h>',false);
  	Blockly.Arduino.addDeclaration(imu_instance,'MPU6050 '+imu_instance+';',true);

  return imu_code;
};

Blockly.Arduino['imu_rawdata'] = function(block) {
	var imu_instance = block.getFieldValue('imu_instance');
	var IMU_device = block.getFieldValue('imu_device');
	var IMU_axis = block.getFieldValue('imu_axis');
	var count_dev,l_dev;
	var axis;
	
	Blockly.Arduino.addInclude('mpu', '#include <IMU_MPU6050.h>',false);
  	Blockly.Arduino.addDeclaration(imu_instance,'MPU6050 '+imu_instance+';',true);

	if(IMU_device == 'Accelerometer'){
		count_dev = 'accelCount';
		l_dev = 'a';
	}else if (IMU_device == 'Gyroscope'){
		count_dev = 'gyroCount';
		l_dev = 'g';
	}else if(IMU_device == 'Magnetometer'){
		count_dev = 'magCount';
		l_dev = 'm';
	}

	if(IMU_axis == 'X'){
		axis = 0;
	}else if (IMU_axis == 'Y'){
		axis = 1;
	}else if(IMU_axis == 'Z'){
		axis = 2;
	}
	Blockly.Arduino.addDeclaration(imu_instance,'MPU6050 '+imu_instance+';',true);

	var imu_code ='(float)'+IMU_instance+'.'+count_dev+'['+axis+']*'+IMU_instance+'.'+l_dev+'Res';
	return [imu_code, Blockly.Arduino.ORDER_ATOMIC];
};
