import './ampm.css'
interface AMPMprops {
    AM: boolean
}
function ampm(props: AMPMprops) {
    return (
        <>
            <div className='apCont'>
                <div className='apCenter'> </div>
                <div className='apBG' style={{ top: `${51 + (props.AM ? -4 : 0.4)}%` }}>
                    <p className={`apText ${!props.AM ? 'toggle' : ''}`}>AM</p>
                    <p className={`apText ${props.AM ? 'toggle' : ''}`}>PM</p>
                </div>

            </div>
        </>
    )
}

export default ampm