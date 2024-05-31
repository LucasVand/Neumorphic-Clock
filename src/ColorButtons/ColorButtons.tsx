import './ColorButtons.css'
interface ColorButtonProps {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

function ColorButtons(props: ColorButtonProps) {


    const themes = ['light', 'dark', 'purple']
    const click = (v: string) => {
        const temp = v
        props.setTheme(temp)
    }
    const buttons = themes.map((value) => {
        return (
            <button className='themeButton' data-theme={value} onClick={() => click(value)}>
                <div className='innerButton' data-theme={value}></div>
            </button>
        )
    })
    return (
        <>
            <div className='buttonCont'>
                {buttons}
            </div>
        </>
    )

}

export default ColorButtons