/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map"></block>' +
'    <block type="base_map_advanced"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
/*'	<category id="catLists"  name="Lists">' +
'		<block type="lists_create_with"></block>	' +	
'		<block type="lists_getIndex">' +
'			<value name="AT">' +
'                <shadow type="math_number">' +
'                    <field name="NUM">0</field>' +
'                </shadow>' +
'            </value>		' +
'		</block>' +
'		<block type="lists_setIndex">' +
'			<value name="AT">' +
'                <shadow type="math_number">' +
'                    <field name="NUM">0</field>' +
'                </shadow>' +
'            </value>		' +
'			<value name="TO">' +
'				<shadow type="math_number">' +
'                    <field name="NUM">0</field>' +
'                </shadow>' +
'            </value>		'+
'		</block>' +
'		<block type="lists_length"></block>' +
'    	<block type="lists_create_with_text"></block>	' +	
'		<block type="lists_getIndex_text">' +
'			<value name="AT">' +
'                <shadow type="math_number">' +
'                    <field name="NUM">0</field>' +
'                </shadow>' +
'            </value>		' +
'		</block>' +
'		<block type="lists_setIndex_text">' +
'			<value name="AT">' +
'                <shadow type="math_number">' +
'                    <field name="NUM">0</field>' +
'                </shadow>' +
'            </value>		' +
'			<value name="TO">' +
'				<shadow type="math_number">' +
'                    <field name="NUM">0</field>' +
'                </shadow>' +
'            </value>' +		
'		</block>' +
'		<block type="lists_length_text"></block>' +
'	</category>' +*/
'  <category id="catArrays" name="Arrays">' +
'       <block type="array_define_empty">' +
'           <field name="ARRAY_SIZE">1</field>' +
'       </block>' +
'       <block type="array_define">' +
'           <field name="ARRAY_SIZE">1</field>' +
'       </block>' +
'       <block type="array_get">' +
'       </block>' +
'       <block type="array_set">' +
'       </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'    </block>' +
'    <block type="attach_interrupt"></block>' +
//'    <block type="attach_interruptpin"></block>' +
'    <block type="routine_setup"></block>' +
'    <block type="attach_routine"></block>' +
'    <block type="en_interrupt"></block>' +
'    <block type="volatile_block"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catAudio" name="Audio">' +
'    <block type="io_tone">' +
'      <field name="TONEPIN">0</field>' +
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">220</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone"></block>' +
'  </category>' +
'  <sep></sep>' +

'  <category id="catComms" name="Comms">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_print">'+
'      <value name="CONTENT">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="serial_available"></block>' +
'    <block type="readserial"></block>' +
'    <block type="ss_setup">'+
'      <value name="RX">' +
'        <block type="math_number">' +
'          <field name="NUM">2</field>' +
'        </block>' +
'      </value>' +
'      <value name="TX">' +
'        <block type="math_number">' +
'          <field name="NUM">3</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="ss_available"></block>' +
'    <block type="readsoftwareserial"></block>' +
'    <block type="ss_print">'+
'      <value name="CONTENT">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="spi_setup"></block>' +
'    <block type="spi_transfer"></block>' +
'    <block type="spi_transfer_return"></block>' +
'  </category>' +
'  <sep></sep>' +


'  <category id="catControl" name="Car Control">' +

'   <block type="smartcar_definepins_simple">'+
'      <field name="LEFT_DIR_PIN">7</field>' +
'      <field name="LEFT_THRUST_PIN">6</field>' +
'      <field name="RIGHT_THRUST_PIN">5</field>' +
'      <field name="RIGHT_DIR_PIN">4</field>' +
'	</block>' +

'    <block type="smartcar_l298n_simple">'+

'      <value name="left">' +
'        <shadow type="math_number">' +
'          <field name="NUM">255</field>' +
'        </shadow>' +
'      </value>' +
'      <value name="right">' +
'        <shadow type="math_number">' +
'          <field name="NUM">-255</field>' +
'        </shadow>' +
'      </value>' +

'	</block>' +
'   <block type="smartcar_ultrasound_simple">'+
'      <field name="TRIGGER_PIN">A0</field>' +
'      <field name="ECHO_PIN">A1</field>' +
'   </block>' +
'	</category>'+
'  <sep></sep>'+ 
   
'  <sep></sep>' +
'	<category id="catAdvanced" name="Advanced">' +

