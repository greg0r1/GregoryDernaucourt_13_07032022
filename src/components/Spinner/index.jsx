//@ts-check

import spinner from '../../assets/images/spinner.svg'

/**
 *
 *
 * @returns {React.ReactElement}
 */
function Spinner() {
  return (
    <div className="spinnerContainer">
      <img src={spinner} width="50" alt="" />
    </div>
  )
}

export default Spinner
