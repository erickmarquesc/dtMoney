import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

//Deixa o elemento sempre sentralizado
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem; //1rem = 16px

  //Deixa os elementos um do lado do outro na mesma linha
  display: flex;
  align-items: center;

  //Para dar um espaço máximo entre os elementos
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.5s;

    &:hover{
      filter: brightness(0.9); //Faz com que o objeto todo escureça
    }
  }
`;