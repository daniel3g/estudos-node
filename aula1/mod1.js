const nome = 'Daniel';
const sobrenome = 'Silva';

const falaNome = () => {
    console.log(nome, sobrenome);
}

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';