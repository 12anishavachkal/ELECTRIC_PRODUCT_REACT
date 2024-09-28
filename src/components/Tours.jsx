import Cards from "./Card"


const Tours =({state,remove})=>{
    return(
        <div>
            <h1 className="heading">PLAN WITH AA✈️🧳</h1>
            <div className="main">
            {
                
                state.map((items)=>{
                    return(
                        <Cards key={items.id} {...items} remove={remove} />
                    )
                })
            }
            </div>
            

        </div>
    )
}
export default Tours