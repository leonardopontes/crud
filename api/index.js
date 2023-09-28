// Importa o framework Express para lidar com rotas HTTP.
import express from "express";

// Importa as rotas de usuário definidas em "./routes/users.js".
import userRoutes from "./routes/users.js";

// Importa o módulo "cors" para lidar com políticas de controle de acesso HTTP.
import cors from "cors";

// Cria uma aplicação Express.
const app = express();

// Permite que a aplicação use JSON como formato de requisição. (alterações POST, PUT)
app.use(express.json());

// Habilita o uso de CORS (Cross-Origin Resource Sharing) para permitir requisições de origens diferentes. (evitar conflitos)
app.use(cors());

// Associa as rotas de usuário à raiz da aplicação.
app.use("/", userRoutes);

// Inicia o servidor da aplicação, ouvindo na porta 8800.
app.listen(8800);