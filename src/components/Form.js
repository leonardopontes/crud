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
// Formulário ligando a = ({ pegar Usuários, sob Edição, definir Sob Edição}) contendo... => {
const Form = ({ getUsers, onEdit, setOnEdit }) => {

  // Criar uma referência 'ref' usando o hook useRef. Essa referência será usada para acessar elementos do DOM.
  // referência ligando a = uso de Referência();
  const ref = useRef();

  // O useEffect é usado para realizar ações quando 'onEdit' muda.
  // uso de Efeito(() contendo... => {
  useEffect(() => {

    // Verifica se 'onEdit' é verdadeiro (ou seja, se está definido).
    // se (sob Edição) for verdade {
    if (onEdit) {

      // Obtém o elemento DOM referenciado por 'ref'.
      // usuário ligando a = referência.atual;
      const user = ref.current;

      // Preenche os campos do formulário com os valores de 'onEdit'.
      // valor.do nome.de usuário ligando a = nome.sob Edição;
      user.nome.value = onEdit.nome;
      // valor.do email.de usuário ligando a = email.sob Edição;
      user.email.value = onEdit.email;
      // valor.fone.de usuário ligando a = fone.sob Edição;
      user.fone.value = onEdit.fone;
      // valor.da data_nascimento.de usuário ligando a = data_nascimento.sob Edição;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
    // Atribuir na estrutura [sob Edição]);
  }, [onEdit]);


  // Função que lida com o envio do formulário.
  // lidar com Envio ligando a = função assíncrona (e) contendo... => {
  const handleSubmit = async (e) => {

    // Evita o comportamento padrão de envio do formulário. | Pra não recarregar a página
    // e.Evitar comportamento();
    e.preventDefault();

    // Obtém uma referência ao elemento do DOM referenciado por 'ref'. | Referencia o formulário
    // usuário ligando a = referência.atual;
    const user = ref.current;

    // Valida se todos os campos obrigatórios estão preenchidos.
    // se as negações ( for verdade
    if (
      // valor.do nome.de usuário ||
      !user.nome.value ||
      // valor.do email.de usuário ||
      !user.email.value ||
      // valor.do fone.de usuário ||
      !user.fone.value ||
      // valor.data_nascimento.de usuário
      !user.data_nascimento.value
    ) {

      // Se algum campo estiver em branco, exibe um aviso utilizando a biblioteca 'toast' e retorna.
      // retornar com toast.aviso("Preencha todos os campos!");
      return toast.warn("Preencha todos os campos!");
    }

    // 'Se estiver tudo certo...'
    // Verifica se está no modo de edição ('onEdit' definido). | Que está sendo enviado o formulário de uma edição. Se sim...
    // se (sob Edição) for verdade {
    if (onEdit) {

      // 'Fazer um await axios .put que é uma edição no localhost, passando o id do item que está sendo editado
      // Envia uma requisição PUT para atualizar o usuário existente no servidor.
      // aguardar axios.atualizar("http://localhost:8800/" + sob Edição.com id, {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          // essas informações vem das informações do back-end const values do arquivo user.js
          // nome: valor.do nome.de usuário,
          nome: user.nome.value,
          // email: valor.do email.de usuário,
          email: user.email.value,
          // fone: valor.do fone.de usuário,
          fone: user.fone.value,
          // data_nascimento: valor.data_nascimento.de usuário,
          data_nascimento: user.data_nascimento.value,
        })

        // se a atualização do item der certo...
        // Exibe uma mensagem de sucesso com 'toast'. | no contexto do back-end em user.js 'Usuário atualizado com sucesso' ****
        // .então com(({ dados }) exibindo => toast.sucesso(dados));
        .then(({ data }) => toast.success(data))
        // Em caso de erro, exibe uma mensagem de erro com 'toast'. ****
        // .pegar com(({ dados }) exibindo => toast.erro(dados));
        .catch(({ data }) => toast.error(data));

    // se (não for verdade) {   
    } else {
      // se não for um item de edição... await axios .post que é uma inclusão na url raíz e passando o mesmo texto do put acima, diferença post não precisa id
      // Envia uma requisição POST para adicionar um novo usuário no servidor.
      // aguardar axios.criar("http://localhost:8800/", {
      await axios
        .post("http://localhost:8800", {
          // nome: valor.do nome.de usuário,
          nome: user.nome.value,
          // email: valor.do email.de usuário,
          email: user.email.value,
          // fone: valor.do fone.de usuário,
          fone: user.fone.value,
          // data_nascimento: valor.data_nascimento.de usuário,
          data_nascimento: user.data_nascimento.value,
        })

        // Exibe uma mensagem de sucesso com 'toast'. | vai trabalhar na mesma forma do que o de cima****
        // .então com(({ dados }) exibindo => toast.sucesso(dados));
        .then(({ data }) => toast.success(data))
        // Em caso de erro, exibe uma mensagem de erro com 'toast'. ****
        // .pegar com(({ dados }) exibindo => toast.erro(dados));
        .catch(({ data }) => toast.error(data));
    }

    // Limpa os campos do formulário. | Depois de incluir ou editar um item
    // valor.do nome.de usuário = "";
    user.nome.value = "";
    // valor.do email.de usuário = "";
    user.email.value = "";
    // valor.do fone.de usuário = "";
    user.fone.value = "";
    // valor.data_nascimento.de usuário = "";
    user.data_nascimento.value = "";

    // Limpa o estado de 'onEdit' para sair do modo de edição. | Pra fazer depois da edição fazer uma inclusão sem dar conflitos
    // definir Sob Edição(nulo);
    setOnEdit(null);
    // Atualiza a lista de usuários chamando a função 'getUsers'. | Lembrando que getUsers em App.js faz uma nova requisição pro back-end no get, pegando todos
    // os itens
    // pegar Usuários();
    getUsers();
  };

  return (
    // O componente 'FormContainer' é renderizado com referência ('ref') e função de envio ('handleSubmit').
    // referência ligando a = {referência} sob Envio ligando a = {lidar com Envio}
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
