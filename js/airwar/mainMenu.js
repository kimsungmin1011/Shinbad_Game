BasicGame.MainMenu = function (game) {
  this.music = null;
  this.playButton = null;
};

BasicGame.MainMenu.prototype = {
  create: function () {
    this.add.sprite(0, 0, 'titlepage');

    this.loadingText = this.add.text(this.game.width / 2, this.game.height / 2 + 80, "Z 또는 클릭하면 게임을 시작합니다", { font: "30px Arial", fill: "#F00" });
    this.loadingText.anchor.setTo(0.5, 0.5);
    this.add.text(this.game.width / 2, this.game.height - 120, "신한은행 대학생 홍보대사 39기", { font: "15px monospace", fill: "#F00", align: "center"}).anchor.setTo(0.5, 0.5);
    this.add.text(this.game.width / 2, this.game.height - 90, "서경강 4팀 신밧드의 모험", { font: "15px monospace", fill: "#0067a3", align: "center"}).anchor.setTo(0.5, 0.5);
  },

  update: function () {
    if (this.input.keyboard.isDown(Phaser.Keyboard.Z) || this.input.activePointer.isDown) {
      this.startGame();
    }
  },

  startGame: function (pointer) {
    this.state.start('Game');
  }
};
