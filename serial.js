require('webduino-blockly');
require('webduino-bit-modules');
require('webduino-serial-transport')

var board, matrix,led;

(async function() {

    board = new webduino.Arduino({
        transport: 'serial',
        path: '/dev/cu.wchusbserial14610',
        baudRate: 115200
    });

    await delay(1);

    board.on('ready', async function(board) {
        try {
            console.log("wait 20sec...", board);
            await delay(20);
            console.log("set led.............");
            led = new webduino.module.Led(board, board.getDigitalPin(18));
            console.log("set blink.............");
            led.blink();
            /*
            matrix = getMatrix(board, 4, 25);
            console.log("set Matrix.............");
            matrix.setColor("0000000001000000020000000300000004000000050000000600000007ffff0008000000090000000a0000000bffff000cff00000dffff000e0000000f0000001000000011ffff0012000000130000001400000015000000160000001700000018000000");

            while (true) {
                console.log("on");
                matrix.setColor("0000000001000000020000000300000004000000050000000600000007ffff0008000000090000000a0000000bffff000cff00000dffff000e0000000f0000001000000011ffff0012000000130000001400000015000000160000001700000018000000");
                await delay(1);
                console.log("off");
                matrix.setColor("0000000001ffffff02ffffff03ffffff0400000005ffffff06ffff0007ffff0008ffff0009ffffff0affffff0bffff000cff00000dffff000effffff0fffffff10ffff0011ffff0012ffff0013ffffff1400000015ffffff16ffffff17ffffff18000000");
                await delay(1);
            }
            */
        } catch (e) {
            console.log(e);
        }
    });

}());