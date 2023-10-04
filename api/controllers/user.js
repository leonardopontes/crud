// a constante db que armazena a conexão com o banco de dados é importada para este arquivo
// importar a constante { db } de "../db.js";
import { db } from "../db.js";

// Exporta a função 'getUsers' para pegar usuários.
// Os parâmetros são (_, res), onde 'res' é a resposta que será enviada ao usuário.
// - como é 'getUsers' não precisa usar 'req', que é o que o usuário envia para o back-end ficando '_'
// exportar pegar Usuários ligando a = (_, resposta) contendo... => {
export const getUsers = (_, res) => {

  // Cria uma string 'q' para armazenar uma string representando uma consulta SQL para selecionar todos os registros da tabela 'usuarios'.
  // q ligando a = "SELECIONAR * DE usuarios";
  const q = "SELECT * FROM usuarios";

  // Usa a função 'query' da conexão com o banco de dados ('db') para executar a consulta SQL armazenada em 'q'.
  // Os parâmetros '(err, data)' são passados como retorno de chamada (callback) para tratar erros e os dados resultantes da consulta.
  // - q como 1º parâmetro que é o 'SELECT' (vírgula) uma função que vai ter o retorno...
  // consultar.db(q, (erro, dados)) contendo... => {
  db.query(q, (err, data) => {

    // Se ocorrer um erro ('err'), a função responde com o erro em formato JSON.
    // Se (erro) for verdade, retornar como resposta.json(erro);
    if (err) return res.json(err);

    // Se não houver erro, a função responde com os dados do banco de dados em formato JSON e com o status HTTP 200 ('OK') com a listagem de todos usuários.
    // retornar resposta.status(200).json com(dados);
    return res.status(200).json(data);
  });
};


// Exporta a função 'addUser' para adicionar um novo usuário.
// Os parâmetros 'req' representam a requisição feita ao servidor e 'res' é a resposta que será enviada ao usuário.
// exportar adicionar Usuários ligando a = (requisição, resposta) contendo... => {
export const addUser = (req, res) => {

  // Cria uma string 'q' contendo uma consulta SQL para inserir um novo usuário na tabela 'usuarios'.
  // q ligando a = "INSERIR INTO usuarios em(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";
  const q =
    "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

  // Extrai os valores do corpo da requisição para serem usados na inserção.  // é uma request (requisição) feita pelo usuário ao servidor
  // valores ligando a = [
  const values = [
    // requisição.no corpo.INSERT,
    req.body.nome,
    // requisição.no corpo.INSERT,
    req.body.email,
    // requisição.no corpo.INSERT,
    req.body.fone,
    // requisição.no corpo.INSERT,
    req.body.data_nascimento,
  ];

  // Chama a função 'query' do banco de dados ('db') para executar a consulta SQL com os valores fornecidos. // Passando o Insert e os valores que vai subs '?'
  // 3º parâmetro - Uma função recebendo ('err') // Qualquer erro ('err') será tratado na função de retorno de chamada.
  // consultar.db(q, [valores], (erro) contendo... => {
  db.query(q, [values], (err) => {

    // Se houver um erro, responde com o erro em formato JSON.
    // Se (erro) for verdade, retornar como resposta.json(erro);
    if (err) return res.json(err);

    // Se a operação foi bem-sucedida, responde com o status HTTP 200 ('OK') e uma mensagem indicando sucesso.
    // retornar resposta.status(200).json com("Usuário criado com sucesso.");
    return res.status(200).json("Usuário criado com sucesso.");
  });
};


// Exporta a função 'updateUser' para atualizar um usuário existente.
// Os parâmetros 'req' representam a requisição feita ao servidor e 'res' é a resposta que será enviada ao usuário.
// exportar atualizar Usuários ligando a = (requisição, resposta) contendo... => {
export const updateUser = (req, res) => {

  // Cria uma string 'q' contendo uma consulta SQL para atualizar os dados de um usuário na tabela 'usuarios'.
  // q ligando a = "ATUALIZAR DEFINIR usuários `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?"
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

  // Extrai os novos valores do corpo da requisição para serem usados na atualização.
  // valores ligando a = [  
  const values = [
    // requisição.no corpo.UPDATE,
    req.body.nome,
    // requisição.no corpo.UPDATE,
    req.body.email,
    // requisição.no corpo.UPDATE,
    req.body.fone,
    // requisição.no corpo.UPDATE,
    req.body.data_nascimento,
  ];

  // Chama a função 'query' do banco de dados ('db') para executar a consulta SQL com os novos valores.
  // O 'id' do usuário a ser atualizado é passado como parte da consulta.
  // Qualquer erro ('err') será tratado na função de retorno de chamada.
  // consultar.db(q, [...valores, requisição.com parâmetro.id], (erro) contendo... => {
  db.query(q, [...values, req.params.id], (err) => { // q - 1º param | 2º param - receber todos os "values" (valores), o id que será da requisição | 3º param - verificar erro
    // Se (erro) for verdade, retornar como resposta.json(erro);
    if (err) return res.json(err);

    // Se a operação foi bem-sucedida, responde com o status HTTP 200 ('OK') e uma mensagem indicando sucesso. 
    // retornar resposta.status(200).json com("Usuário atualizado com sucesso."); 
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};


// Exporta a função 'deleteUser' para deletar um usuário existente.
// Os parâmetros 'req' representam a requisição feita ao servidor e 'res' é a resposta que será enviada ao usuário.
// exportar deletar Usuários ligando a = (requisição, resposta) contendo... => {
export const deleteUser = (req, res) => {

  // Cria uma string 'q' contendo uma consulta SQL para deletar um usuário da tabela 'usuarios' com base no 'id'.
  // q ligando a = "EXCLUIR DOS usuários WHERE `id` = ?"
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  // O 'id' do usuário a ser deletado é obtido dos parâmetros da requisição e passado como parte da consulta.
  // Chama a função 'query' do banco de dados ('db') para executar a consulta SQL.
  // Qualquer erro ('err') será tratado na função de retorno de chamada.
  // consultar.db(q, [requisição.com parâmetro.id], (erro) contendo... => {
  db.query(q, [req.params.id], (err) => { // q - 1º param | 2º param - receber o id que será dos parâmetros | 3º param - verificar erro

    // Se houver um erro, responde com o erro em formato JSON.
    // Se (erro) for verdade, retornar como resposta.json(erro);
    if (err) return res.json(err);

    // Se a operação foi bem-sucedida, responde com o status HTTP 200 ('OK') e uma mensagem indicando sucesso.
    // retornar resposta.status(200).json com("Usuário deletado com sucesso."); 
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
