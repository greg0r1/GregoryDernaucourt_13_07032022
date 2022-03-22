import Account from '../../components/Account'
import Transaction from '../../components/Transaction'

function Transactions() {
  return (
    <main className="transactions main bg-dark">
      <Account activeLink={false} />
      <section className="transactionsList">
        <Transaction />
      </section>
    </main>
  )
}

export default Transactions
