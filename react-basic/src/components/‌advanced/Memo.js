import { memo, useState } from "react";

// const Son = () => {
//   console.log("son 组件渲染了");
//   return <div>this is son</div>;
// };

const MemoSon = memo(({ count }) => {
  console.log("MemoSon 组件渲染了");
  return <div>this is son:{count}</div>;
});

const Memo = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      count:{count} <button onClick={() => setCount(count + 1)}>+</button>
      <MemoSon count={count} />
    </div>
  );
};

export default Memo;
