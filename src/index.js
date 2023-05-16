const gerenciadorUsuarios = require('./gerenciadorUsuarios');


const novoUsuario = {
    nome: "davi",
    email: `user4@email.com`,
    senha: `senha123}`, 
  };
  const resultado = gerenciadorUsuarios.cadastrarUsuario(novoUsuario);
  console.log(resultado);



// const email = "user@email.com";
// const senha = "senha123";
// const excluirUsuario = gerenciadorUsuarios.excluirUsuario(email, senha);
// console.log(excluirUsuario);

