radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.servoWritePin(AnalogPin.P0, angle)
        angle += -5
    } else if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, angle)
        angle += 5
    } else if (receivedNumber == 2) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 30)
        basic.pause(2000)
    } else if (receivedNumber == 3) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 30)
        basic.pause(2000)
    } else if (receivedNumber == 4) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
})
let angle = 0
DFRobotMaqueenPlusV2.init()
angle = 90
radio.setGroup(21)
basic.forever(function () {
	
})
