import { useTransactionModal } from "../../hooks/useTransactionModal";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable(){
  
  //PARA CONSUMIR O CONTEXTO
  const {transactions} = useTransactions();
  const {handleOpenDeleteTransactionModal} = useTransactionModal();
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>TITULO</th>
            <th>VALOR</th>
            <th>CATEGORIA</th>
            <th>DATA</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction =>{
            return(
              <tr key={transaction.id}>

                <td>{transaction.title}</td>

                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR',
                  {style: 'currency', //FORMATO DE DINHEIRO
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>

                <td>{transaction.category}</td>

                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt) //FORMATO DE CALENDÁRIO
                  )}
                </td>

                <td>
                <button type="button" onClick={handleOpenDeleteTransactionModal} disabled>
                  EXCLUIR
                </button>
                </td>

              </tr>
            )
          })}
          
        </tbody>
      </table>
    </Container>
  );
}