let number = 0
function displayNumber () {
    led.setBrightness(255)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(200)
    for (let index = 0; index <= 255; index++) {
        led.setBrightness(255 - index)
        basic.pause(5)
    }
    basic.clearScreen()
    led.setBrightness(255)
    if (number == 1) {
        for (let index2 = 0; index2 <= 255; index2++) {
            led.plotBrightness(2, 2, index2)
            basic.pause(5)
        }
    } else if (number == 2) {
        for (let index3 = 0; index3 <= 255; index3++) {
            led.plotBrightness(0, 2, index3)
            led.plotBrightness(4, 2, index3)
            basic.pause(5)
        }
    } else if (number == 3) {
        for (let index4 = 0; index4 <= 255; index4++) {
            led.plotBrightness(0, 4, index4)
            led.plotBrightness(2, 2, index4)
            led.plotBrightness(4, 0, index4)
            basic.pause(5)
        }
    } else if (number == 4) {
        for (let index5 = 0; index5 <= 255; index5++) {
            led.plotBrightness(0, 0, index5)
            led.plotBrightness(4, 0, index5)
            led.plotBrightness(0, 4, index5)
            led.plotBrightness(4, 4, index5)
            basic.pause(5)
        }
    } else if (number == 5) {
        for (let index6 = 0; index6 <= 255; index6++) {
            led.plotBrightness(0, 0, index6)
            led.plotBrightness(0, 4, index6)
            led.plotBrightness(4, 0, index6)
            led.plotBrightness(4, 4, index6)
            led.plotBrightness(2, 2, index6)
            basic.pause(5)
        }
    } else {
        for (let index7 = 0; index7 <= 255; index7++) {
            led.plotBrightness(0, 0, index7)
            led.plotBrightness(0, 2, index7)
            led.plotBrightness(0, 4, index7)
            led.plotBrightness(4, 0, index7)
            led.plotBrightness(4, 2, index7)
            led.plotBrightness(4, 4, index7)
            basic.pause(5)
        }
    }
}
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 6)
    displayNumber()
})
