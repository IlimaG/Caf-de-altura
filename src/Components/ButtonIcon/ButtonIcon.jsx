import "./ButtonIcon.css"

const ButtonIcon = (props) => {

    const { text, nameClass, imgURL } = props

    return (
        <button className={nameClass}>
            <div className="btnIcon">
                <img src={imgURL} />
                {text}
            </div>
        </button>
    )
}

export default ButtonIcon