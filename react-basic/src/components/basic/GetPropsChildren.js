// 获取children

const Son = (props) => {
    console.log(props)
    return <div>this is son,{ props.children }</div>
}

const GetPropsChildren = () => {
    return (
        <div>
            <Son>
                <span>this is span123</span>
            </Son>
        </div>
       
    )
}

export default GetPropsChildren;