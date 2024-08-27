import { NavBar, DatePicker, Input, Button } from "antd-mobile";
import Icon from "@/components/Icon";
import "./index.scss";
import classNames from "classnames";
import { billListData } from "@/contants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { addBillList } from "@/store/modules/billStore";

const New = () => {
    const navigate = useNavigate();
    // 收入支出控制
    const [billType, setBillType] = useState('pay')  // pay-支出 income-收入

    // 金额输入控制
    const [money, setMoney] = useState('')
    const moneyChang = (value) => {
        setMoney(value)
    }
    
    // 消费类型控制
    const [useFor, setUseFor] = useState(billListData[billType][0]['list'][0]['type'])
    
    const { billList } = useSelector(state=>state.bill)
    const dispatch = useDispatch()
    // 保存
    const saveBill = () => {
        let data = {
            type: billType,
            money: billType === 'pay' ? -money : money,
            data: dayjs( new Date()).format('YYMM-MM-DD HH:mm:ss'),
            useFor: useFor,
            id: billList.length
        }
        dispatch(addBillList(data))
    }
    return (
        <div className="keepAcoounts">
            <NavBar className="nav" onBack={() => navigate(-1)}>记一笔</NavBar>
            
            <div className="header">
                <div className="kaType">
                    <Button shape="rounded" className={classNames( billType === 'pay' ? 'selected' : '')} onClick={ () => setBillType('pay') }>支出</Button>
                    <Button shape="rounded" className={classNames( billType === 'income' ? 'selected' : '')} onClick={ () => setBillType('income') }>收入</Button>
                </div>

                <div className="kaFormWraooer">
                    <div className="kaForm">
                        <div className="date">
                            <Icon type={ useFor } className="icon"></Icon>
                            <span className="text">{'今天'}</span>
                            <DatePicker className="kaDate" title="记账日期" max={new Date()}></DatePicker>
                        </div>
                        <div className="kaInput">
                            <Input className="input" placeholder="0.00" type="number" value={money} onChange={moneyChang}></Input>
                            <span className="iconYuan">￥</span>
                        </div>
                    </div>
                </div>
                
                <div className="kaTypeList">
                    {
                        billListData[billType].map(item => {
                            return (
                                <div className="kaType" key={item.type}>
                                    <div className="title">{ item.name }</div>
                                    <div className="list">
                                        {
                                            item.list.map(item => {
                                                return (
                                                    <div className={classNames('item', useFor === item.type && 'selected')} key={item.type} onClick={()=>setUseFor(item.type)}>
                                                        <div className="icon">
                                                            <Icon type={item.type}></Icon>
                                                        </div>
                                                        <div className="text">{ item.name}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="btns">
                <Button className="btn save" onClick={saveBill}>保存</Button>
            </div>
        </div>
  );
};

export default New;
