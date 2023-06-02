radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.servoWritePin(AnalogPin.P0, angle)
        angle += -5
    } else if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, angle)
        angle += 5
    } else if (receivedNumber == 5) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 30)
    } else if (receivedNumber == 6) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 30)
    } else if (receivedNumber == 4) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    } else if (receivedNumber == 2) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 30)
    } else if (receivedNumber == 3) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 30)
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(6)
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(5)
})
let angle = 0
DFRobotMaqueenPlusV2.init()
angle = 90
radio.setGroup(21)
pins.servoSetPulse(AnalogPin.P0, 1500)
