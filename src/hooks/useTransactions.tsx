import {createContext, ReactNode, useContext, useEffect, useState} from 'react'; 
import { api } from '../services/api';

interface Transaction{ // SERVE PARA TIPAR O ARREI -- É ISSO QUE UMA TRANSACTION É
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; // AQUI EU OMITO APENAS DOIS ELEMENTOS QUE SÃO CRIADOS AUTOMATICAMENTE  

interface TransactionsProviderProps{ // AQUI TIPAMOS AS PROPS DE TransactionsProvider PARA RECEBER "FILHOS"
  children: ReactNode; // Pode conter qualquer elemento válido para o React
}

interface TransactionsContextData{ // AQUI TIPAMOS O QUE SERÁ PASSADO DENTRO DO CONTEXTO
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions]= useState<Transaction[]>([]);

  useEffect(() =>{
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});
    const {transaction} = response.data;

    setTransactions([...transactions, transaction]);
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext);
  return context;
}