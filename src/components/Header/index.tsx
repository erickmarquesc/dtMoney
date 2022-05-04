import imgLogo from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface IHeaderProps{
  onOpenNewTransactionModal: () => void;
}

/* O Header esta recebendo a informação do estado para verificar se é True | False */
export function Header({onOpenNewTransactionModal}:IHeaderProps){
  
  return(
    <Container>
      <Content>
        <img src={imgLogo} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}