/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Generating Arduino code for list blocks.
 *
 * TODO: A lot of this can be converted to arrays code by creating functions to
 *       replicate this kind of behavior.
 */
'use strict';

goog.provide('Blockly.Arduino.lists');

goog.require('Blockly.Arduino');

//Blockly.Arduino.lists = {};
Blockly.Arduino.lists_create_with = function() {
    this.getFieldValue("TYPE");
    for (var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), b = this.itemCount_, c = Array(this.itemCount_), d = 0; d < this.itemCount_; d++)
        c[d] = Blockly.Arduino.valueToCode(this, "ADD" + d, Blockly.Arduino.ORDER_NONE) || "0";
    Blockly.Arduino.definitions_["var_lf_" + a] = "float " + a + "[" + b + "]={" + c.join(", ") + "};\n";
    Blockly.Arduino.definitions_["var_lf_" + a + "_size"] = "int " + a + "_size=" + b + ";\n";
    return ""
}
;
Blockly.Arduino.lists_getIndex = function() {
    var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE)
      , b = Blockly.Arduino.valueToCode(this, "AT", Blockly.Arduino.ORDER_ADDITIVE) || "0";
    b.match(/^\d+$/) && (b = parseInt(b, 10));
    return ["ld_" + a + "[(int)(" + b + ")]", Blockly.Arduino.ORDER_ATOMIC]
}
;
Blockly.Arduino.lists_setIndex = function() {
    var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE)
      , b = Blockly.Arduino.valueToCode(this, "AT", Blockly.Arduino.ORDER_ADDITIVE) || "0"
      , c = Blockly.Arduino.valueToCode(this, "TO", Blockly.Arduino.ORDER_ASSIGNMENT) || "0";
    b.match(/^\d+$/) && (b = parseInt(b, 10));
    return "ld_" + a + "[(int)(" + b + ")] = " + c + ";\n"
}
;
Blockly.Arduino.lists_length = function() {
    return ["ld_" + Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + "_size", Blockly.Arduino.ORDER_ATOMIC]
}
;
Blockly.Arduino.lists_create_with_text = function() {
    this.getFieldValue("TYPE");
    for (var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), b = this.itemCount_, c = Array(this.itemCount_), d = 0; d < this.itemCount_; d++)
        c[d] = Blockly.Arduino.valueToCode(this, "ADD" + d, Blockly.Arduino.ORDER_NONE) || 'String("")';
    Blockly.Arduino.definitions_["var_ls_" + a] = "String " + a + "[" + b + "]={" + c.join(", ") + "};\n";
    Blockly.Arduino.definitions_["var_ls_" + a + "_size"] = "int " + a + "_size=" + b + ";\n";
    return ""
}
;
Blockly.Arduino.lists_getIndex_text = function() {
    var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE)
      , b = Blockly.Arduino.valueToCode(this, "AT", Blockly.Arduino.ORDER_ADDITIVE) || "0";
    b.match(/^\d+$/) && (b = parseInt(b, 10));
    return ["ls_" + a + "[(int)(" + b + ")]", Blockly.Arduino.ORDER_ATOMIC]
}
;
Blockly.Arduino.lists_setIndex_text = function() {
    var a = Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE)
      , b = Blockly.Arduino.valueToCode(this, "AT", Blockly.Arduino.ORDER_ADDITIVE) || "0"
      , c = Blockly.Arduino.valueToCode(this, "TO", Blockly.Arduino.ORDER_ASSIGNMENT) || "0";
    b.match(/^\d+$/) && (b = parseInt(b, 10));
    return "ls_" + a + "[(int)(" + b + ")] = " + c + ";\n"
}
;
Blockly.Arduino.lists_length_text = function() {
    return ["ls_" + Blockly.Arduino.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + "_size", Blockly.Arduino.ORDER_ATOMIC]
}
;