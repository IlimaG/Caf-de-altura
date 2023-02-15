import "./Buttons.css"

const Buttons = (props) => {

    const { text, nameClass } = props

    return (
        <button className={nameClass}>{text}</button>
    )
}

export default Buttons