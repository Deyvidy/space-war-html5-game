function ManagerInputs() {
    this.DIREITA = false;
    this.ESQUERDA = false;
    this.CIMA = false;
    this.BAIXO = false;
    this.ESPACO = false;

    this.start();
}

ManagerInputs.prototype.start = function () {

    document.addEventListener('keydown', function(evento) {


        if (evento.keyCode == 38) { // Seta para esquerda
            this.CIMA = true;
        }

        if (evento.keyCode == 40) { // Seta para esquerda
            this.BAIXO = true;
        }

        if (evento.keyCode == 37) { // Seta para esquerda
           this.ESQUERDA = true;
        }

        if (evento.keyCode == 39) { // Seta para direita
            this.DIREITA = true;
        }

        if (evento.keyCode == 32) { // Seta para direita
            this.ESPACO = true;
        }


        //console.log(this.ESQUERDA, this.DIREITA);
    }.bind(this))


    document.addEventListener('keyup', function(evento) {

            if (evento.keyCode == 38) { // Seta para esquerda
                this.CIMA = false;
            }

            if (evento.keyCode == 40) { // Seta para esquerda
                this.BAIXO = false;
            }

            if (evento.keyCode == 37) { // Seta para esquerda
                this.ESQUERDA = false;
            }

            if (evento.keyCode == 39) { // Seta para direita
                this.DIREITA = false;
            }

        if (evento.keyCode == 32) { // Seta para direita
            this.ESPACO = false;
        }

        //console.log(this.ESQUERDA, this.DIREITA);
        }.bind(this))

}