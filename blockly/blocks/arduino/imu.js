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

goog.provide('Blockly.Blocks.imu');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['madgwick_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup Madgwick Filter")
        .appendField(
            new Blockly.FieldInstance("MADGWICK",
                                      "filter",
                                      true, true, false),
            "filter_instance");
    this.appendValueInput("madgwick_freq")
        .setCheck("Number")
        .appendField("Frequency: ");
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip("Madgwick Filter Setup");
    this.setHelpUrl("http://x-io.co.uk/open-source-imu-and-ahrs-algorithms/");
  },
  setfreq: function() {
    return this.setFieldValue("madgwick_freq");
  },
  getfreq: function() {
    return this.getFieldValue("madgwick_freq");
  }
};

Blockly.Blocks['imu_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("IMU")
        .appendField(
            new Blockly.FieldInstance("IMU",
                                      "imu",
                                      true, true, false),
            "imu_instance")
        .appendField(new Blockly.FieldDropdown([["MPU9250","MPU9250"], ["MPU6050","MPU6050"]]), "imu_model")
        .appendField(" I2C address:")
        .appendField(new Blockly.FieldTextInput("0x71"), "i2c_addr");
    this.setColour(230);
    this.setTooltip('Setup of IMU and Madgwick Filter');
    this.setHelpUrl('https://github.com/blascarr/blockly');
    this.getBlockType();
  },
  setI2Caddress: function() {
    return this.setFieldValue("i2c_addr");
  },
  getI2Caddress: function() {
    return this.getFieldValue("i2c_addr");
  },
  setRPY: function() {
    return this.setFieldValue("rpy");
  },
  getRPY: function() {
    return this.getFieldValue("rpy");
  },
  getBlockType: function() {
    var blocklyTypeKey = this.getFieldValue("BOOLEAN");
    return Blockly.Types[blocklyTypeKey];
  }
};

Blockly.Blocks['imu_rawdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get RAW Data:")
        .appendField(
            new Blockly.FieldInstance("IMU",
                                      "imu",
                                      false, true, false),
            "imu_instance")
        .appendField(new Blockly.FieldDropdown([["Accelerometer","Accelerometer"], ["Gyroscope","Gyroscope"], ["Magnetometer","Magnetometer"]]), "imu_device")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"], ["Z","Z"]]), "imu_axis");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Read RAW Data from IMU Sensor ');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};

Blockly.Blocks['imu_read_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update IMU Data")
        .appendField(
            new Blockly.FieldInstance("IMU",
                                      "imu",
                                      false, true, false),
            "imu_instance");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Update Data on IMU Object");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['imu_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Update")
        .appendField(
            new Blockly.FieldInstance("IMU",
                                      "imu",
                                      false, true, false),
            "imu_instance")
        .appendField("with Madgwick Filter:")
        .appendField(
            new Blockly.FieldInstance("MADGWICK",
                                      "filter",
                                      false, true, false),
            "filter_instance");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Update method for MPU6050 or MPU9250 with Madgwick Filter");
    this.setHelpUrl("https://github.com/blascarr");
  }
};

Blockly.Blocks['imu_update_rpy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(" Update")
        .appendField(
            new Blockly.FieldInstance("IMU",
                                      "imu",
                                      false, true, false),
            "imu_instance")
        .appendField("with Madgwick Filter:")
        .appendField(
            new Blockly.FieldInstance("MADGWICK",
                                      "filter",
                                      false, true, false),
            "filter_instance");
    this.appendValueInput("roll")
        .setCheck("var")
        .appendField("*Roll");
    this.appendValueInput("pitch")
        .setCheck("var")
        .appendField("*Pitch");
    this.appendValueInput("yaw")
        .setCheck("var")
        .appendField("*Yaw");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Update method for MPU6050 or MPU9250 with Madgwick Filter");
 this.setHelpUrl("https://github.com/blascarr");
  }
};

Blockly.Blocks['imu_orientation'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Orientation")
        .appendField(
            new Blockly.FieldInstance("IMU",
                                      "imu",
                                      false, true, false),
            "imu_instance")
        .appendField(new Blockly.FieldDropdown([["roll","roll"], ["pitch","pitch"], ["yaw","yaw"]]), "imu_data");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('Read Orientation with Madgwick Filter');
    this.setHelpUrl('https://github.com/blascarr/blockly');
  }
};
