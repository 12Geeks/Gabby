/**
* Fazli Mansor @ 12Geeks
* September 16, 2019
* https://github.com/12geeks/gabby

* Development environment specifics:
* Written in Microsoft Makecode
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact contact@12geeks.com.
* Distributed as-is; no warranty is given.
*/

enum gabbySwitchType{
         On=1,
         Off=0,
}
enum gabbyLED{
         P8=8,
         P9=9,
         P10=10,
         P11=11,
         P12=12
}
enum gabbyColor{
	OFF = 1000,
	RED = 1100,
	GREEN = 1010,
	BLUE = 1001,
	YELLOW = 1110,
	CYAN = 1011,
	PURPLE = 1101,
	WHITE = 1111
}

//% color=#3399cc icon="\uf185"
namespace gabby {

    /**
    * Off
    */
    //% weight=10 blockId="gabby_off" block="Off"
    export function Off():number{
        return 0
    }
    
    /**
    * On
    */
    //% weight=20 blockId="gabby_on" block="On"
    export function On():number{
	return 1
    }
    
    /**
    * Read Potentiometer
    */
    //% weight=40 blockId="gabby_potentiometer" block="Potentiometer"
    export function potentiometer(): number{
      let val = pins.analogReadPin(AnalogPin.P1)
      return val
    }
    
    /**
    * Reads Light Sensor Value (0-1023)
    */
    //% weight=45 blockId="gabby_ldr" block="Light Sensor"
    export function ldr(): number{
      let val = pins.analogReadPin(AnalogPin.P2)
      return val
    }
    
    /**
    * Check if Green button is pressed
    */
    //% weight=50 blockId="gabby_green_button" block="When Green button is pressed"
    export function greenbutton(): boolean{
      pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
      let val = pins.digitalReadPin(DigitalPin.P3)
      if(val == 0)return true
      return false
    }
    
    /**
    * Check if Red button is pressed
    */
    //% weight=60 blockId="gabby_red_button" block="When Red button is pressed"
    export function redbutton(): boolean{
      pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
      let val = pins.digitalReadPin(DigitalPin.P4)
      if(val == 0)return true
      return false
    }
    
    /**
    * Check if White button is pressed
    */
    //% weight=70 blockId="gabby_white_button" block="When White button is pressed"
    export function whitebutton(): boolean{
      pins.setPull(DigitalPin.P6, PinPullMode.PullUp)
      let val = pins.digitalReadPin(DigitalPin.P6)
      if(val == 0)return true
      return false
    }
    
    /**
    * Check if Blue button is pressed
    */
    //% weight=80 blockId="gabby_blue_button" block="When Blue button is pressed"
    export function bluebutton(): boolean{
      pins.setPull(DigitalPin.P7, PinPullMode.PullUp)
      let val = pins.digitalReadPin(DigitalPin.P7)
      if(val == 0)return true
      return false
    }

    /**
    * Turn on/off LED by pin
    */
    //% weight=90 blockId="gabby_led_digital" block="Activate LED %gabbyLED to %gabbySwitchType"
    export function led_digital(pin:gabbyLED, value: gabbySwitchType){
      let led=0
      switch(pin){
	case 8:led = DigitalPin.P8;break
        case 9:led = DigitalPin.P9;break
        case 10:led = DigitalPin.P10;break
        case 11:led = DigitalPin.P11;break
        case 12:led = DigitalPin.P12;break
	default:led = 8
      }
      pins.digitalWritePin(led,value)
    }

    /**
    * Activate Mood Lamp by setting colors (Values 0 - 1023)
    */
    //% weight=110 blockId="gabby_rgb_led" block="Activate Mood Lamp, set RED %red GREEN %green BLUE %blue"
    export function rgb_led(rval:number,gval:number,bval:number){
      pins.analogWritePin(AnalogPin.P15,rval)
      pins.analogWritePin(AnalogPin.P14,gval)
      pins.analogWritePin(AnalogPin.P13,bval)
    }

    /**
    * Activate Mood Lamp by switching colors
    */
    //% weight=120 blockId="gabby_rgb_led_digital" block="Activate Mood Lamp, set RED %red GREEN %green BLUE %blue"
    export function rgb_led_digital(rval:gabbySwitchType,gval:gabbySwitchType,bval:gabbySwitchType){
      pins.digitalWritePin(DigitalPin.P15,rval)
      pins.digitalWritePin(DigitalPin.P14,gval)
      pins.digitalWritePin(DigitalPin.P13,bval)
    }

    /**
    * Activate Mood Lamp by selecting colour
    */
    //% weight=130 blockId="gabby_rgb_led_button" block="Activate Mood Lamp, set color to %gabbyColor"
    export function rgb_led_button(val:gabbyColor){
      let bval=0,gval=0,rval=0
      bval = val % 10
      gval = (val / 10) % 10
      rval = (val / 100) % 10
      pins.digitalWritePin(DigitalPin.P15,rval)
      pins.digitalWritePin(DigitalPin.P14,gval)
      pins.digitalWritePin(DigitalPin.P13,bval)
    }

}
