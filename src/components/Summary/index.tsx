import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import imgIncome from '../../assets/income.svg';
import imgOutcome from '../../assets/outcome.svg';
import imgTotal from '../../assets/total.svg';

export function Summary(){

  //PARA CONSUMIR O CONTEXTO
  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transaction) =>{
    if (transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else{
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  },{
    deposits:0,
    withdraws:0,
    total:0,
  })
  return(
   <Container>
     <div>
       <header>
         <p>Entradas</p>
         <img src={imgIncome} alt="Entradas"/>
       </header>
       <strong>
          {new Intl.NumberFormat('pt-BR',
            {style: 'currency', //FORMATO DE DINHEIRO
              currency: 'BRL'
            }).format(summary.deposits)
          }
        </strong>
     </div>
     <div>
       <header>
         <p>Saidas</p>
         <img src={imgOutcome} alt="Saidass"/>
       </header>
       <strong>-
          {new Intl.NumberFormat('pt-BR',
            {style: 'currency', //FORMATO DE DINHEIRO
              currency: 'BRL'
            }).format(summary.withdraws)
          }
        </strong>
     </div>
     <div className='highlight-background'>
       <header>
         <p>Total</p>
         <img src={imgTotal} alt="Totals"/>
       </header>
       <strong>
          {new Intl.NumberFormat('pt-BR',
            {style: 'currency', //FORMATO DE DINHEIRO
              currency: 'BRL'
            }).format(summary.total)
          }
        </strong>
     </div>
   </Container>
  );
}