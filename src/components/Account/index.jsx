//@ts-check

import PropTypes from 'prop-types'

/**
 * It render a block with essential infos
 * @param {Object} props
 * @returns {React.ReactElement}
 */
function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{props.amount}</p>
        <p className="account-amount-description">{props.balanceType}</p>
      </div>
      {props.children}
      {/* Children: Insert a button to link to transactions list */}
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
