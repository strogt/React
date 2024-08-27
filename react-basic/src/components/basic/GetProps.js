// 父传子

const Son = (props) => {
    return <div>this is son ,{ props.say }</div>
}

const GetProps = () => {
    const say = "this si props"
    return (
        <div>
            <Son say ={ say } />
        </div>
       
    )
}

export default GetProps;