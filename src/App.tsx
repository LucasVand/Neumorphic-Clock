
import { useState } from 'react'
import './App.css'
import Bar from './Bar/Bar'
import Colon from './Colon/Colon'

function App() {
  const [date, setDate] = useState(new Date())

  setTimeout(() => {
    setDate(new Date())
  }, 1);





  const hour1 = () => {
    const h = date.getHours()
    const n = Number(h.toString()[1] == null ? 0 : h.toString()[0])
    return n
  }
  const hour2 = () => {
    const h = date.getHours()
    const n = Number(h.toString()[1] == null ? h.toString()[0] : h.toString()[1])
    return n
  }

  const minute1 = () => {
    const h = date.getMinutes()
    const n = Number(h.toString()[1] == null ? 0 : h.toString()[0])
    return n
  }

  const minute2 = () => {
    const h = date.getMinutes()
    const n = Number(h.toString()[1] == null ? h.toString()[0] : h.toString()[1])
    return n
  }

  const second1 = () => {
    const h = date.getSeconds()
    const n = Number(h.toString()[1] == null ? 0 : h.toString()[0])
    return n
  }

  const second2 = () => {
    const h = date.getSeconds()
    const n = Number(h.toString()[1] == null ? h.toString()[0] : h.toString()[1])
    return n
  }


  return (
    <>
      <div className='bg'>
        <div className='cont'>
          <div className='spacer'></div>

          <Bar number={2} selectedNumber={hour1()}></Bar>
          <Bar number={9} selectedNumber={hour2()}></Bar>

          <Colon></Colon>

          <Bar number={5} selectedNumber={minute1()}></Bar>
          <Bar number={9} selectedNumber={minute2()}></Bar>

          <Colon></Colon>

          <Bar number={5} selectedNumber={second1()}></Bar>
          <Bar number={9} selectedNumber={second2()}></Bar>
          <div className='spacer'></div>

        </div>


      </div>
    </>
  )
}

export default App
