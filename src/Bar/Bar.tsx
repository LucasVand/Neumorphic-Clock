
import './Bar.css'
import { browserName, isIOS } from 'react-device-detect'
interface barProp {
    number: number
    selectedNumber: number


}
function Bar(props: barProp) {

    const inciment = () => {
        if (browserName == 'Safari') {
            return 4
        }
        else if (browserName == 'Edge' || browserName == 'Chrome' || browserName == 'Opera' || browserName == 'Firefox') {
            return 4.13
        }
        else if (isIOS && window.screen.orientation.type == 'landscape-primary') {
            return 3.9
        } else if (window.screen.orientation.type == 'portrait-primary') {
            return 3.75
        }

        return 4
    }

    const startAmount = () => {
        if (browserName == 'Safari') {
            return 51.5
        }
        else if (browserName == 'Edge') {
            return 51.2
        }
        else if (browserName == 'Opera' || browserName == 'Chrome' || browserName == 'Firefox') {
            return 51.3
        } else if (window.screen.orientation.type == 'portrait-primary') {
            return 52
        }

        return 51.5
    }
    const numbers = () => {
        const num = []
        for (var i = 0; i < props.number + 1; i++) {
            num.push(i)
        }
        return num
    }
    const text = numbers().map((value) => {
        return (
            <p className={`barText ${value == props.selectedNumber ? 'toggle' : ''}`} >{value}</p>
        )
    })
    //51.5 + 4
    return (
        <>
            <div className='barCont'>

                <div className='circle'></div>
                <div className='mainBar' style={{ top: `${startAmount() - props.selectedNumber * inciment()}%` }}>
                    {text}
                </div>

            </div>
        </>
    )
}

export default Bar