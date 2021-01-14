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

Blockly.Blocks['bmp_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sensor")
        .appendField(
            new Blockly.FieldInstance("BMP180",
                                      "bmp",
                                      false, false, false),
            "BMP180")
        .appendField("Init");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(60);
 this.setTooltip("Begin BMP180 Sensor");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['bmp_simplebegin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sensor")
        .appendField(
            new Blockly.FieldInstance("BMP180",
                                      "bmp",
                                      false, false, false),
            "BMP180")
        .appendField("Init");
    this.setInputsInline(true);
    this.setColour(60);
 this.setTooltip("Begin BMP180 Sensor");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['bmp_getdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(
            new Blockly.FieldInstance("BMP180",
                                      "bmp",
                                      false, false, false),
            "BMP180");
    this.appendValueInput("T")
        .setCheck("Number")
        .appendField("Temp:");
    this.appendValueInput("P")
        .setCheck("Number")
        .appendField("Pressure:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("Begin BMP180 get data Temperature and Pressure");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['bmp_getabsdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(
            new Blockly.FieldInstance("BMP180",
                                      "bmp",
                                      false, false, false),
            "BMP180")
        .appendField(new Blockly.FieldDropdown([["sealevel","sealevel"], ["altitude","altitude"]]), "option");
    this.appendValueInput("P")
        .setCheck("Number")
        .appendField("P");
    this.appendDummyInput()
        .appendField("[mbar]");
    this.appendValueInput("P0")
        .setCheck("Number")
        .appendField("Base");
    this.appendDummyInput()
        .appendField("[mbar]");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(60);
 this.setTooltip("Begin BMP180 get SealLevel or Altitude");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['bmp_geterror'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(
            new Blockly.FieldInstance("BMP180",
                                      "bmp",
                                      false, false, false),
            "BMP180")
        .appendField("Error");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(60);
 this.setTooltip("Get BMP180 error for warnings");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['bmp_startdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Start")
        .appendField(
            new Blockly.FieldInstance("BMP180",
                                      "bmp",
                                      false, false, false),
            "BMP180")
        .appendField(new Blockly.FieldDropdown([["Temp","startTemperature"], ["Pressure","startPressure"]]), "option");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(60);
 this.setTooltip("Start BMP180 Temp or Pressure");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['bmp_getdatatp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get")
        .appendField(
            new Blockly.FieldInstance("BMP180",
                                      "bmp",
                                      false, false, false),
            "BMP180")
        .appendField(new Blockly.FieldDropdown([["Temp","getTemperature"], ["Pressure","getPressure"]]), "option");
    this.appendValueInput("T")
        .setCheck("Number")
        .appendField("on");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(60);
 this.setTooltip("Get BMP180 Temp or Pressure");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_instance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("Initialize")
        .appendField("Frequency")
        .appendField(new Blockly.FieldDropdown([["433Mhz","RF69_433MHZ"], ["315Mhz","RF69_315MHZ"], ["868Mhz","RF69_868MHZ"], ["915Mhz","RF69_915MHZ"]]), "freq");
    this.appendValueInput("ID")
        .setCheck(null)
        .appendField("Node ID");
    this.appendValueInput("NetworkID")
        .setCheck(null)
        .appendField("Network ID");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 Initialize");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};


Blockly.Blocks['rfm69_events'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("Events")
        .appendField(new Blockly.FieldDropdown([["can Send","canSend"], ["Data Received","receiveDone"], ["ACK Requested","ACKRequested"]]), "evt");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(90);
 this.setTooltip("Radio RFM69 Events");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_setdataconfig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["Address","setAddress"], ["Network","setNetwork"], ["Frequency","setFrequency"], ["CS","setCS"], ["Power Level","setPowerLevel"], ["High Power","setHighPower"], ["Promiscuous","promiscuous"]]), "data");
    this.appendValueInput("value")
        .setCheck(["Boolean", "Number"])
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 set data");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_getdataconfig'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["Frequency","getFrequency"], ["RSSI","readRSSI"], ["Temperature","readTemperature"]]), "data");
    this.appendValueInput("value")
        .setCheck(["Boolean", "Number"])
        .appendField("value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 get data");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_mode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("execute")
        .appendField(new Blockly.FieldDropdown([["sleep","sleep"], ["calibration","rcCalibration"]]), "mode");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 mode sleep or calibration");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_setencrypt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("set encrypt with key");
    this.appendValueInput("value")
        .setCheck("Text");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 set encryption Key");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_receive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("receive");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("from Node ID");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 receive ACK");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("send");
    this.appendValueInput("value")
        .setCheck("Text");
    this.appendValueInput("addr")
        .setCheck("Number")
        .appendField("to Address");
    this.appendDummyInput()
        .appendField("Request")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "requestACK");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 send Data");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};

Blockly.Blocks['rfm69_sendwithretry'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RFM69 ")
        .appendField(
            new Blockly.FieldInstance("RFM69",
                                      "radio",
                                      false, false, false),
            "radio")
        .appendField("send");
    this.appendValueInput("value")
        .setCheck("Text");
    this.appendValueInput("addr")
        .setCheck("Number")
        .appendField("to Address");
    this.appendValueInput("retries")
        .setCheck("Number");
    this.appendValueInput("wait_time")
        .setCheck("Number")
        .appendField("times with retry time");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("Radio RFM69 send data several times in order to verify successful communication. It returns 0 if fails send message and returns 1 if success");
 this.setHelpUrl("https://github.com/opencosmos/qbcan-source");
  }
};
