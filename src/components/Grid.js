import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

// text-align: se receber alguma props (propriedade) como alignCenter, vai alinhar ao centro, se não vai ao início (start)
// width: se passar alguma props (propriedade) de tamanho vai prevalecer esse tamanho, se não vai ser "auto"
export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

// Componente 'Grid' que exibe uma lista de usuários. // Propriedade users - que vai ser o que vai vim do banco.
// Grid ligando a = ({ usuários, sob Usuários, definir Sob Edição}) contendo... => {
const Grid = ({ users, setUsers, setOnEdit }) => {
  // Função para lidar com a edição de um usuário.
  // lidar com Edição ligando a = (item) contendo... => {
  const handleEdit = (item) => {
     // Define o usuário a ser editado usando 'setOnEdit'.
     // definir Sob Edição(item);
    setOnEdit(item);
  };

  // Função para lidar com a exclusão de um usuário.
  // lidar com Deletar ligando a = função assíncrona (id) contendo... => {
  const handleDelete = async (id) => {
    // Envia uma requisição DELETE para remover o usuário do servidor.
    // aguardar axios.deletar("http://localhost:8800/" + com base no id)
    await axios
      .delete("http://localhost:8800/" + id)
      // - Para validar se deu certo, then que é uma "promise" que vai receber o objeto "data", que é basicamente o texto 'formulado' no back end que o usuário 
      // foi deletado com sucesso (user.js)
      // .então com(({ dados }) contendo... => {
      .then(({ data }) => {
        // Atualiza a lista de usuários excluindo o usuário removido.
        // - Como é um "delete", ao em vez de recarregar o banco novamente, será criado a constante newArray, filtrando os usuários que foi recebido na 
        // "const Grid", usuário que tem o id diferente do que foi deletado, então vai retornar todos os outros usuários
        // novo Array ligando a = filtrar.usuários((usuário) com => id.usuário !== id);
        const newArray = users.filter((user) => user.id !== id);

        // definir Usuários(novo Array);
        setUsers(newArray);
        // Exibe uma mensagem de sucesso com 'toast'.
        // toast.sucesso(dados);
        toast.success(data);
      })
      // Em caso de erro, exibe uma mensagem de erro com 'toast'.
      // .pegar com(({ dados }) exibindo => toast.erro(dados));
      .catch(({ data }) => toast.error(data));

    // Limpa o estado de 'onEdit' para sair do modo de edição.  
    // definir Sob Edição(nulo);
    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {/* Mapeia cada usuário e renderiza uma linha da tabela para cada um. | - i, indice do item (24:50) */}
        {/* mapear.usuário((item, indice) contendo... => */}
        {users.map((item, i) => (
          /* chave={i} de índice */
          <Tr key={i}>
            {/* {item.nome} */}
            <Td width="30%">{item.nome}</Td>
            {/* {item.email} */}
            <Td width="30%">{item.email}</Td>
            {/* {item.fone} */}
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            {/* Ícone de edição que chama a função 'handleEdit' quando clicado. */}
            <Td alignCenter width="5%">
              {/* ao Clicar={() contendo => lidar com Edição do(item)} */}
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            {/* Ícone de exclusão que chama a função 'handleDelete' quando clicado. | passando o id do item */}
            <Td alignCenter width="5%">
              {/* ao Clicar={() contendo => lidar com Deletar do(item com.id)} */}
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
