
import './Bar.css'
interface barProp {
    number: number
    selectedNumber: number


}
function Bar(props: barProp) {

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
    return (
        <>
            <div className='barCont'>
                <div className='circle'></div>
                <div className='mainBar' style={{ top: `${51.1 - props.selectedNumber * 4}%` }}>
                    {text}
                </div>

            </div>
        </>
    )
}

export default Bar