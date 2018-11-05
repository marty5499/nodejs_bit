require('webduino-blockly');
require('webduino-bit-modules');

(async function () {

var matrix;


boardReady({board: 'Bit', device: '4adF2GHNnimwSXukb', transport: 'mqtt'}, async function (board) {
  board.samplingInterval = 250;
  matrix = getMatrix(board, 4, 25);
  while (!false) {
    matrix.setColor("0000000001000000020000000300000004000000050000000600000007ffff0008000000090000000a0000000bffff000cff00000dffff000e0000000f0000001000000011ffff0012000000130000001400000015000000160000001700000018000000");
    await delay(1);
    matrix.setColor("0000000001ffffff02ffffff03ffffff0400000005ffffff06ffff0007ffff0008ffff0009ffffff0affffff0bffff000cff00000dffff000effffff0fffffff10ffff0011ffff0012ffff0013ffffff1400000015ffffff16ffffff17ffffff18000000");
    await delay(1);
  }
});

}());