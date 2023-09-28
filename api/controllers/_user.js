// importar a constante db de _db que armazena a criação da conexão com o banco de dados


// Exportar 'getUsers' para pegar usuários.
// Os parâmetros serão (_, res), onde 'res' é a resposta que será enviada ao usuário.
// - como é 'getUsers' não precisa usar 'req', que é o que o usuário envia para o back-end ficando '_'


  // Criar uma string representando uma consulta SQL para selecionar todos os registros da tabela 'usuarios'.


  // Usar no banco de dados uma query (consulta), que foi armazenada em "q", e que será um parâmetro.
  // Usar os parâmetros '(err, data)', que serão passados como retorno de chamada (callback) para tratar erros e os dados resultantes da consulta.
  // - q como 1º parâmetro que é o 'SELECT' (vírgula) uma função que vai ter o retorno...


    // Se ocorrer um erro ('err'), retornar como resposta em json o erro.


    // Se não houver erro, retornar uma resposta com status 200 em json e trazer os dados resultantes da consulta



// Exportar 'addUser' para adicionar um novo usuário.
// Os parâmetros será uma requisição feita ao servidor e resposta que será enviada ao usuário.


  // Criar uma string representando uma consulta SQL para inserir um novo usuário na tabela 'usuarios'.


  // Extrair os valores da requisição no corpo para serem usados na inserção.


  // Usar no banco de dados uma query (consulta), que foi armazenada em "q", e que será um parâmetro, passando os valores.
  // 3º parâmetro - Uma função recebendo ('err') // Qualquer erro ('err') será tratado na função de retorno de chamada.


    // Se ocorrer um erro ('err'), retornar como resposta em json o erro.


    // Se não houver erro, retornar uma resposta com status 200 em json com a string de Usuário criado com sucesso



// Exportar 'updateUser' para atualizar um usuário existente.
// Os parâmetros será uma requisição feita ao servidor e resposta que será enviada ao usuário.


  // Criar uma string representando uma consulta SQL para atualizar os dados de um usuário na tabela 'usuarios'.


  // Extrair os valores da requisição no corpo para serem usados na inserção.


  // Usar no banco de dados uma query (consulta), que foi armazenada em "q", e que será um parâm, passando todos valores e uma requisição feita como parâm o id
  // 3º parâm Qualquer erro ('err') será tratado na função de retorno de chamada.

    // Se ocorrer um erro ('err'), retornar como resposta em json o erro.

  // Se não houver erro, retornar uma resposta com status 200 em json com a string de Usuário atualizado com sucesso



// Exportar 'deleteUser' para deletar um usuário existente.
// Os parâmetros será uma requisição feita ao servidor e resposta que será enviada ao usuário.


  // Criar uma string representando uma consulta SQL para deletar um usuário na tabela 'usuarios' com base no "id".


  // Usar no banco de dados uma query (consulta), que foi armazenada em "q", e que será um parâm, passando uma requisição feita como parâm o id
  // 3º parâm Qualquer erro ('err') será tratado na função de retorno de chamada.


    // Se ocorrer um erro ('err'), retornar como resposta em json o erro.


    // Se não houver erro, retornar uma resposta com status 200 em json com a string de Usuário deletado com sucesso
