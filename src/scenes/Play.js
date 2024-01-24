class Play extends Phaser.Scene{
    constructor() {
        super('playScene')
        console.log('Play: constructor')
    }

    init(stats){
        console.log('Play: init')
        this.HP = stats.HP
        this.EXP = stats.EXP
    }

    create(){
        console.log('Play: create')
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)

        this.scene.add('statsoverlayScene', StatsOverlay, false)
        this.scene.launch('statsoverlayScene')

        //moving the origin to the center of the screen 
        //images are good for backgrounds and you should use sprites instead in order to modify the asset better 
        this.tomato = this.add.sprite(0, 0, 'tomato').setOrigin(0).setScale(2,10)
    }

    update() {
        //console.log('Play: update')
        this.tomato.angle += 10
    }
}