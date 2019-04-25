import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot' })
  }

  preload () {
    // const progress = this.add.graphics()

    // this.load.on('fileprogress', (file, value) => {
    //   progress.clear()
    //   progress.fillStyle(0xffffff, 0.75)
    //   progress.fillRect(700 - (value * 600), 250, value * 600, 100)
    // })    
  }

  create () {    
    this.scene.start('Game')
  }
}