'  <category id="catLCD" name="LiquidCrystal">' +
'    <block type="lcd_init">' +
'      <field name="LCD_NUMBER_OF_PINS">4</field>' +
'      <field name="LCD_RW">no</field>' +
'      <field name="RS">11</field>' +
'      <field name="EN">12</field>' +
'      <field name="D4">2</field>' +
'      <field name="D5">3</field>' +
'      <field name="D6">4</field>' +
'      <field name="D7">5</field>' +
'      <value name="LCD_ROWS">' +
'        <block type="math_number">' +
'          <field name="NUM">2</field>' +
'        </block>' +
'      </value>' +
'      <value name="LCD_COLS">' +
'        <block type="math_number">' +
'          <field name="NUM">16</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="lcd_print"></block>' +
'  </category>' +
' <category id="catMusical" name="Musique">' +
'       <block type="melody">' +
'           <field name="PIN">9</field>' +
'           <field name="BPM">250</field>' +
'       </block>' +
'       <block type="play_note">'+
'			<value name="NOTE">'+
'              <block type="note"></block>' +
'		    </value>'+
'		</block>' +
'           <block type="note"></block>' +
//'           <block type="note2"></block>' +
//'           <block type="note3"></block>' +
'  </category>' +

'	<category id="catAdvanced_car" name="Advanced_car">' +
'			<block type="svante_go">'+
'				<value name="left_wheel">' +
'					<block type="math_number">' +
'						<field name="NUM">100</field>' +
'					</block>' +
'				</value>' +
'				<value name="right_wheel">' +
'					<block type="math_number">' +
'						<field name="NUM">100</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="svante_stop"></block>' +
'			<block type="svante_motorsdiff">'+
'				<value name="diff">' +
'					<block type="math_number">' +
'						<field name="NUM">300</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="svante_get_irarray">'+
'				<value name="ir_array">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="svante_linefollow"></block>' +
'			<block type="svante_cal_linefollow">'+
'				<value name="speed">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'				<value name="time">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="svante_config_linefollow">'+
'				<value name="Kp">' +
'					<block type="math_number">' +
'						<field name="NUM">40</field>' +
'					</block>' +
'				</value>' +
'				<value name="Kd">' +
'					<block type="math_number">' +
'						<field name="NUM">8</field>' +
'					</block>' +
'				</value>' +
'				<value name="time">' +
'					<block type="math_number">' +
'						<field name="NUM">10</field>' +
'					</block>' +
'				</value>' +
'				<value name="speed">' +
'					<block type="math_number">' +
'						<field name="NUM">30</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'      <block type="smartcar_definepins">'+
'      <value name="M11">' +
'        <block type="math_number">' +
'          <field name="NUM">5</field>' +
'        </block>' +
'      </value>' +
'      <value name="M12">' +
'        <block type="math_number">' +
'          <field name="NUM">6</field>' +
'        </block>' +
'      </value>' +
'      <value name="M21">' +
'        <block type="math_number">' +
'          <field name="NUM">9</field>' +
'        </block>' +
'      </value>' +
'      <value name="M22">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'    <block type="smartcar_ultrasound">'+
'      <value name="echo">' +
'        <block type="math_number">' +
'          <field name="NUM">7</field>' +
'        </block>' +
'      </value>' +
'      <value name="trigger">' +
'        <block type="math_number">' +
'          <field name="NUM">8</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="smartcar_l298n">'+
'      <value name="M11">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="M12">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'      <value name="M21">' +
'        <block type="math_number">' +
'          <field name="NUM">255</field>' +
'        </block>' +
'      </value>' +
'      <value name="M22">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'	</block>' +
'  </category>' +

'  <category id="catScoop" name="Scoop">' +
'    <block type="SCoopTask"></block>' +
'    <block type="SCoop_yield"></block>' +
'    <block type="SCoop_sleep">' +
'      <value name="sleeplength">' +
'        <block type="math_number">' +
'           <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' + 
'  </category>' +

'  <category id="catMotors" name="Motors">' +
'    <block type="servo_write">' +
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="servo_read"></block>' +
'    <block type="stepper_config">' +
'      <field name="STEPPER_NUMBER_OF_PINS">2</field>' +
'      <field name="STEPPER_PIN1">1</field>' +
'      <field name="STEPPER_PIN2">2</field>' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="STEPPER_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="stepper_step">' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="accelstepper_setup">'+
'	 <value name="pins">' +
'        <block type="math_number">' +
'          <field name="NUM">4</field>' +
'        </block>' +
'      </value>' +
'	 <value name="pin1">' +
'        <block type="math_number">' +
'          <field name="NUM">5</field>' +
'        </block>' +
'      </value>' +
'	 <value name="pin2">' +
'        <block type="math_number">' +
'          <field name="NUM">6</field>' +
'        </block>' +
'      </value>' +
'	 <value name="pin3">' +
'        <block type="math_number">' +
'          <field name="NUM">9</field>' +
'        </block>' +
'      </value>' +
'	 <value name="pin4">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="accelstepper_move">'+
'	 <value name="steps">' +
'        <block type="math_number">' +
'          <field name="NUM">200</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="accelstepper_run"></block>' +
'    <block type="accelstepper_set">'+
'	 <value name="value">' +
'        <block type="math_number">' +
'          <field name="NUM">300</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="accelstepper_info"></block>' +
'    <block type="accelstepper_onoff"></block>' +

'    <block type="AF_dc_motor_set_speed">'+
'	 <value name="value">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'    <block type="AF_dc_motor_run"></block>' +

