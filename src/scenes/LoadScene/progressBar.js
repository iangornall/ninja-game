let progressBar = (scene) => {
  let centerX = scene.cameras.main.centerX;
  let centerY = scene.cameras.main.centerY;
  let progressBar = scene.add.graphics();
  let progressBox = scene.add.graphics();
  progressBox.fillStyle(0x999999, 0.8);
  progressBox.fillRect(centerX - 160, centerY, 320, 50);
  let percentText = scene.make.text({
    x: centerX,
    y: centerY + 75,
    text: '0%',
    style: {
      font: '18px monospace',
      fill: '#111111'
    }
  });
  percentText.setOrigin(0.5, 0.5);
  scene.load.on('progress', function (value) {
    percentText.setText(parseInt(value * 100) + '%');
    progressBar.clear();
    progressBar.fillStyle(0x000000, 1);
    progressBar.fillRect(centerX - 150, centerY + 10, 300 * value, 30);
  });
  scene.load.on('complete', function () {
    progressBar.destroy();
    progressBox.destroy();
    percentText.destroy();
  }.bind(scene));
}
export default progressBar;