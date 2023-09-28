import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

// O componente 'Form' recebe três props: 'getUsers', 'onEdit' e 'setOnEdit'.
const Form = ({ getUsers, onEdit, setOnEdit }) => {

  // Criar uma referência 'ref' usando o hook useRef. Essa referência será usada para acessar elementos do DOM.
  const ref = useRef();

  // O useEffect é usado para realizar ações quando 'onEdit' muda.
  useEffect(() => {

    // Verifica se 'onEdit' é verdadeiro (ou seja, se está definido).
    if (onEdit) {

      // Obtém o elemento DOM referenciado por 'ref'.
      const user = ref.current;

      // Preenche os campos do formulário com os valores de 'onEdit'.
      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);


  // Função que lida com o envio do formulário.
  const handleSubmit = async (e) => {

    // Evita o comportamento padrão de envio do formulário. | Pra não recarregar a página
    e.preventDefault();

    // Obtém uma referência ao elemento do DOM referenciado por 'ref'. | Referencia o formulário
    const user = ref.current;

    // Valida se todos os campos obrigatórios estão preenchidos.
    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {

      // Se algum campo estiver em branco, exibe um aviso utilizando a biblioteca 'toast' e retorna.
      return toast.warn("Preencha todos os campos!");
    }

    // 'Se estiver tudo certo...'
    // Verifica se está no modo de edição ('onEdit' definido). | Que está sendo enviado o formulário de uma edição. Se sim...
    if (onEdit) {

      // 'Fazer um await axios .put que é uma edição no localhost, passando o id do item que está sendo editado
      // Envia uma requisição PUT para atualizar o usuário existente no servidor.
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          // essas informações vem das informações do back-end const values do arquivo user.js
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })

        // se a atualização do item der certo...
        // Exibe uma mensagem de sucesso com 'toast'. | no contexto do back-end em user.js 'Usuário atualizado com sucesso' ****
        .then(({ data }) => toast.success(data))
        // Em caso de erro, exibe uma mensagem de erro com 'toast'. ****
        .catch(({ data }) => toast.error(data));

    } else {
      // se não for um item de edição... await axios .post que é uma inclusão na url raíz e passando o mesmo texto do put acima, diferença post não precisa id
      // Envia uma requisição POST para adicionar um novo usuário no servidor.
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        })

        // Exibe uma mensagem de sucesso com 'toast'. | vai trabalhar na mesma forma do que o de cima****
        .then(({ data }) => toast.success(data))
        // Em caso de erro, exibe uma mensagem de erro com 'toast'. ****
        .catch(({ data }) => toast.error(data));
    }

    // Limpa os campos do formulário. | Depois de incluir ou editar um item
    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_nascimento.value = "";

    // Limpa o estado de 'onEdit' para sair do modo de edição. | Pra fazer depois da edição fazer uma inclusão sem dar conflitos
    setOnEdit(null);
    // Atualiza a lista de usuários chamando a função 'getUsers'. | Lembrando que getUsers em App.js faz uma nova requisição pro back-end no get, pegando todos
    // os itens
    getUsers();
  };

  return (
    // O componente 'FormContainer' é renderizado com referência ('ref') e função de envio ('handleSubmit').
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" />
      </InputArea>
      
      {/* Botão para enviar o formulário */}
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
