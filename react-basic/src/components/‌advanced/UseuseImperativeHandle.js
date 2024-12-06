import { forwardRef, useImperativeHandle, useRef } from "react";

const ForwardRef = forwardRef((props, ref) => {
  const sonRef = useRef(null);
  const focusHandler = () => {
    sonRef.current.focus();
  };
  // 暴露出去
  useImperativeHandle(ref, () => {
    return { focusHandler };
  });
  return <input type="text" ref={sonRef} />;
});

const UseuseImperativeHandle = () => {
  const sonRef = useRef(null);
  const showRef = () => {
    console.log(sonRef);
    sonRef.current.focusHandler();
  };
  return (
    <>
      <ForwardRef ref={sonRef} />
      <button onClick={showRef}>focus</button>
    </>
  );
};

export default UseuseImperativeHandle;
