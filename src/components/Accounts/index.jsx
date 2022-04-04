import { accounts } from '../../mocksData'
import Account from '../Account'

/**
 * List of user's accounts
 * @returns {React.ReactElement}
 */
function Accounts() {
  const items = accounts

  return (
    <div className="accounts">
      <h2 className="sr-only">Accounts</h2>
      {items.map((item) => (
        <Account
          activeLink={true}
          key={item.id}
          title={item.title}
          amount={item.amount}
          balanceType={item.balanceType}
        />
      ))}
    </div>
  )
}

export default Accounts
