// Classe genérica representando um herói de uma aventura
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome; // Nome do herói
        this.idade = idade; // Idade do herói
        this.tipo = tipo; // Tipo do herói (ex: guerreiro, mago, monge, ninja, etc)
    }

    atacar() {
        let ataque;

        // Estrutura condicional para determinar o tipo de ataque
        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'katana';
        } else {
            ataque = 'ataque desconhecido';
        }

        // Exibir a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso:
const mago = new Hero('Gandalf', 150, 'mago');
mago.atacar(); // O mago atacou usando magia

const guerreiro = new Hero('Aragorn', 87, 'guerreiro');
guerreiro.atacar(); // O guerreiro atacou usando espada

const monge = new Hero('Kong', 30, 'monge');
monge.atacar(); // O monge atacou usando artes marciais

const ninja = new Hero('Ryu', 25, 'ninja');
ninja.atacar(); // O ninja atacou usando katana
