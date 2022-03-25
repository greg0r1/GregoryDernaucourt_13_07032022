import { Link, NavLink } from 'react-router-dom'
import argentBankLogo from '../../assets/images/argentBankLogo.png'
import signoutIcon from '../../assets/images/signout.svg'
import signinIcon from '../../assets/images/signin.svg'
import personCircle from '../../assets/images/person-circle.svg'
import { useSelector, useStore } from 'react-redux'
import { selectToken, selectProfile } from '../../utils/selectors'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

/**
 * It renders a nav bar with a logo, a sign in/out button, and a profile button.
 * @returns A nav bar with a logo, a sign in/out button, and a profile button.
 */
function Nav() {
  const [isLogged, setIsLogged] = useState(false)
  const profile = useSelector(selectProfile) || null
  const firstNameUser = profile.data?.body.firstName
  const tokenState = useSelector(selectToken)
  const dispatch = useDispatch()
  const store = useStore()

  useEffect(() => {
    const tokenData = tokenState.data
    tokenData?.status !== 400 && tokenData?.status === 200
      ? setIsLogged(true)
      : setIsLogged(false)
    return
  }, [tokenState, isLogged, store])

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to={'./'}>
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLogged && (
          <NavLink className="main-nav-item" to={'/profile'}>
            <img className="icon" src={personCircle} alt="" />
            <span>{firstNameUser}</span>
          </NavLink>
        )}
        <NavLink
          onClick={
            isLogged &&
            (() => {
              dispatch({ type: 'token/logout' })
              dispatch({ type: 'profile/logout' })
            })
          }
          className="main-nav-item"
          to={isLogged ? '/' : '/login'}
        >
          <img
            className="icon"
            src={isLogged ? signoutIcon : signinIcon}
            alt=""
          />
          <span>{isLogged ? 'Sign Out' : 'Sign In'}</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
