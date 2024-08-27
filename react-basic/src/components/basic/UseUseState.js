// useState

import { useState } from "react"
const UseUseState = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <p>{ value }</p>
            <button onClick={()=>setValue(1)}>change Num</button>
        </div>
       
    )
}

export default UseUseState;