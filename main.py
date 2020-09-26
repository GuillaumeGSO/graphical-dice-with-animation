number = 0
def displayNumber():
    led.set_brightness(255)
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    basic.pause(200)
    for index in range(256):
        led.set_brightness(255 - index)
        basic.pause(5)
    basic.clear_screen()
    led.set_brightness(255)
    if number == 1:
        for index2 in range(256):
            led.plot_brightness(2, 2, index2)
            basic.pause(5)
    elif number == 2:
        for index3 in range(256):
            led.plot_brightness(0, 2, index3)
            led.plot_brightness(4, 2, index3)
            basic.pause(5)
    elif number == 3:
        for index4 in range(256):
            led.plot_brightness(0, 4, index4)
            led.plot_brightness(2, 2, index4)
            led.plot_brightness(4, 0, index4)
            basic.pause(5)
    elif number == 4:
        for index5 in range(256):
            led.plot_brightness(0, 0, index5)
            led.plot_brightness(4, 0, index5)
            led.plot_brightness(0, 4, index5)
            led.plot_brightness(4, 4, index5)
            basic.pause(5)
    elif number == 5:
        for index6 in range(256):
            led.plot_brightness(0, 0, index6)
            led.plot_brightness(0, 4, index6)
            led.plot_brightness(4, 0, index6)
            led.plot_brightness(4, 4, index6)
            led.plot_brightness(2, 2, index6)
            basic.pause(5)
    else:
        for index7 in range(256):
            led.plot_brightness(0, 0, index7)
            led.plot_brightness(0, 2, index7)
            led.plot_brightness(0, 4, index7)
            led.plot_brightness(4, 0, index7)
            led.plot_brightness(4, 2, index7)
            led.plot_brightness(4, 4, index7)
            basic.pause(5)

def on_gesture_shake():
    global number
    basic.clear_screen()
    number = randint(1, 6)
    displayNumber()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
