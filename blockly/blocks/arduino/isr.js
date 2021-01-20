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

Blockly.Blocks['attach_interrupt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Attach Interrupt in")
        .appendField(new Blockly.FieldDropdown([["INT 0","0"], ["INT 1","1"], ["INT 2 (MEGA, ZERO, DUE)","2"], ["INT 3 (MEGA, ZERO, DUE)","3"], ["INT 4 (MEGA, ZERO, DUE)","4"], ["INT 5 (MEGA, ZERO, DUE)","5"]]), "INT_PIN")
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([["LOW","LOW"], ["CHANGE","CHANGE"], ["RISING","RISING"], ["FALLING","FALLING"], ["HIGH (DUE)","HIGH"]]), "INT_MODE");
    //this.setMutator(new Blockly.Mutator(['mutatorarg']));
    this.appendValueInput("ISR")
        .setCheck("ISR")
        .appendField("whith Routine");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Attach Interruption");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/AttachInterrupt");
  }
};
/*
Blockly.Blocks['attach_interruptpin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Attach Interrupt in")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'INT_PIN')
        .appendField("when")
        .appendField(new Blockly.FieldDropdown([["LOW","LOW"], ["CHANGE","CHANGE"], ["RISING","RISING"], ["FALLING","FALLING"], ["HIGH (DUE)","HIGH"]]), "INT_MODE");
    this.appendValueInput("ISR")
        .setCheck("ISR")
        .appendField("whith Routine");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Attach Interruption");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/AttachInterrupt");
  }
};*/

Blockly.Blocks['routine_setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ISR Routine:")
        .appendField(
            new Blockly.FieldInstance("ISR",
                                      "isr",
                                      true, true, false),
            "isr_instance");
    this.appendStatementInput("ISR_statements")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("Routine setup to perform with Interruptions");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/AttachInterrupt");
  }
};

Blockly.Blocks['attach_routine'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance("ISR",
                                      "isr",
                                      false, false, false),
            "isr_instance");
    this.setOutput(true, "ISR");
    this.setColour(230);
    this.setTooltip("Attach Routine instance");
    this.setHelpUrl("https://www.arduino.cc/en/Reference/AttachInterrupt");
  }
};

Blockly.Blocks['detach_interrupt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Detach Interrupt in")
        .appendField(new Blockly.FieldDropdown([["INT 0","0"], ["INT 1","1"], ["INT 2 (MEGA, ZERO, DUE)","2"], ["INT 3 (MEGA, ZERO, DUE)","3"], ["INT 4 (MEGA, ZERO, DUE)","4"], ["INT 5 (MEGA, ZERO, DUE)","5"]]), "INT_PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Attach Interruption");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/AttachInterrupt");
  }
};

Blockly.Blocks['en_interrupt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Enable/Disable Interrupts")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "en_int");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Enable or Disable Interrupts");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/Interrupts");
  }
};

Blockly.Blocks['volatile_block'] = {
  init: function() {
    this.appendValueInput("code_in")
        .setCheck(null)
        .appendField("Volatile ");
    this.setInputsInline(true);
    this.setColour(300);
 this.setTooltip("Volatile Blockl useful for interruptions");
 this.setHelpUrl("https://www.arduino.cc/en/Reference/Volatile");
  }
};