import { useEffect, useState } from 'react'
import { fetchOrUpdatetoken } from '../../features/loginUser'
import { useSelector, useStore } from 'react-redux'
import { selectToken } from '../../utils/selectors'
import SignIn from '../../components/SignIn'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
  const store = useStore()
  const [email, setEmail] = useState(
    localStorage.getItem('ArgentBank_email') || ''
  )
  const [passwd, setPasswd] = useState(
    localStorage.getItem('ArgentBank_password') || ''
  )
  const [submit, setSubmit] = useState(false)
  const [identification, setIdentification] = useState()
  const [localStorageChecked, setLocalStorageChecked] = useState()
  const token = useSelector(selectToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (submit) fetchOrUpdatetoken(store, email, passwd)
    if (token.data?.status === 400) {
      setIdentification(false)
      setSubmit(false)
    }
    if (token.data?.status === 200) {
      setSubmit(true)
      setIdentification(true)
    }
    if (localStorageChecked && submit) {
      localStorage.setItem('ArgentBank_email', email)
      localStorage.setItem('ArgentBank_password', passwd)
    }
    if (submit && identification) navigate('/profile')
    return
  }, [
    token,
    store,
    email,
    passwd,
    submit,
    identification,
    navigate,
    localStorageChecked,
  ])

  if (token.status === 'rejected') {
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <span>Oups, il y a un problème</span>
        <Link to={'/'}>Page d'accueil</Link>
      </div>
    )
  }

  return (
    <main className="main bg-dark">
      <SignIn
        setEmail={setEmail}
        setPasswd={setPasswd}
        submit={submit}
        setSubmit={setSubmit}
        setLocalStorageChecked={setLocalStorageChecked}
        identification={identification}
      />
    </main>
  )
}

export default Login
