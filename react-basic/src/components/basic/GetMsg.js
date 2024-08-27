// 子组件和父组件通信
const Son = ({onGetSon}) => {
    return (<div onClick={()=>onGetSon('say your name')}>this is son</div>)
}
  
const GetMsg = () => {
    const sayContent = (content)=>{
      console.log(content);
    }
    return (
      <div>
        <Son onGetSon={ sayContent } />
      </div>
    );
}
  
export default GetMsg;
  