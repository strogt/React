// 获取Dom

import { useRef } from "react";

// 1.useRef生成对象 绑定到dom标签上
// 2.dom可用时，ref.current获取dom
// 渲染完毕后dom生成后才可用

const GetDom = () => {
    const inputRef = useRef(null)
    const getDom = () => {
        // console.log(inputRef.current)
        console.dir(inputRef.current)
    }
    return (
        <div>
            <input type="text" ref={ inputRef } />
            <button onClick={ getDom }>获取Dom</button>
        </div>
       
    )
}

export default GetDom;