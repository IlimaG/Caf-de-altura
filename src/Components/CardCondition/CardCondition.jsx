import './CardCondition.css'

const CardCondition = (props) => {

    const {imgURL, condition, info} = props
    return (
        <div className='cardCondition'>
            <picture className='conditionsImg'>
                <img src={imgURL} alt={`${condition} picture`} />
            </picture>

            <h3>{condition}</h3>

            <p>{info}</p>
        </div>
    )
}

export default CardCondition