input.onButtonPressed(Button.A, function () {
    sec = 0
    while (sec <= 120) {
        basic.pause(1000)
        sec += 1
    }
})
let sec = 0
images.arrowImage(ArrowNames.West).showImage(0)
basic.forever(function () {
    if (sec > 0 && sec < 60) {
        led.plotBarGraph(
        sec,
        60
        )
    } else if (sec == 60) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (sec > 60 && sec < 120) {
        led.plotBarGraph(
        60 - sec,
        60
        )
    } else if (sec == 120) {
        basic.showIcon(IconNames.Happy)
    }
})
