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


// Passar 3 propriedades que será utilidada adiante como retorno no formulário: Pegar usuários, sob edição, definir edição.


  // Utilizar o hook useRef. (Essa referência será usada para acessar elementos do DOM).


  // Utilizar o hook useEffect, passando uma função de callback. (Será usado para realizar ações sob edição).


    // Verificar se o estado de 'sob edição' é verdadeiro (ou seja, se está definido).


      // Obter o elemento DOM definindo como referência atual (será utilizado abaixo para todos os campos do banco de dados).


      // Utilizar a referência atual para cada campo do banco de dados, obtendo seus valores, e se "igualando" no estado sob edição para cada campo.

  // Reatribuir o estado de 'sob edição', que é uma dependência do hook. 
  // (!) Nesse caso, useEffect irá executar a função de callback sempre que houver uma mudança no estado de onEdit.
  // (!) Se a dependência não for fornecida, a função de callback seria chamada a cada renderização do componente.




  // Criar uma função que lida com o envio do formulário. assíncrona, utilizando um parâmetro.


    // Utilizar o parâmetro, evitando o comportamento padrão de envio do formulário. (Pra não recarregar a página)


    // Obter o elemento DOM, definindo como referência atual (será utilizado abaixo para todos os campos do banco de dados).


    // Criar uma condição de negação, obtendo o elemento DOM, os campos de dados e seus valores, operando de forma lógica.


      // Exibir um retorno utilizando a biblioteca toast, um aviso de Preencha todos os campos.


    // Verificar se está 'sob edição'. (Que está sendo enviado o formulário de uma edição. Se sim)...



      // Pedir pra aguardar enquanto axios atualiza no localhost mais o estado de sob edição com base no id...

          // ... E consultando os campos de dados, obtendo o elemento DOM, os campos de dados e seus valores


        // Se a atualização do item der certo, então com base nos dados, utilizar toast indicando sucesso, obtendo os dados (Usuário atualizado com sucesso).

        // Em caso de erro, pegar com base nos dados, utilizar toast indicando erro, obtendo os dados.



      // Se não for verdadeiro... Pedir pra aguardar enquanto axios atualiza no localhost, com base nos mesmos dados acima (diferença post não precisa id)


        // Se a atualização do item der certo, então com base nos dados, utilizar toast indicando sucesso, obtendo os dados (Usuário atualizado com sucesso).

        // Em caso de erro, pegar com base nos dados, utilizar toast indicando erro, obtendo os dados.


    // Obter o elemento DOM, os campos de dados e seus valores, "igualando-os" a um "campo vazio" (Limpando os campos, Depois de incluir ou editar um item).


    // Atribuir o estado de definir edição, tornando-o nulo (Limpa o estado de sob edição, saindo do modo. Pra depois da edição fazer inclusão sem conflitos). 

    // Atribuir a função de pegar Usuários (atualizando a lista. em App.js faz uma nova requisição pro back-end no get, pegando todos itens).

  return (
    // Atribuir com referência e a função de lidar com envio. (O Componente será renderizado com referência)
    <FormContainer>
      <InputArea>
        <Label>Nome</Label>
        {/* Atribuir campo nome */}
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        {/* Atribuir campo email */}
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        {/* Atribuir campo telefone */}
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Data de Nascimento</Label>
        {/* Atribuir campo data */}
        <Input name="data_nascimento" type="date" />
      </InputArea>
      {/* Atribuir Botão do tipo envio para salvar */}
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
; // Aqui tem um colchete antes de ;. provavelmente o código se estende até aqui, no final.

// exportar por padrão o Formulário
export default Form;