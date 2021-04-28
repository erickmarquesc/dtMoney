import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal';
import imgClose from '../../assets/close.svg';
import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';

interface InewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({isOpen, onRequestClose}:InewTransactionModalProps){
  
  const {createTransaction} = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault(); //Previne o comportamento default do submit 

    await createTransaction(
      {
        title,
        amount,
        category,
        type,
      })

      setTitle('');
      setAmount(0);
      setCategory('')
      setType('deposit');
      onRequestClose();
  }; 

  return(
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button 
        type='button' 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={imgClose} alt='Fechar modal'/>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder='Titulo'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type='button'
            onClick={() => {setType('deposit');}}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={imgIncome} alt='Entrada'/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type='button'
            onClick={() => {setType('withdraw');}}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={imgOutcome} alt='Entrada'/>
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type='submit' onClick={handleCreateNewTransaction}>
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}