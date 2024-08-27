import { NavBar, DatePicker } from "antd-mobile"
import "./index.scss"
import { useEffect, useMemo, useState } from "react"
import classNames from "classnames"
import dayjs from "dayjs"
import { useSelector } from "react-redux"
import _ from "lodash"
import DailyBill from "./components/DayBill"


const Month = () => {
    // 按月做数据处理
    const billList = useSelector(state=>state.bill.billList)
    const monthGroup = useMemo(() => {
        return _.groupBy(billList, item=> dayjs(item.date).format("YYYY-MM"))
    }, [billList])


    // 弹窗
    const [dateVisibal, setDateVisibal] = useState(false)

    // 时间控制
    const [currentDate, setCurrenDate] = useState(() => {
        return dayjs(new Date()).format("YYYY-MM")
    })

    
    const [currentMonthList, setCurrentMonthList] = useState([])

    const monthResult = useMemo(() => {
        // 支出
        const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + Number(c.money), 0)
        // 收入
        const income = currentMonthList.filter(item=> item.type === 'income').reduce((a,c)=> a + Number(c.money),0)
        return {
            pay,
            income,
            total: pay + income,
        }
    },[currentMonthList])

    console.log(monthResult)

    const onConfirm = (data) => {
        setDateVisibal(false)
        // 其他逻辑
        const formatDate = dayjs(data).format("YYYY-MM")
        setCurrentMonthList(monthGroup[formatDate])
        setCurrenDate(formatDate)
    }

    // 初始化页面渲染
    useEffect(() => {
        if (monthGroup[currentDate]) {
            setCurrentMonthList(monthGroup[currentDate])
        }
    },[monthGroup,currentDate])
    
    // 当前月按日分组
    const dayGroup = useMemo(() => {
        const groupData = _.groupBy(currentMonthList, item => dayjs(item.date).format("YYYY-MM-DD"))
        const keys = Object.keys(groupData)
        return {
            groupData,
            keys
        }
    }, [currentMonthList])
    
    return (
        <div className="monthlyBill">
            <NavBar className="nav" backArrow={false}>
                月度收支
            </NavBar>
            <div className="content">
                <div className="header">
                    {/* 时间切换区域 */}
                    <div className="date" onClick={()=>setDateVisibal(true)}>
                        <span className="text">
                            {currentDate}月账单
                        </span>
                        <span className={classNames('arrow', dateVisibal && "expand")}></span>
                    </div>
                    {/* 统计区域 */}
                    <div className="twoLineOverview">
                        <div className="item">
                            <span className="money">{monthResult.pay.toFixed(2)}</span>
                            <span className="type">支出</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.income.toFixed(2)}</span>
                            <span className="type">收入</span>
                        </div>
                        <div className="item">
                            <span className="money">{monthResult.total.toFixed(2)}</span>
                            <span className="type">结余</span>
                        </div>
                    </div>
                    {/* 时间选择器 */}
                    <DatePicker
                        className="kaDate"
                        title="记账日期"
                        precision="month"
                        visible={dateVisibal}
                        max={new Date()}
                        onCancel={()=>setDateVisibal(false)}
                        onConfirm={onConfirm}
                        onClose={() => setDateVisibal(false)}
                    />
                </div>
            </div>
            {/* 单日列表统计 */}
            {
                dayGroup.keys.map(key => {
                    return <DailyBill date={key} billList={dayGroup["groupData"][key]} key={key}/>
                })
            }
        </div>
    )
}

export default Month