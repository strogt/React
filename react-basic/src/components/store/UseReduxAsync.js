import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux"
import { fetchChannelList } from "../../store/modules/channelStrore"


const UseReduxAsync = () => {
    // 导入转态数据
    const { channelList } = useSelector(state => state.channel)
    // 导入链接react组件和redux方法
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchChannelList)
    },[dispatch])
    // dispatch(fetchChannelList)
    return (
        <div>
            <ul>
                {channelList.map(item => <li key={item.id}>{ item.name }</li>)}
            </ul>
        </div>
    );
}

export default UseReduxAsync;