'  </category>' +
'  <sep></sep>' +
'  <category id="catDFPlayer" name="MP3">' +
'    <block type="dfplayer_instance"></block>' +
'    <block type="dfplayer_play">'+
'		<value name="NAME">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="dfplayer_opt"></block>' +
'    <block type="dfplayer_volume">'+
'		<value name="volume">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="dfplayer_available"></block>' +
'    <block type="dfplayer_checkstatus"></block>' +
'    <block type="dfplayer_exist"></block>' +
'    <block type="dfplayer_filenumber"></block>' +
'    <block type="dfplayer_filecounts"></block>' +
'    <block type="dfplayer_playmp3folder">'+
'		<value name="song">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'		<value name="folder">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="dfplayer_filecountsinfolder">'+
'		<value name="folder">' +
'			<block type="math_number">' +
'				<field name="NUM">1</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'	</category>' +
'  <sep></sep>' +

'  <sep></sep>' +
'  <category id="catSD" name="SD">' +
'    <block type="sd_setup"></block>' +
'    <block type="sd_open">'+
'      <value name="DIR">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="sd_exists">'+
'      <value name="DIR">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="sd_actions">'+
'      <value name="DIR">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="file_instance"></block>' +
'    <block type="file_info"></block>' +
'    <block type="file_read"></block>' +
'    <block type="file_write">'+
'      <value name="data">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="file_seek">'+
'      <value name="data">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
' 	 </block>' +
'    <block type="file_close">'+
'	 </block>' +
'    <block type="file_readbmp">'+
'      <value name="data">' +
'        <block type="text"></block>' +
'      </value>' +
'	 </block>' +
'    <block type="file_readbuffer">'+
'      <value name="length">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'	 </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catRawCode" name="Raw Code">' +
'    <block type="raw_func"></block>' +
'    <block type="raw_code"></block>' +
'    <block type="raw_output"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="More_adv" name="More adv.">' +
'		<category id="catBMP180" name="BMP180" >' +
'			<block type="bmp_simplebegin"></block>' +
'			<block type="bmp_begin"></block>' +
'			<block type="bmp_getdata">'+
'				<value name="T">' +
'					<block type="variables_get">' +
'					</block>' +
'				</value>' +
'				<value name="P">' +
'					<block type="variables_get">' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="bmp_getabsdata">'+
'				<value name="P">' +
'					<block type="variables_get">' +
'					</block>' +
'				</value>' +
'				<value name="P0">' +
'					<block type="variables_get">' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="bmp_getdatatp">'+
'				<value name="T">' +
'					<block type="variables_get">' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="bmp_startdata"></block>' +
'			<block type="bmp_geterror"></block>' +
'		</category>' +
'		<sep></sep>' +
'		<category id="catRFM69" name="RFM69">' +
'			<block type="rfm69_instance">'+
'				<value name="ID">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'				<value name="NetworkID">' +
'					<block type="math_number">' +
'						<field name="NUM">100</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="rfm69_setdataconfig">'+
'				<value name="value">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="rfm69_getdataconfig">'+
'				<value name="value">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="rfm69_send">'+
'				<value name="addr">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="rfm69_sendwithretry">'+
'				<value name="addr">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'				<value name="retries">' +
'					<block type="math_number">' +
'						<field name="NUM">3</field>' +
'					</block>' +
'				</value>' +
'				<value name="wait_time">' +
'					<block type="math_number">' +
'						<field name="NUM">300</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="rfm69_receive">'+
'				<value name="value">' +
'					<block type="math_number">' +
'						<field name="NUM">1</field>' +
'					</block>' +
'				</value>' +
'			</block>' +
'			<block type="rfm69_mode"></block>' +
'			<block type="rfm69_events"></block>' +
'			<block type="rfm69_setencrypt">'+
'      			<value name="value">' +
'        			<block type="text"></block>' +
'      			</value>' +
'			</block>' +
'		</category>' +
'		<sep></sep>' +
'  <category id="catIMU" name="IMU">' +
'    <block type="madgwick_setup">'+
'		<value name="madgwick_freq">' +
'			<block type="math_number">' +
'				<field name="NUM">25</field>' +
'			</block>' +
'		</value>' +
'	 </block>' +
'    <block type="imu_setup"></block>' +
'    <block type="imu_update"></block>' +
'    <block type="imu_update_rpy"></block>' +
'    <block type="imu_orientation"></block>' +
'    <block type="imu_read_data"></block>' +
'    <block type="imu_rawdata"></block>' +
'  </category>' +
'    <category id="catPID" name="PID">' +
'      <block type="pid_setup"></block>' +
'      <block type="pid_compute"></block>' +
'      <block type="pid_settuning"></block>' +
'      <block type="pid_gettuning"></block>' +
'      <block type="pid_setlimits"></block>' +
'      <block type="pid_settime"></block>' +
'    </category>' +
' </category>' +
' </category>' +
'</xml>';
