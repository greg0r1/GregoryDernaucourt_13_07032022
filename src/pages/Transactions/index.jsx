import Account from '../../components/Account'
import Transaction from '../../components/Transaction'
import { transactions } from '../../mocksData'
import { selectToken } from '../../utils/selectors'
import { useSelector, useStore } from 'react-redux'
import { Link } from 'react-router-dom'

function TransactionsList() {
  const items = transactions
  const token = useSelector(selectToken)
  const store = useStore()
  const stateTitle = store.getState().account.data.title
  const stateAmount = store.getState().account.data.amount
  const stateBalanceType = store.getState().account.data.balanceType

  return (
    <main className="transactions main bg-dark">
      {token.status === 'resolved' ? (
        <>
          <Account
            title={stateTitle}
            amount={stateAmount}
            balanceType={stateBalanceType}
          ></Account>{' '}
          <section className="transactionsList">
            {items.map((item) => (
              <Transaction
                key={item.id}
                date={item.date}
                description={item.description}
                amount={item.amount}
                balance={item.balance}
                transactionType={item.details.transactionType}
                category={item.details.Category}
                note={item.details.Note}
              />
            ))}
          </section>
        </>
      ) : (
        <>
          <div
            style={{
              color: '#FFF',
              margin: 'auto',
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <span>Oups, il y a un problème</span>
            <Link to={'/'} style={{ color: '#FFF', textDecoration: 'initial' }}>
              Page d'accueil
            </Link>
          </div>
        </>
      )}
    </main>
  )
}

export default TransactionsList
