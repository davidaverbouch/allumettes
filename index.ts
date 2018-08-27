

class App {

    nbToken;
    token: Allumettes[] = [];
    statusPlayer;

    constructor() {
        this.nbToken = Math.round(Math.random() * 10) + 12;
        this.statusPlayer = "computer";

        for (let i = 0; i < this.nbToken; i++) {
            this.token.push(new Allumettes());
        }
    }

    start() {
        if (this.statusPlayer == "computer") this.play();
    }

    play() {

        switch (this.nbToken) {
            case 0:
                alert("play again !");
                break;
            case 1:
            case 4:
            case 5:
            case 8:
            case 9:
            case 10:
            case 11:
                this.take(1, "computer");
                break;
            case 2:
            case 6:
                this.take(2, "computer");
                break;
            default:
                this.take(3, "computer");
                break;
        }
    }

    userChoose (nbToken) {
        this.take(nbToken, "user");
        
        setTimeout(() => { this.play(); }, 1000);
    }

    take (nbToken, statusPlayer) {
        this.nbToken -= nbToken; 
        for (let i = 0; i < nbToken; i++) {
            let len = this.nbToken - 1 + nbToken;
            this.token[len - i].hide();
        }
        (this.statusPlayer == "computer")? this.statusPlayer = "user" : this.statusPlayer = "computer";
    }
}

class Allumettes {
    status;
    cssClass;

    constructor() {
        this.status = "visible";
        this.cssClass = "visible fixed";
    }

    hide () {
        this.cssClass = "visible animated slideDownOut";
        
        setTimeout(() => { this.hidden(); }, 1000);
    }

    hidden () {
        this.cssClass = "hidden";
    }
}

var app = new App();