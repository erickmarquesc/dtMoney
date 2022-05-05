import styled from "styled-components";
import {darken, transparentize} from "polished";

export const Container = styled.form`
table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      //TODO PRIMEIRO TD
      &:first-child {
        color: var(--text-title);
      }

      //PARA AS CLASSES 
      &.deposit{
        color: var(--green);
      }

      &.withdraw{
        color: var(--red);
      }

      button{
        font-size: 1rem;
        color: var(--shape);
        background: var(--red);
        border: 0;
        padding: 0 1rem;
        border-radius: 0.25rem;
        height: 2rem;

        transition: filter 0.5s;

        &:hover{
          filter: brightness(0.9); //Faz com que o objeto todo escureça
        }
      }
    }
  }
  h2{
    color: var(--text-title);
    font-size: 1.5em;
    margin-bottom: 2rem;
  };

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    //PARA MUDAR A COR DA LETRA DE DENTRO DO INPUT
    &::placeholder{
      color: var(--text-body);
    };

    //PARA TODO INPUT QUE TIVER UM INPUT ANTES DELE APLICAR:
    & + input {
      margin-top: 1rem; // vai ser aplicado apartir do segundo input 
    };
  };

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    };

  };

  
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  
  background: ${(props) => props.isActive 
  ?  transparentize(0.9, colors[props.activeColor])
  : 'transparent'
  };
  
  
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
  };

  img {
    width: 20px;
    height: 20px;
  };

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  };
`;