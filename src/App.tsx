import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionsModal';
import { TransactionsProvider } from './hooks/useTransactions';
import Modal from 'react-modal';
import { TransactionModalProvider } from './hooks/useOnOpenNewTransactionModal';

Modal.setAppElement('#root');// Importante pasa acessibilidade

// Quando usamos o export dessa maneira temos a segurança do nome da função 
export function App() {
  return (
    <TransactionsProvider>
      <TransactionModalProvider>

        <GlobalStyle />

        <Header />

        <Dashboard />

        <NewTransactionModal />

      </TransactionModalProvider>
    </TransactionsProvider>
  );
}
