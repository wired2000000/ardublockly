'use strict';

goog.provide('Blockly.Arduino.procedures');

goog.require('Blockly.Arduino');
//Procedure define generator tool
Blockly.Arduino['procedures_defreturn'] = function (block) {
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    var params = block.getFieldValue('PARAMS');
    if (Blockly.Arduino.STATEMENT_PREFIX) {
        branch = Blockly.Arduino.prefixLines(Blockly.Arduino.STATEMENT_PREFIX.replace(/%1/g, '\'' + block.id + '\''), Blockly.Arduino.INDENT) + branch;
    }
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    } // Get arguments with type

    var args = [
    ];
    for (var x = 0; x < block.arguments_.length; x++) {
        //console.log(block.arguments_types_[x]);
        args[x] = block.arguments_types_[x] +
            ' ' +
            Blockly.Arduino.variableDB_.getName(block.arguments_[x], Blockly.Variables.NAME_TYPE);
    } // Get return type

    var returnType = Blockly.Types.NULL;
    var type;
    if (block.getReturnType) {
        returnType = block.getReturnType();
        type = Blockly.Arduino.getArduinoType_(returnType);
        //console.log(returnType);
    } else {
        type = null;
    } //console.log(type);


    if (type != null) {
        returnType = Blockly.Arduino.getArduinoType_(returnType);
        if (returnType == "Invalid Blockly Type") {
            returnType = '/* unknown return type, assume float*/ \n float'
        }
    } else {
        returnType = 'void';
    } // Construct code

    var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
        branch + returnValue + '}';
    code = Blockly.Arduino.scrub_(block, code);
    Blockly.Arduino.userFunctions_[funcName] = code;
    return null;
};
Blockly.Arduino.procedures_defnoreturn = Blockly.Arduino.procedures_defreturn;
//Blockly.Arduino.procedures_mutatorarg=Blockly.Arduino.procedures_defnoreturn;
Blockly.Arduino.procedures_mutatorarg = function (block) {
    var funcName = Blockly.Arduino.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Arduino.statementToCode(block, 'STACK');
    var params = block.getFieldValue('PARAMS');
    if (Blockly.Arduino.STATEMENT_PREFIX) {
        branch = Blockly.Arduino.prefixLines(Blockly.Arduino.STATEMENT_PREFIX.replace(/%1/g, '\'' + block.id + '\''), Blockly.Arduino.INDENT) + branch;
    }
    if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
        branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.Arduino.valueToCode(block, 'RETURN', Blockly.Arduino.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    } // Get arguments with type

    var args = [
    ];
    for (var x = 0; x < block.arguments_.length; x++) {
        //console.log(block.arguments_types_[x]);
        args[x] = block.arguments_types_[x] +
            ' ' +
            Blockly.Arduino.variableDB_.getName(block.arguments_[x], Blockly.Variables.NAME_TYPE);
    } // Get return type

    var returnType = Blockly.Types.NULL;
    if (block.getReturnType) {
        returnType = block.getReturnType();
        //console.log(returnType);
    }
    returnType = Blockly.Arduino.getArduinoType_(returnType);
    // Construct code
    var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
        branch + returnValue + '}';
    code = Blockly.Arduino.scrub_(block, code);
    //console.log(code);
    //Blockly.Arduino.userFunctions_[funcName] = code;
    return null;
};
/*
Blockly.Arduino.procedures_defreturn = function (a) {
    var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE),
    c = Blockly.Arduino.statementToCode(a, "STACK");
    Blockly.Arduino.STATEMENT_PREFIX && (c = Blockly.Arduino.prefixLines(Blockly.Arduino.STATEMENT_PREFIX.replace(/%1/g, "'" + a.id + "'"), Blockly.Arduino.INDENT) + c);
    Blockly.Arduino.INFINITE_LOOP_TRAP && (c = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + a.id + "'") + c);
    var d = Blockly.Arduino.valueToCode(a, "RETURN", Blockly.Arduino.ORDER_NONE) ||
        "";
    d && (d = "  return " + d + ";\n");
    for (var e = [], f = 0; f < a.arguments_.length; f++)
        e[f] = Blockly.Arduino.getArduinoType_(a.getArgType(a.arguments_[f])) + " " + Blockly.Arduino.variableDB_.getName(a.arguments_[f], Blockly.Variables.NAME_TYPE);
    f = Blockly.Types.NULL;
    a.getReturnType && (f = a.getReturnType());
    f = Blockly.Arduino.getArduinoType_(f);
    c = f + " " + b + "(" + e.join(", ") + ") {\n" + c + d + "}";
    c = Blockly.Arduino.scrub_(a, c);
    Blockly.Arduino.userFunctions_[b] = c;
    return null
};
Blockly.Arduino.procedures_defnoreturn = Blockly.Arduino.procedures_defreturn;
 */
Blockly.Arduino.procedures_callreturn = function (a) {
    for (var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE), c = [
        ], d = 0; d < a.arguments_.length; d++)
        c[d] = Blockly.Arduino.valueToCode(a, 'ARG' + d, Blockly.Arduino.ORDER_NONE) || 0;
    return [b + '(' + c.join(', ') + ')',
        Blockly.Arduino.ORDER_UNARY_POSTFIX]
};
Blockly.Arduino.procedures_callnoreturn = function (a) {
    for (var b = Blockly.Arduino.variableDB_.getName(a.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE), c = [
        ], d = 0; d < a.arguments_.length; d++)
        c[d] = Blockly.Arduino.valueToCode(a, 'ARG' + d, Blockly.Arduino.ORDER_NONE) || 'null';
    return b + '(' + c.join(', ') + ');\n'
};
Blockly.Arduino.procedures_ifreturn = function (a) {
    var b = 'if (' + (Blockly.Arduino.valueToCode(a, 'CONDITION', Blockly.Arduino.ORDER_NONE) || 'false') + ') {\n';
    a.hasReturnValue_ ? (a = Blockly.Arduino.valueToCode(a, 'VALUE', Blockly.Arduino.ORDER_NONE) || 'null', b += '  return ' + a + ';\n') : b += '  return;\n';
    return b + '}\n'
};
Blockly.Arduino.arduino_functions = function (a) {
    var b = Blockly.Arduino.statementToCode(a, 'SETUP_FUNC');
    b && Blockly.Arduino.addSetup('userSetupCode', b, !0);
    a = a.getInputTargetBlock('LOOP_FUNC');
    b = Blockly.Arduino.blockToCode(a);
    if (!goog.isString(b))
        throw 'Expecting code from statement block "' + a.type + '".';
    return b
};
