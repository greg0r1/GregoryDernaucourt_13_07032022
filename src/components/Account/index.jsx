import { Link } from 'react-router-dom'

function Account({ activeLink }) {
  const activeLinkButton = activeLink

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      {activeLinkButton && (
        <div className="account-content-wrapper cta">
          <Link to={'/transactions'}>
            <button className="transaction-button">View transactions</button>
          </Link>
        </div>
      )}
    </section>
  )
}

export default Account
