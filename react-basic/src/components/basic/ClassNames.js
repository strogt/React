/*
    依赖安装：npm i classnames
*/
import classNames from "classnames"
import "../index.css"
import { useState } from "react"

const list = [
    { id: 0, type:"hot", name:'最热'},
    { id: 1, type:"time", name:'最新'},
]

const ClassNames = () => {
    const [type, setType] = useState('hot')
    const chagneType = (type) => {
        setType(type)
    }
    return (
        <div>
            <ul>
                {list.map(item => <li className={classNames('defalut',{active: type === item.type})} onClick={()=>chagneType(item.type)} key={item.id}>{ item.name}</li>)}
            </ul>
        </div>
    )
}

export default ClassNames;