function Card(props) {
    return (
        <>
            <div className="cardclass">
                <img src={props.imgsrc} alt="Img is fucked"/>
                <h3>{props.title}</h3>
            </div>
        </>        
    )
}

export default Card;