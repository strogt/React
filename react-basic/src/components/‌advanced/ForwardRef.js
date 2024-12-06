import { forwardRef, useRef } from "react";

const ForwardSon = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

const ForwardRef = () => {
  const sonRef = useRef(null);
  const showRef = () => {
    console.log(sonRef);
    sonRef.current.focus();
  };
  return (
    <>
      <ForwardSon ref={sonRef} />
      <button onClick={showRef}>focus</button>
    </>
  );
};

export default ForwardRef;
