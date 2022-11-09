import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ordered, restocked} from './iceCreamSlice'

const IceCreameView = () => {
    const [value, setValue] = useState(1)
    const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Number of Ice Creams - {numberOfIceCream}</h2>
        <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
        <input type="number" value={value} onChange={e => setValue(parseInt(e.target.value))}/>
          <button onClick={() => dispatch(restocked(value))}>Restock Ice creams</button>
    </div>
  )
}

export default IceCreameView