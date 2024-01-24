// Code Practice: Making a Scene
// Name: Elton Zeng
// Date: 1/17/2024

"use strict"

//const { emitKeypressEvents } = require("readline")

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true 
    },
    scene: [ MainMenu, Play]
}

let game = new Phaser.Game(config)
