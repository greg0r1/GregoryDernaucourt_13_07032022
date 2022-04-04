import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 *
 * @param {Object} props
 * @param {Object} props.activeLink
 * @returns {React.ReactElement}
 */
function Account({ activeLink, title, amount, balanceType }) {
  const activeLinkButton = activeLink

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{balanceType}</p>
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

Account.propType = {
  activeLink: PropTypes.bool,
}

Account.defaultProps = {
  activeLink: false,
}
