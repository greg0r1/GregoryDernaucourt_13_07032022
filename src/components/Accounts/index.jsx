import Account from '../Account'

function Accounts() {
  return (
    <div className="accounts">
      <h2 className="sr-only">Accounts</h2>
      <Account activeLink={true} />
    </div>
  )
}

export default Accounts
