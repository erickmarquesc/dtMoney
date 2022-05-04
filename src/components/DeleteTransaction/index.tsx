import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal';
import imgClose from '../../assets/close.svg';
import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';
import { useTransactionModal } from '../../hooks/useTransactionModal';

export function DeleteTransactionModal(){
  const {isDeleteTransactionModalOpen,handleCloseDeleteTransactionModal} = useTransactionModal();
  const {transactions} = useTransactions();
    return(
        <Modal 
          isOpen={isDeleteTransactionModalOpen}
          onRequestClose={handleCloseDeleteTransactionModal}
          overlayClassName='react-modal-overlay'
          className='react-modal-content'
        >
          <button 
            type='button' 
            onClick={handleCloseDeleteTransactionModal}
            className='react-modal-close'
          >
            <img src={imgClose} alt='Fechar modal'/>
          </button>
          
          Em construção
          
        </Modal>
      );
}