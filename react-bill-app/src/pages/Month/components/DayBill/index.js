import classNames from "classnames"
import './index.scss'
import { useMemo, useState } from "react"
import { billTypeToName } from "@/contants"
import Icon from "@/components/Icon"

const DailyBill = ({ date, billList }) => { 
    const [visible,setVisibal] = useState(false)
    // 统计
    const dayResult = useMemo(() => {
        // 支出
        const pay = billList.filter(item => item.type === 'pay').reduce((a, c) => a + Number(c.money), 0)
        // 收入
        const income = billList.filter(item=> item.type === 'income').reduce((a,c)=> a + Number(c.money),0)
        return {
            pay,
            income,
            total: pay + income,
        }
    }, [billList])
    console.log("billList----",billList)
    return (
        <div className={classNames('dailyBill')}>
            <div className="header">
                <div className='dateIcon'>
                    <span className="date">{date}</span>
                    <span className={classNames('arrow', visible && 'expand')} onClick={()=>{setVisibal(!visible)}}></span>
                </div>
                <div className="oneLineOverview">
                    <div className="pay">
                        <span className="type">支出</span>
                        <span className="money">{dayResult.pay.toFixed(2)}</span>
                    </div>
                    <div className="income">
                        <span className="type">收入</span>
                        <span className="money">{dayResult.income.toFixed(2)}</span>
                    </div>
                    <div className="balance">
                        <span className="type">结余</span>
                        <span className="money">{dayResult.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            {/* 单日列表 */}
            <div className="billList" style={{ display: visible? 'block':'none'}}>
                { billList.map(item => {
                    return(
                        <div className="bill" key={item.id}>
                            <div className="detail">
                                <div className="billType"><Icon type={item.useFor} />{billTypeToName[item.useFor]}</div>
                            </div>
                            <div className={classNames('money', item.type)}>{ Number(item.money).toFixed(2)}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default DailyBill