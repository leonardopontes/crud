// a constante db que armazena a conexão com o banco de dados é importada para este arquivo
import { db } from "../db.js";

// Exporta a função 'getUsers' para pegar usuários.
// Os parâmetros são (_, res), onde 'res' é a resposta que será enviada ao usuário.
// - como é 'getUsers' não precisa usar 'req', que é o que o usuário envia para o back-end ficando '_'
export const getUsers = (_, res) => {

  // Cria uma string 'q' para armazenar uma string representando uma consulta SQL para selecionar todos os registros da tabela 'usuarios'.
  const q = "SELECT * FROM usuarios";

  // Usa a função 'query' da conexão com o banco de dados ('db') para executar a consulta SQL armazenada em 'q'.
  // Os parâmetros '(err, data)' são passados como retorno de chamada (callback) para tratar erros e os dados resultantes da consulta.
  // - q como 1º parâmetro que é o 'SELECT' (vírgula) uma função que vai ter o retorno...
  db.query(q, (err, data) => {

    // Se ocorrer um erro ('err'), a função responde com o erro em formato JSON.
    if (err) return res.json(err);

    // Se não houver erro, a função responde com os dados do banco de dados em formato JSON e com o status HTTP 200 ('OK') com a listagem de todos usuários.
    return res.status(200).json(data);
  });
};


// Exporta a função 'addUser' para adicionar um novo usuário.
// Os parâmetros 'req' representam a requisição feita ao servidor e 'res' é a resposta que será enviada ao usuário.
export const addUser = (req, res) => {

  // Cria uma string 'q' contendo uma consulta SQL para inserir um novo usuário na tabela 'usuarios'.
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  // Extrai os valores do corpo da requisição para serem usados na inserção.  // é uma request (requisição) feita pelo usuário ao servidor
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Chama a função 'query' do banco de dados ('db') para executar a consulta SQL com os valores fornecidos. // Passando o Insert e os valores que vai subs '?'
  // 3º parâmetro - Uma função recebendo ('err') // Qualquer erro ('err') será tratado na função de retorno de chamada.
  db.query(q, [values], (err) => {

    // Se houver um erro, responde com o erro em formato JSON.
    if (err) return res.json(err);

    // Se a operação foi bem-sucedida, responde com o status HTTP 200 ('OK') e uma mensagem indicando sucesso.
    return res.status(200).json("Usuário criado com sucesso.");
  });
};


// Exporta a função 'updateUser' para atualizar um usuário existente.
// Os parâmetros 'req' representam a requisição feita ao servidor e 'res' é a resposta que será enviada ao usuário.
export const updateUser = (req, res) => {

  // Cria uma string 'q' contendo uma consulta SQL para atualizar os dados de um usuário na tabela 'usuarios'.
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  // Extrai os novos valores do corpo da requisição para serem usados na atualização.  
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  // Chama a função 'query' do banco de dados ('db') para executar a consulta SQL com os novos valores.
  // O 'id' do usuário a ser atualizado é passado como parte da consulta.
  // Qualquer erro ('err') será tratado na função de retorno de chamada.
  db.query(q, [...values, req.params.id], (err) => { // q - 1º param | 2º param - receber todos os "values" (valores), o id que será da requisição | 3º param - verificar erro
    if (err) return res.json(err);

  // Se a operação foi bem-sucedida, responde com o status HTTP 200 ('OK') e uma mensagem indicando sucesso.  
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};


// Exporta a função 'deleteUser' para deletar um usuário existente.
// Os parâmetros 'req' representam a requisição feita ao servidor e 'res' é a resposta que será enviada ao usuário.
export const deleteUser = (req, res) => {

  // Cria uma string 'q' contendo uma consulta SQL para deletar um usuário da tabela 'usuarios' com base no 'id'.
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  // O 'id' do usuário a ser deletado é obtido dos parâmetros da requisição e passado como parte da consulta.
  // Chama a função 'query' do banco de dados ('db') para executar a consulta SQL.
  // Qualquer erro ('err') será tratado na função de retorno de chamada.
  db.query(q, [req.params.id], (err) => { // q - 1º param | 2º param - receber o id que será dos parâmetros | 3º param - verificar erro

    // Se houver um erro, responde com o erro em formato JSON.
    if (err) return res.json(err);

    // Se a operação foi bem-sucedida, responde com o status HTTP 200 ('OK') e uma mensagem indicando sucesso.
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
