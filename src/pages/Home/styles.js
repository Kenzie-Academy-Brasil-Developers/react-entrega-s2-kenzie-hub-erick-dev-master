import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    height: 80px;
    width: 90vw;
    background: #ffffff;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    div{
      margin: 0;
      background: white;
    }
  }
  figure img {
    height: 40px;
    border-radius: 100%;
  }
  .tecs {
    min-width: 290px;
    min-height: 400px;
    border-radius: 5px;
    margin-top: 30px;
  }
  .dadosUser {
    min-width: 290px;
    min-height: 400px;
    border-radius: 5px;
    margin-top: 30px;
    button{
      border: none;
      background:#F5F5F5;
      color: var(--cinza);
      width: 100%;
      height: 40px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .headTecs {
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
  }
  .headUser {
    padding: 15px;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: var(--azul);
    color: white;
    border-radius: 10px 10px 0px 0px;
    height: 90px;
    div {
      margin: 0;
      background: var(--azul);
      height: 80px;
      h3{
        margin: 5px 0 0;
        font-size: 23px;
      }
      h4{
        margin: 7px 0 0;
        font-size: 15px;
      }
      h5{
        display: inline-block;
        background: none;
        color: white;
        margin: 5px 0;
        font-size: 10px;
      }
    }
    img {
      height: 70px;
      border-radius: 100%;
    }
  }
  .controlUser{
    padding: 15px 30px;
  }
  .NameContact{
    margin-bottom: 15px;
    padding: 15px;
    display: flex;
    background: rgba(64, 60, 170, 0.1) ;
    div{
      margin: 0 0 0 15px;
      h3{
        margin-bottom: 10px;
        font-size: 14px;
      }
      p{
        font-size: 12px;
        color: #999999;
      }
    }
  }
  .Email{
    padding: 15px;
    display: flex;
    background: rgba(64, 60, 170, 0.1) ;
    div{
      margin: 0 0 0 15px;
      h3{
        margin-bottom: 10px;
        font-size: 14px;
      }
      p{
        font-size: 12px;
        color: #999999;
      }
    }
  }
 

  .itensWorks{
    border-right: 4px solid #F5F5F5;
    display: flex;
    margin-bottom: 15px;
  }
  .itensWorks:hover{
    border-right: 4px solid var(--azul);
  }
  .itensWorks div{
    margin: 0 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .itensWorks div h3{
    font-weight: bold;

  }
  .itensWorks div p{
    color: #999999;

  }


  @media (min-width: 1024px) {
    #techs{
    display: flex;
  }
  .tecs{
    margin-right: 15px;
  }
  }
`;
