const Squart = ({ colorvalue,hexvalue,isdarktext}) => {
    return (
        <section className="squart"
        style={{ backgroundColor:colorvalue,
            color: isdarktext ? "#000" : "#fff" }}>
            <p>{colorvalue ? colorvalue:"Empty value"
                
            
            }</p>
            <p>{hexvalue ? hexvalue:null}</p>
        </section>
    )
}
Squart.defaultProps={
    colorvalue:"Empty color value"
}
export default Squart;