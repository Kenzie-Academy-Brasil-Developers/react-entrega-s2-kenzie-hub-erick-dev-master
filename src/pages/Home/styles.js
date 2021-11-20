import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerForm = styled.div`
  margin: 0;
  border: 2px solid #f5f5f5;
  min-height: 330px;
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin: 0;
    height: 40px;
    width: 275px;
    padding-left: 8px;
  }
  .cadastrar {
    height: 40px;
    margin: 15px 0;
    background: var(--azul);
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  .cadastrar:hover{
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
    margin: 8px 0;
    font-size: 12px;
  }
  .lista-Modulos {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .lista-Modulos li {
  }
`;
