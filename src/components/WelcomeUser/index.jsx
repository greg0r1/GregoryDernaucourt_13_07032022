//@ts-check

import { useState } from 'react'
import PropTypes from 'prop-types'

/**
 * It render a block to display user's infos or edit them
 * @param {Object} props
 * @param {String} props.firstNameUser
 * @param {Function} props.setFirstName
 * @param {String} props.lastNameUser
 * @param {Function} props.setLastName
 * @param {Function} props.setSave
 * @returns {React.ReactElement}
 */
function WelcomeUser({
  firstNameUser,
  setFirstName,
  lastNameUser,
  setLastName,
  setSave,
}) {
  const [isEditing, setEditing] = useState(false)
  const [firstNameEdition, setFirstNameEdition] = useState(firstNameUser)
  const [lastNameEdition, setLastNameEdition] = useState(lastNameUser)

  function handleSubmit(e) {
    e.preventDefault()
    e.stopPropagation()
    setFirstName(firstNameEdition)
    setLastName(lastNameEdition)
    setEditing(false)
  }
  function handleCancel(e) {
    e.preventDefault()
    e.stopPropagation()
    setFirstNameEdition(firstNameUser)
    setLastNameEdition(lastNameUser)
    setEditing(false)
  }

  return (
    <header className="header">
      <h1>
        Welcome back
        <br />
        {isEditing ? (
          <div>
            <input
              type="text"
              name="firstName"
              placeholder={firstNameEdition}
              value={firstNameEdition}
              onChange={(e) => setFirstNameEdition(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              placeholder={lastNameEdition}
              value={lastNameEdition}
              onChange={(e) => setLastNameEdition(e.target.value)}
            />
          </div>
        ) : (
          <span>{`${firstNameUser} ${lastNameUser}`}</span>
        )}
      </h1>
      {isEditing ? (
        <div>
          <button
            className="save-button"
            onClick={(e) => {
              setSave(true)
              handleSubmit(e)
            }}
          >
            Save
          </button>
          <button
            className="cancel-button"
            onClick={(e) => {
              setEditing(false)
              setSave(false)
              handleCancel(e)
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="edit-button"
          onClick={() => {
            setEditing(true)
          }}
        >
          Edit Name
        </button>
      )}
    </header>
  )
}

export default WelcomeUser

WelcomeUser.propType = {
  firstNameUser: PropTypes.string,
  setFirstName: PropTypes.func,
  lastNameUser: PropTypes.string,
  setLastName: PropTypes.func,
  setSave: PropTypes.func,
}

WelcomeUser.defaultProps = {
  firstNameUser: 'firstNameUser',
  lastNameUser: 'lastNameUser',
}
