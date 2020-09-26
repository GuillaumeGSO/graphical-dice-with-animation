let number = 0
function displayNumber (num: number) {
    led.setBrightness(255)
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
        }
    }
    basic.pause(200)
    for (let index = 0; index <= 255; index++) {
        led.setBrightness(255 - index)
        basic.pause(5)
    }
    basic.clearScreen()
    led.setBrightness(255)
}
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 6)
    displayNumber(1)
    if (number == 1) {
        for (let index = 0; index <= 255; index++) {
            led.plotBrightness(2, 2, index)
            basic.pause(5)
        }
    } else if (number == 2) {
        for (let index = 0; index <= 255; index++) {
            led.plotBrightness(0, 2, index)
            led.plotBrightness(4, 2, index)
            basic.pause(5)
        }
    } else if (number == 3) {
        for (let index = 0; index <= 255; index++) {
            led.plotBrightness(0, 4, index)
            led.plotBrightness(2, 2, index)
            led.plotBrightness(4, 0, index)
            basic.pause(5)
        }
    } else if (number == 4) {
        for (let index = 0; index <= 255; index++) {
            led.plotBrightness(0, 0, index)
            led.plotBrightness(4, 0, index)
            led.plotBrightness(0, 4, index)
            led.plotBrightness(4, 4, index)
            basic.pause(5)
        }
    } else if (number == 5) {
        for (let index = 0; index <= 255; index++) {
            led.plotBrightness(0, 0, index)
            led.plotBrightness(0, 4, index)
            led.plotBrightness(4, 0, index)
            led.plotBrightness(4, 4, index)
            led.plotBrightness(2, 2, index)
            basic.pause(5)
        }
    } else {
        for (let index = 0; index <= 255; index++) {
            led.plotBrightness(0, 0, index)
            led.plotBrightness(0, 2, index)
            led.plotBrightness(0, 4, index)
            led.plotBrightness(4, 0, index)
            led.plotBrightness(4, 2, index)
            led.plotBrightness(4, 4, index)
            basic.pause(5)
        }
    }
})
