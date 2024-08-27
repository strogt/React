// 表单受控绑定

import { useState } from "react"

const InpntBindValue = () => {
    const [value, setvalue] = useState('')
    return (
        <div>
            <input type="text" value={value} onChange={(e) => setvalue(e.target.value)} />
            <p>{value}</p>
        </div>
       
    )
}

export default InpntBindValue;