const fs = require('fs');
const json = require('./users.json')

const USERS_FILE_PATH = './src/users.json';

// Função para ler o arquivo de usuários
function lerUsuario() {
  try {
    const fileData = fs.readFileSync(USERS_FILE_PATH, 'utf8');
    return JSON.parse(fileData);
  } catch (err) {
    // Se o arquivo não existir ou estiver vazio, retorna uma lista vazia
    return [];
  }
}

// Função para gravar a lista de usuários no arquivo
function novoUsuario(users) {
  fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users), 'utf8');
}

// Função para cadastrar um novo usuário
function cadastrarUsuario(usuario) {
  const users = lerUsuario();

  // Verifica se o email já está sendo utilizado
  const emailExists = users.some((user) => user.email === usuario.email);
  if (emailExists) {
    return 'Erro: O email já está sendo utilizado.';
  }

  // Adiciona o novo usuário à lista de usuários
  users.push(usuario);

  // Grava a lista atualizada no arquivo
  novoUsuario(users);

  return 'Usuário cadastrado com sucesso.';
}

// Função para fazer login
function fazerLogin(email, senha) {
  const users = lerUsuario();

  // Verifica se o email e senha correspondem a algum usuário
  const user = users.find((user) => user.email === email && user.senha === senha);
  if (user) {
    return 'Login realizado com sucesso.';
  } else {
    return 'Erro: Email ou senha inválidos.';
  }
}

// Função para excluir um usuário
function excluirUsuario(email, senha) {
  const users = lerUsuario();

  // Verifica se o email e senha correspondem a algum usuário
  const userIndex = users.findIndex((user) => user.email === email && user.senha === senha);
  if (userIndex !== -1) {
    // Remove o usuário da lista
    users.splice(userIndex, 1);

    // Grava a lista atualizada no arquivo
    novoUsuario(users);

    return 'Usuário excluído com sucesso.';
  } else {
    return 'Erro: Email ou senha inválidos.';
  }
}

module.exports = {
  cadastrarUsuario,
  fazerLogin,
  excluirUsuario,
};

// const username = 'Dav1Samu3l';
// const url = `https://api.github.com/users/${username}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const name = data.name;
//     const email = data.email;
//     const avatarUrl = data.avatar_url;
//     console.log(` Eu sou ${name}, meu email é: ${email} e minha foto é esta: ${avatarUrl} `);
//   })
//   .catch(error => console.error(error));
  