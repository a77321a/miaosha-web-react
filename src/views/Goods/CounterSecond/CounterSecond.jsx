import React, { useEffect, useState } from 'react'

const CounterSecond = props => {
  let { seconds } = props
  const [time, setTime] = useState({
    day: 0,
    hour: '00',
    minute: '00',
    second: '00'
  })
  const [start, setStart] = useState(false)
  let timer = null
  useEffect(() => {
    let end_time = new Date(seconds).getTime(),
      sys_second = end_time - new Date().getTime()
    timer = setInterval(() => {
      //防止倒计时出现负数
      if (sys_second > 1000) {
        sys_second -= 1000
        let day = Math.floor(sys_second / 1000 / 3600 / 24)
        let hour = Math.floor((sys_second / 1000 / 3600) % 24)
        let minute = Math.floor((sys_second / 1000 / 60) % 60)
        let second = Math.floor((sys_second / 1000) % 60)
        let obj = {
          day: day,
          hour: hour < 10 ? '0' + hour : hour,
          minute: minute < 10 ? '0' + minute : minute,
          second: second < 10 ? '0' + second : second
        }
        setTime({ ...obj })
      } else {
        setStart(true)
        clearInterval(timer)
        //倒计时结束时触发父组件的方法
        //this.props.timeEnd();
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [time])
  const formatSecont = s => {}

  return (
    <span>
      {!start ? (
        <span>
          距开始：{time.day}天 {time.hour}:{time.minute}:{time.second}
        </span>
      ) : (
        '促销中'
      )}
    </span>
  )
}

export default CounterSecond
