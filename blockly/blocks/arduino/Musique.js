
'use strict';

goog.provide('Blockly.Blocks.Musique');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks.Musique.HUE = 180;

Blockly.Blocks['melody'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_CONFIGURE_INSTRUMENT)
          .appendField(
              new Blockly.FieldInstance('Musical',
                                        'Instrument',
                                        true, true, false),
              'INST_NAME')
            .appendField(Blockly.Msg.ARD_PIN)
          .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'PIN')
          .appendField(Blockly.Msg.ARD_RYTHM)
          .appendField(new Blockly.FieldNumber('250'), "BPM");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['note'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["do","NOTE_DO"], ["ré","NOTE_RE"], ["mi","NOTE_MI"], ["fa","NOTE_FA"], ["sol","NOTE_SOL"], ["la","NOTE_LA"], ["si","NOTE_SI"], ["Blockly.Msg.ARD_REST","REST"]]), "NOTE")
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARD_NONE,"MOD_NONE"], [Blockly.Msg.ARD_SHARP,"MOD_DIESE"], [Blockly.Msg.ARD_FLAT,"MOD_BEMOL"]]), "MODIFICATEUR")
          .appendField("octave")
          .appendField(new Blockly.FieldNumber('4'), "OCTAVE");
      this.setInputsInline(true);
      this.setOutput(true, "Note");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['note2'] = {
    init: function() {
      this.appendValueInput("NOTE")
          .setCheck("NoteBase");
      this.appendDummyInput()
          .appendField("octave")
          .appendField(new Blockly.FieldNumber('4'), "OCTAVE");
      this.setInputsInline(true);
      this.setOutput(true, "Note");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

Blockly.Blocks['note3'] = {
  init: function() {
    this.appendValueInput("NOTE")
        .setCheck("NoteBase")
        .appendField("note");
    this.appendValueInput("OCTAVE")
        .setCheck("Number")
        .appendField(Blockly.Msg.ARD_OCTAVE);
    this.setInputsInline(true);
    this.setOutput(true, "Note");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

  Blockly.Blocks['play_note'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_PLAY);
      this.appendValueInput("NOTE")
          .setCheck(["Note", "NoteBase"]);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_DURATION)
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ARD_WHOLE,"DUREE_RONDE"], [Blockly.Msg.ARD_HALF,"DUREE_BLANCHE"], [Blockly.Msg.ARD_QUARTER,"DUREE_NOIRE"], [Blockly.Msg.ARD_EIGHTH,"DUREE_CROCHE"], [Blockly.Msg.ARD_SIXTEENTH,"DUREE_2CROCHE"], [Blockly.Msg.ARD_THIRTY_SECOND,"DUREE_3CROCHE"]]), "DUREE")
          .appendField(Blockly.Msg.ARD_POINT)
          .appendField(new Blockly.FieldCheckbox("FALSE"), "DOT")
          .appendField(Blockly.Msg.ARD_AT)
          .appendField(
              new Blockly.FieldInstance('Musical',
                                        'Instrument',
                                        false, true, false),
              'INST_NAME');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    },
    onchange: function(event) {
      if (!this.workspace || event.type == Blockly.Events.MOVE ||
          event.type == Blockly.Events.UI) {
          return;  // Block deleted or irrelevant event
      }
      var instanceName = this.getFieldValue('INST_NAME')
      if (Blockly.Instances.isInstancePresent(instanceName, 'Musical', this)) {
        this.setWarningText(null);
      } else {
        // Set a warning to select a valid stepper config block
        this.setWarningText('instrument non configuré');
      }
    }
  };
  Blockly.Blocks['pause'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pause")
      this.setInputsInline(true);
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['notebase_do'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("do")
          .appendField(new Blockly.FieldDropdown([["aucun","MOD_NONE"], ["dièse","MOD_DIESE"], ["bémol","MOD_BEMOL"]]), "MODIFIER");
      this.setInputsInline(true);
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['notebase_re'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("ré")
          .appendField(new Blockly.FieldDropdown([["aucun","MOD_NONE"], ["dièse","MOD_DIESE"], ["bémol","MOD_BEMOL"]]), "MODIFIER");
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['notebase_mi'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("mi")
          .appendField(new Blockly.FieldDropdown([["aucun","MOD_NONE"], ["dièse","MOD_DIESE"], ["bémol","MOD_BEMOL"]]), "MODIFIER");
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['notebase_fa'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("fa")
          .appendField(new Blockly.FieldDropdown([["aucun","MOD_NONE"], ["dièse","MOD_DIESE"], ["bémol","MOD_BEMOL"]]), "MODIFIER");
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['notebase_sol'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("sol")
          .appendField(new Blockly.FieldDropdown([["aucun","MOD_NONE"], ["dièse","MOD_DIESE"], ["bémol","MOD_BEMOL"]]), "MODIFIER");
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['notebase_la'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("la")
          .appendField(new Blockly.FieldDropdown([["aucun","MOD_NONE"], ["dièse","MOD_DIESE"], ["bémol","MOD_BEMOL"]]), "MODIFIER");
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  Blockly.Blocks['notebase_si'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("si")
          .appendField(new Blockly.FieldDropdown([["aucun","MOD_NONE"], ["dièse","MOD_DIESE"], ["bémol","MOD_BEMOL"]]), "MODIFIER");
      this.setOutput(true, "NoteBase");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };