import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerForm = styled.div`
  border: 2px solid #f5f5f5;
  height: 330px;
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin: 15px 0 0 0;
    height: 40px;
    width: 275px;
    padding-left: 8px;
  }
  button {
    width: 275px;
    height: 40px;
    margin: 15px 0;
    background: var(--azul);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover{
    border: 2px solid #333333;
  }
  .button-Cadastrar {
    background: var(--branco);
    color: var(--cinzaClaro);
  }
  .button-Cadastrar:hover {
    border: 2px solid #333333;
  }
  .divMsg {
    font-size: 0.7rem;
    margin: 0;
    text-align: center;
    color: var(--cinzaClaro);
  }
  .divMsg p {
    color: var(--cinza);
  }
  .msgError {
    color: red;
    background: white;
  }
`;
