import { createContext, ReactNode, useContext, useState } from "react";

type IModal = boolean

// Interface define que qualquer objeto REact pode ser recebido como children
interface ITransactionModalProvider {
  children: ReactNode;
}

// Interface define as informações que serão passadas dentro do contexto
interface ITransactionModalContextData {
  handleOpenNewTransactionModal: () => Promise<void>;
  handleCloseNewTransactionModal: () => Promise<void>;
  handleOpenDeleteTransactionModal: () => Promise<void>;
  handleCloseDeleteTransactionModal: () => Promise<void>;
  isNewTransactionModalOpen: IModal;
  isDeleteTransactionModalOpen: IModal;
}

// Cria o contexto
const TransactionModalContext = createContext<ITransactionModalContextData>({} as ITransactionModalContextData);

// Função principal do contexto
export function TransactionModalProvider({ children }: ITransactionModalProvider) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<IModal>(false);
  const [isDeleteTransactionModalOpen, setIsDeleteTransactionModalOpen] = useState<IModal>(false);

  async function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  async function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  async function handleOpenDeleteTransactionModal() {
    setIsDeleteTransactionModalOpen(true);
  }

  async function handleCloseDeleteTransactionModal() {
    setIsDeleteTransactionModalOpen(false);
  }

  return (
    <TransactionModalContext.Provider value={{
      handleOpenNewTransactionModal,
      handleCloseNewTransactionModal,
      handleOpenDeleteTransactionModal,
      handleCloseDeleteTransactionModal,
      isNewTransactionModalOpen,
      isDeleteTransactionModalOpen 
      }}>
      {children}
    </TransactionModalContext.Provider>
  )
}

// Possibilita usar o contexto dentro de hook criado por mim
export function useTransactionModal() {
  const context = useContext(TransactionModalContext);
  return context;
}