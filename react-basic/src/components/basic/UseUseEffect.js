import { useEffect, useState } from "react";

const URL= "https://geek.itheima.net/v1_0/channels"

const UseUseEffect = () => {
    const [list, setList] = useState([])
    // 不加[]会一直执行
    useEffect(() => {
        async function getList() {
            const res = await fetch(URL)
            const jsonRes = await res.json()
            console.log('jsonRes----', jsonRes)
            setList(jsonRes.data.channels)
        }
        getList()
        // 清除副作用(组件卸载时触发)
        // return () => {
        // }
    },[])
    return (
        <div>
            <ul>
                {list.map(item => <li key={item.id}>{ item.name}</li>)}
            </ul>
        </div>
    );
}

export default UseUseEffect;
