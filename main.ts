input.onButtonPressed(Button.A, function () {
    radio.sendString("SESAME-OUVRE-TOI")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("SESAME-FERME-TOI")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(111)
