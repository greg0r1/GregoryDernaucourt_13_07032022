import { useState } from 'react'
import arrowIcon from '../../assets/images/arrow.svg'
import pencilFillIcon from '../../assets/images/pencil-fill.svg'

function Transaction() {
  const [display, setDisplay] = useState(false)

  return (
    <div className="transaction">
      <div className="transaction_arrow">
        <img
          className={display ? 'arrow down' : 'arrow up'}
          src={arrowIcon}
          alt=""
          onClick={
            display === true
              ? () => setDisplay(() => false)
              : () => setDisplay(() => true)
          }
        />
      </div>
      <div className="transaction_content">
        <div className="resume">
          <span>June 20th, 2020</span>
          <span>Golden Sun Bakery</span>
          <span>$5.00</span>
          <span>$2082.00</span>
        </div>
        {display && (
          <div className="details">
            <ul>
              <li>
                <span>Transaction Type: </span>
                <span>Electronic</span>
              </li>
              <li>
                <span>Category: </span>
                <span>Food </span>
                <span>
                  <img src={pencilFillIcon} alt="" />
                </span>
              </li>
              <li>
                <span>Note: </span>
                <span>
                  <img src={pencilFillIcon} alt="" />
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Transaction
