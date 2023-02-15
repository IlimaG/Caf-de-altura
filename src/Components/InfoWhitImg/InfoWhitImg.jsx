import './InfoWhitImg.css'


const InfoWhitImg = (props) => {

    const { h3, h1, info, btn1, btn2, imgURL, nameClass } = props


    return (
        <div className='InfoWhitImg'>
            <div >
                <article className='infoGrid'>
                    <h3 className={nameClass}>{h3}</h3>
                    <h1>{h1}</h1>
                    <p>{info}</p>

                    <div>
                        {btn1}
                        {btn2}
                    </div>

                </article>
            </div>

            <picture >
                <img src={imgURL} alt="coffe" />
            </picture>
        </div>
    )
}

export default InfoWhitImg