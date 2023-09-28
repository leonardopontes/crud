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


// Passar 3 propriedades que será utilidada adiante como retorno no Grid: usuários, sob Usuários, definir edição.


  // Lidar com edição de um item, atribuindo como parâmetro.


    // Atribuir o estado de definir edição sob item.


  // Lidar com exclusão. de forma assíncrona, utilizando id como parâmetro.


    // Pedir pra aguardar enquanto axios deleta no localhost (mas) com base no id...


      // Se der certo, então, atribuir data (dados) como parâmetro


        // Atribuir com nome de "novo Array". Com usuários sendo filtrados e usuário como parâmetro, usuário como parâmetro com id, diferente precisamente do id


        // Atribuir sob Usuários o "novo Array"

        // Exibir utilizando a biblioteca toast, uma mensagem de sucesso, com data (dados).


      // Em caso de erro, pegar dados passando como parâmetro, exibir com toast uma mensagem de erro, com os dados.


    // Pegar o estado de 'definir edição', e atribuir nulo.  


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
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>
              {item.fone}
            </Td>
            {/* Ícone de edição que chama a função 'handleEdit' quando clicado. */}
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            {/* Ícone de exclusão que chama a função 'handleDelete' quando clicado. | passando o id do item */}
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;