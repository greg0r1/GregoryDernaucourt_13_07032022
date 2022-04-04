import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProfilePost, fetchProfilePut } from '../../features/userProfile'
import { useSelector, useStore } from 'react-redux'
import { selectToken } from '../../utils/selectors'
import WelcomeUser from '../../components/WelcomeUser'
import Accounts from '../../components/Accounts'
import Spinner from '../../components/Spinner'
import { selectProfile } from '../../utils/selectors'

function Profile() {
  const store = useStore()
  const token = useSelector(selectToken)
  const profile = useSelector(selectProfile) || null
  const firstNameUser = profile.data?.body.firstName
  const lastNameUser = profile.data?.body.lastName
  const [firstName, setFirstName] = useState(firstNameUser)
  const [lastName, setLastName] = useState(lastNameUser)

  const [save, setSave] = useState(false)

  useEffect(() => {
    save && fetchProfilePut(store, token.data.body.token, firstName, lastName)
    if (token.status === 'resolved') {
      fetchProfilePost(store, token.data.body.token)
    }
  }, [firstName, lastName, store, token, save])

  if (token.status === 'void' && profile.status === 'void') {
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
  } else {
    if (profile.data?.status !== 200) {
      return <Spinner />
    }
    return (
      <main className="main bg-dark">
        <WelcomeUser
          firstNameUser={firstNameUser}
          setFirstName={setFirstName}
          lastNameUser={lastNameUser}
          setLastName={setLastName}
          setSave={setSave}
        />
        <Accounts />
      </main>
    )
  }
}

export default Profile
