import { useSelector, useDispatch } from 'react-redux'

// 导入actionCreater
import { inscrement, decrement, addToNum } from '../../store/modules/counterStore';


const UseReduxBasic = () => {
    // 导入转态数据
    const { count } = useSelector(state => state.counter)
    // 导入链接react组件和redux方法
    const dispatch = useDispatch()
    return (
        <div>
            <p>this is redux</p>
            <div>
                <button onClick={ () => dispatch(decrement()) }>-</button>
                    {count} 
                <button onClick={ () => dispatch(inscrement()) }>+</button>
                <button onClick={ () => dispatch(addToNum(10)) }>+10</button>
                <button onClick={ () => dispatch(addToNum(20)) }>+20</button>
            </div>
        </div>
    );
}

export default UseReduxBasic;
