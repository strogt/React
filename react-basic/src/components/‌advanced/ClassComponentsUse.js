import { Component, useState } from "react";

class CalssCmp extends Component {
  state = {
    count: 0,
  };

  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("组件挂载时");
    this.timer = setInterval(() => {
      console.log("定时器打开");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("组件销毁了");
    clearTimeout(this.timer);
  }

  render() {
    return <button onClick={this.setCount}>{this.state.count}</button>;
  }
}

const ClassComponentsUse = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <CalssCmp />}
      <hr />
      <button onClick={() => setShow(!show)}>isShow Class Cmp</button>
    </div>
  );
};

export default ClassComponentsUse;
