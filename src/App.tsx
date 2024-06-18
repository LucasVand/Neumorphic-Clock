
import { useState } from 'react'
import './App.css'
import Bar from './Bar/Bar'
import Colon from './Colon/Colon'
import AMPM from './AM/PM/ampm'
import './normalize.css'

function App() {
  const [date, setDate] = useState(new Date())
  var theme = 'light'

  setTimeout(() => {
    setDate(new Date())
    console.log("Timer")
  }, 100);
  const hour1 = () => {
    var h = date.getHours()
    if (h > 12) {
      h -= h > 12 ? 12 : 0
    }

    const n = Number(h.toString()[1] == null ? 0 : h.toString()[0])
    return n
  }
  const hour2 = () => {
    var h = date.getHours()
    if (h > 12) {
      h -= h > 12 ? 12 : 0
    }
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

  const AM = () => {
    const h = date.getDate()

    const a = h > 12 ? true : false
    return a
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode
    theme = 'dark'
  }
  return (
    <>
      <div className='bg' data-theme={theme}>
        <div className='cont'>
          <Bar number={2} selectedNumber={hour1()}></Bar>
          <Bar number={9} selectedNumber={hour2()}></Bar>

          <Colon></Colon>

          <Bar number={5} selectedNumber={minute1()}></Bar>
          <Bar number={9} selectedNumber={minute2()}></Bar>

          <Colon></Colon>

          <Bar number={5} selectedNumber={second1()}></Bar>
          <Bar number={9} selectedNumber={second2()}></Bar>

          <AMPM AM={AM()}></AMPM>

        </div>


      </div>
    </>
  )
}


export default App
