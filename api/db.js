// importa o banco de dados MySQL que foi instalado no projeto
// importar mysql de "mysql"
import mysql from "mysql"

// exporta uma constante 'database' que é criada para armazenar a criação da conexão com o MySQL
// fornece dentro da constante todas informações necessárias para a criação da conexão com o MySQL
// exportar db ligando a = criar Conexão com.mysql({})
export const db = mysql.createConnection({
    // host:
    host: "localhost",
    // user:
    user: "root",
    // senha:
    password: "203clock",
    // database:
    database: "crud"
})