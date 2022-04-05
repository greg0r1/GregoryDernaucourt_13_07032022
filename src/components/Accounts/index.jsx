import { accounts } from '../../mocksData'
import Account from '../Account'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

/**
 * List of user's accounts
 * @returns {React.ReactElement}
 */
function Accounts() {
  const items = accounts
  const dispatch = useDispatch()

  function handleClick(item) {
    dispatch({
      type: 'SET_ACCOUNT',
      payload: {
        title: item.title,
        amount: item.amount,
        balanceType: item.balanceType,
      },
    })
  }

  return (
    <div className="accounts">
      <h2 className="sr-only">Accounts</h2>
      {items.map((item) => (
        <Account
          key={item.id}
          title={item.title}
          amount={item.amount}
          balanceType={item.balanceType}
        >
          <div className="account-content-wrapper cta">
            <Link to={'/transactions'} onClick={() => handleClick(item)}>
              <button className="transaction-button">View transactions</button>
            </Link>
          </div>
        </Account>
      ))}
    </div>
  )
}

export default Accounts
