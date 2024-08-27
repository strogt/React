// 跨层传递
import { createContext, useContext } from "react"
 
const MsgContext = createContext()

const B = () => {
  const msg = useContext(MsgContext)
  console.log('msg----',msg)
  return <div>this is B compent,{ msg}</div>
}

const A = () => {
  return (
    <div>
      this is A compent
      <B />
    </div>
  )
}

const UseUseContext = () => {
  const msg = 'this is msg'
  return (
    <div>
      <MsgContext.Provider value={msg}>
        <A  />
      </MsgContext.Provider>
    </div>
  );
}

export default UseUseContext;
