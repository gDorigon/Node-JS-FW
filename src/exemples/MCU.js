class Microcontrolador {
    chip;
    aliemtacao;
    pinos;
    flash;
    led;

    constructor(chip, aliemtacao, pinos, flash, led) {
        this.chip = chip;
        this.aliemtacao = aliemtacao;
        this.pinos = pinos;
        this.flash = flash;
        this.led = led;
    }

    getChip() {
        return this.chip;
    }

    getaliemtacao() {
        return this.aliemtacao;
    }

    getPinos() {
        return this.pin;
    }

    getFlash() {
        return this.flash;
    }

    getLed() {
        return this.led;
    }

    
    
}

    class STM32 extends Microcontrolador {

        debug;

        constructor(chip, aliemtacao, pinos, flash, led){
            super(chip, aliemtacao, pinos, flash, led)
            this.debug = true;
        }
    }

    class ESP32 extends Microcontrolador {

        comunicacao;

        constructor(chip, aliemtacao, pinos, flash, led){
            super(chip, aliemtacao, pinos, flash, led)
            this.comunicacao = "wifi";
        }
    }

    const esp01 = new ESP32("32-WROOM", "MICRO-USB", 32, "512 Kbps", 1);

    const stm01 = new STM32("NUCLEO-G0B1RE", "MICRO-USB",76, "4 Mbs", 4 );

    console.log(` O ESP32 Possui: \n  ${esp01.chip} como núcleo \n ${esp01.aliemtacao} como conexão com o computador \n ${esp01.pinos} pinos`)

