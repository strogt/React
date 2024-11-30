import * as echarts from 'echarts';
import { useEffect, useRef } from "react";

const BarChart = ({ title }) => {
  const charRef = useRef(null)  
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(charRef.current);
    // 绘制图表
    myChart.setOption({
      title: {
        text: title,
      },
      tooltip: {},
      xAxis: {
        data: ["react", "angle", "vue",],
      },
      yAxis: {},
      series: [
        {
          type: "bar",
          data: [ 90, 70, 40],
        },
      ],
    });
  }, []);
    return <div ref={charRef} style={{ width: 750,height:500}}></div>;
};

export default BarChart;
