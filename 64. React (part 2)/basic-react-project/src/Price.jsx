export default function Price({oldPrice, newPrice}){
    let oldStyles = {
        textDecorationLine : "line-through",
    }
    let newStyles = {
        fontWeight : "bold",
    }
    return (
        <div style={{backgroundColor : "blue", borderBottomLeftRadius : "20px", borderBottomRightRadius : "20px", height : "50px"}}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}