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

Blockly.Blocks['char_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("'")
        .appendField(new Blockly.FieldTextInput(""), "char")
        .appendField("'");
    this.setOutput(true, "Character");
    this.setColour(165);
    this.setTooltip("Char Type");
    this.setHelpUrl("https://www.arduino.cc/en/Reference/Char");
    },
    getBlockType:function(){
        
        return Blockly.Types.CHARACTER
    },
};

Blockly.Blocks['toint'] = {
  init: function() {
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField("toInt");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['set_interval'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Execute each");
    this.appendDummyInput()
        .appendField("ms")
        .appendField("with")
        .appendField(
            new Blockly.FieldInstance("TIMER",
                                      "auxtimer",
                                      true, false, false),
            "auxtimer");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("How to execute instructions in defined intervals");
 this.setHelpUrl("https://www.arduino.cc/en/Tutorial/BlinkWithoutDelay");
  }
};

Blockly.Blocks['set_timeevent'] = {
  init: function() {
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Execute in");
    this.appendDummyInput()
        .appendField("ms")
        .appendField("with")
        .appendField(
            new Blockly.FieldInstance("STATE",
                                      "auxvar",
                                      true, false, false),
            "auxvar")
        .appendField("Forever")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "forever");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("How to execute instructions in defined time");
 this.setHelpUrl("https://www.arduino.cc/en/Tutorial/BlinkWithoutDelay");
  }
};

Blockly.Blocks['set_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Execute when");
    this.appendValueInput("input")
        .setCheck(["Boolean","Number"]);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([ ["!=","!="], ["=","=="], ["<","!="], ["<=","<"], [">",">"], [">=",">="]]), "operator");
    this.appendValueInput("var")
        .setCheck(null);
    this.appendStatementInput("action")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("How to execute instructions when event occurs");
 this.setHelpUrl("https://www.arduino.cc/en/Tutorial/BlinkWithoutDelay");
  }
};

Blockly.Blocks['return'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("return");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Return used in functions to break recursive Instructions");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/Return");
  }
};

Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("break");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Break used to stop recursive Instructions");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/Return");
  }
};

Blockly.Blocks['string_contains'] = {
  init: function() {
    this.appendValueInput("str_input")
        .setCheck("Text");
    this.appendValueInput("substring")
        .setCheck("Text")
        .appendField(new Blockly.FieldDropdown([["Starts With","startsWith"], ["Endswith","endsWith"]]), "from");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setColour(165);
 this.setTooltip("Say if a substring exist on String");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/endswith/");
  }
};

Blockly.Blocks['string_to'] = {
  init: function() {
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField(new Blockly.FieldDropdown([["to Integer","toInt"], ["to Float","toFloat"]]), "format");
    this.setOutput(true, "Number");
    this.setColour(165);
 this.setTooltip("Converts a String number to different data type");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/StringToInt");
  }
};

Blockly.Blocks['string_tochararray'] = {
  init: function() {
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField("char array on")
        .appendField(new Blockly.FieldVariable("buffer"), "buffer")
        .appendField("of");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("Converts a String to Array");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/tochararray/");
  }
};

Blockly.Blocks['string_indexof'] = {
  init: function() {
    this.appendValueInput("substr")
        .setCheck(["Text", "Character"])
        .appendField(" ")
        .appendField(new Blockly.FieldDropdown([["Index Of","indexOf"], ["Last Index Of","lastIndexOf"]]), "NAME");
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField("on");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(165);
 this.setTooltip("Return index of a character or substring");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/indexof/");
  }
};

Blockly.Blocks['string_replace'] = {
  init: function() {
    this.appendValueInput("substr")
        .setCheck(["Text", "Character"])
        .appendField("Replace substring");
    this.appendValueInput("replace")
        .setCheck(["Text", "Character"])
        .appendField("with");
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField("on");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("Replace a substring with other substring");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/replace/");
  }
};

Blockly.Blocks['string_remove'] = {
  init: function() {
    this.appendValueInput("substr")
        .setCheck("Number")
        .appendField("Remove from letter");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("to");
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField("on");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("Remove a substring with length");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/remove/");
  }
};

Blockly.Blocks['string_trim'] = {
  init: function() {
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField("Trim String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
 this.setTooltip("Trim a String without blank spaces");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/trim/");
  }
};


Blockly.Blocks['string_substring'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Take Substring");
    this.appendValueInput("from")
        .setCheck("Number")
        .appendField("from");
    this.appendValueInput("to")
        .setCheck("Number")
        .appendField("to");
    this.appendValueInput("str_input")
        .setCheck("Text")
        .appendField("of");
    this.setInputsInline(true);
    this.setOutput(true, "Text");
    this.setColour(165);
 this.setTooltip("Return a substring  from a string defined with numbers from to");
 this.setHelpUrl("https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/substring/");
  }
};