 import colorNames from 'colornames'
const Input = ({ colorvalue,setcolorvalue ,sethexvalue,isdarktext,setisdarktext}) => {
    return (
        <form onSubmit ={ (e)=>e.preventDefault() }>
            <input 
             autoFocus
             type="text"
             placeholder="Add color name"
             required
             value={colorvalue}
             onChange={
                
                (e)=> {setcolorvalue(e.target.value);
                sethexvalue(colorNames(e.target.value));
                
                }}
            />
            <button type="button"
        onClick={()=> setisdarktext(!isdarktext)}
        >toggle text color</button>
        </form>
        
    )
}

export default Input
