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
  isNewTransactionModalOpen: IModal;
}

// Cria o contexto
const TransactionModalContext = createContext<ITransactionModalContextData>({} as ITransactionModalContextData);

// Função principal do contexto
export function TransactionModalProvider({ children }: ITransactionModalProvider) {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<IModal>(false);

  async function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  async function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionModalContext.Provider value={{ handleCloseNewTransactionModal, handleOpenNewTransactionModal, isNewTransactionModalOpen }}>
      {children}
    </TransactionModalContext.Provider>
  )
}

// Possibilita usar o contexto dentro de hook criado por mim
export function useTransactionModal() {
  const context = useContext(TransactionModalContext);
  return context;
}