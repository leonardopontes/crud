import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Estiliza um componente 'div' usando Styled Components.
const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// Estiliza um componente de título 'h2' usando Styled Components.
const Title = styled.h2``;

function App() {
  // Define o estado inicial para usuários e a edição de usuário.
  // [usuários, definir Usuários] ligando a = uso de Estado([]);
  const [users, setUsers] = useState([]);
  // [ao Editar, definir ao Editar] ligando a = uso de Estado(nulo);
  const [onEdit, setOnEdit] = useState(null);

  // Função assíncrona para obter os usuários do servidor. // Já que vai ter que esperar o Banco de Dados retornar esses dados
  // pegar Usuários ligando a = função assíncrona () contendo... => {
  const getUsers = async () => {
    // tentar {
    try {
      // aguardar o axios fazer um get no localhost
      // resposta ligado a = aguardar axios.pegar("http://localhost:8800");
      const res = await axios.get("http://localhost:8800");
      // sort -> 'sortear pelo nome' por ordem alfabética. 'a, b' com parâmetro de sort e verifica se 'a.nome' é maior que 'b.nome' e vai retornar 1, se não -1
      // definir Usuários(respondendo.dados.sorteando((a, b) sendo => (a.nome > b.nome ? 1 : -1)));
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    // pegar (erro) {  
    } catch (error) {
      // se der algum erro, sera exibido
      // toast.erro(erro);
      toast.error(error);
    }
  };

  // Efeito para chamar a função 'getUsers' quando o componente é montado e 'setUsers' muda.
  // usar Efeito(() contendo => {
  useEffect(() => {
    // pegar Usuários();
    getUsers();
  //, atribuir na Estrutura [definir Usários]);  
  }, [setUsers]); // recarregando sempre que 'setar' um usuário

  return (
    <>
      {/* Renderiza um contêiner com um título 'USUÁRIOS', um componente de formulário e uma grade de usuários. */}
      <Container>
        <Title>USUÁRIOS</Title>
        {/* Passa props para o componente de formulário. {ao Editar} {definir Ao Editar} {pegar Usuários} */}
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        {/* Passa props para o componente de grade de usuários. {definir Ao Editar} {usuários} {definir Usuários}*/}
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
      </Container>
      {/* Renderiza um contêiner para mensagens de toast. */}
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
