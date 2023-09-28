// importa o banco de dados MySQL que foi instalado no projeto
import mysql from "mysql"

// exporta uma constante 'database' que é criada para armazenar a criação da conexão com o MySQL
// fornece dentro da constante todas informações necessárias para a criação da conexão com o MySQL
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "203clock",
    database: "crud"
})