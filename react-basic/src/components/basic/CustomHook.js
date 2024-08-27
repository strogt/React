import { useState } from "react";

// 封装hook思路
// 1.声明一个以use打头的函数
// 2.在函数体内封装可复用的逻辑(只要是可复用的逻辑)
// 3.把组件中用到的状态或者回调return出达(以对象或者数组)
// 4.在哪个组件中要用到这个逻辑，就执行这个函数，解构出来状态和回调进行使用


const useToggle = () => {
    const [value, setValue] = useState(true)
    const toggle = () => { setValue(!value) }
    return [
        value,
        toggle
    ]
}

const CustomHook = () => {
    const [value,toggle] = useToggle()
    return (
        <div>
            {value && <div>this is div</div>}
            <button onClick={toggle}>toggle</button>
        </div>
    );
}

export default CustomHook;
