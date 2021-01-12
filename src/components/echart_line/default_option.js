
const BASIC_OPTION = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '2%',
    right: '2%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
        saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#3188C8',
        width: 1
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#3188C8',
        width: 1
      }
    }
  },
  axisPointer: {
    show: true,
    type: 'line',
    lineStyle: {
      color: '#3188C8',
      type: 'solid'
    }
  }
};
export default BASIC_OPTION
