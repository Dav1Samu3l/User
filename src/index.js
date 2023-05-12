const gerenciadorUsuarios = require('./gerenciadorUsuarios');

for (let i = 1; i <= 30; i++) {
  const novoUsuario = {
    email: `user${i}@example.com`,
    senha: `senha${i}`,
  };

  const resultado = gerenciadorUsuarios.cadastrarUsuario(novoUsuario);
  console.log(resultado);
  
  
//   const excluirUsuario = gerenciadorUsuarios.excluirUsuario(excluirUsuario);
//  console.log(excluirUsuario);

}
