import imgLogo from '../../assets/logo.svg';
import { useTransactionModal } from '../../hooks/useTransactionModal';
import { Container, Content } from './styles';

/* O Header esta recebendo a informação do estado para verificar se é True | False */
export function Header(){
  
  const {handleOpenNewTransactionModal} = useTransactionModal();

  return(
    <Container>
      <Content>
        <img src={imgLogo} alt="dt money"/>
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}