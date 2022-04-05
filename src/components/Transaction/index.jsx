import { useState } from 'react'
import arrowIcon from '../../assets/images/arrow.svg'
import pencilFillIcon from '../../assets/images/pencil-fill.svg'

function Transaction({
  date,
  description,
  amount,
  balance,
  transactionType,
  category,
  note,
}) {
  const [displayDetails, setDisplayDetails] = useState(false)
  const [isEditingCategory, setEdtitingCategory] = useState(false)
  const [isEditingNote, setEditingNote] = useState(false)

  return (
    <div className="transaction">
      <div
        className="transaction_arrow"
        onClick={
          displayDetails === true
            ? () => setDisplayDetails(() => false)
            : () => setDisplayDetails(() => true)
        }
      >
        <img
          className={displayDetails ? 'arrow down' : 'arrow up'}
          src={arrowIcon}
          alt=""
        />
      </div>
      <div className="transaction_content">
        <div className="resume">
          <span>{date}</span>
          <span>{description}</span>
          <span>{amount}</span>
          <span>{balance}</span>
        </div>
        {displayDetails && (
          <div className="details">
            <ul>
              <li>
                <span>Transaction Type: </span>
                <span>{transactionType}</span>
              </li>
              <li>
                <span>Category: </span>
                {!isEditingCategory ? (
                  <span>{category} </span>
                ) : (
                  <input type="text" placeholder={category}></input>
                )}
                <span>
                  {!isEditingCategory ? (
                    <img
                      src={pencilFillIcon}
                      alt=""
                      onClick={() => setEdtitingCategory(true)}
                    />
                  ) : (
                    <button
                      type="submit"
                      onClick={() => setEdtitingCategory(false)}
                    >
                      Submit
                    </button>
                  )}
                </span>
              </li>
              <li>
                <span>Note: </span>
                {!isEditingNote ? <span>{note}</span> : <textarea></textarea>}
                <span>
                  {!isEditingNote ? (
                    <img
                      src={pencilFillIcon}
                      alt=""
                      onClick={() => setEditingNote(true)}
                    />
                  ) : (
                    <button type="submit" onClick={() => setEditingNote(false)}>
                      Submit
                    </button>
                  )}
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
