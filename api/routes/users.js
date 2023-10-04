// Importa o framework Express para lidar com rotas HTTP.
// Importar express de "express";
import express from "express";

// Importa as funções controladoras de usuários para cada operação CRUD.
// importar { adicionar Usuário, deletar Usuário, pegar Usuário, atualizar Usuário } de "../controllers/user.js";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

// Cria um roteador usando o Express para lidar com as rotas da API de usuários. (indicar que vai ser uma rota)
// - indicando que é uma rota
// rota ligando a = Rota.express()
const router = express.Router()

// Rota para obter / pegar todos os usuários. Chama a função 'getUsers' quando uma requisição GET é feita para '/'.
// ("/" - 1º parâmetro, indicando que o get vai ser na raíz da rota e chamando uma função getUsers)
// - esse getUsers vai então lá no banco (user.js) e trás o que é descrito
// rota.pegar("/", pegar Usuários)
router.get("/", getUsers)

// Rota para adicionar um novo usuário. Chama a função 'addUser' quando uma requisição POST é feita para '/'.
// rota.criar("/", adicionar Usuário)
router.post("/", addUser)

// Rota para atualizar um usuário existente com base no 'id'. Chama a função 'updateUser' quando uma requisição PUT é feita para '/:id'.
// rota.atualizar("/:id", atualizar Usuário)
router.put("/:id", updateUser)

// Rota para deletar um usuário existente com base no 'id'. Chama a função 'deleteUser' quando uma requisição DELETE é feita para '/:id'.
// rota.deletar("/:id", deletar Usuário)
router.delete("/:id", deleteUser)

// Exporta o roteador para ser usado em outras partes do aplicativo.
// exportar rota por padrão
export default router