import { useMemo, useState } from "react";

const sum = (n) => {
  console.log("计算执行了");
  if (n < 3) return 3;
  return sum(n - 2) + sum(n - 1);
};

const UseuseMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const result = useMemo(() => {
    return sum(count1);
  }, [count1]);
  return (
    <div>
      count1:{count1} <button onClick={() => setCount1(count1 + 1)}>+</button>
      <hr />
      count2:{count2} <button onClick={() => setCount2(count2 + 1)}>+</button>
      <hr />
      求和：{result}
    </div>
  );
};

export default UseuseMemo;
