import React from 'react'
function Category(props){
    
    return<>
        {props.data.map(function(cat) {
            return(
                // <Link to={`/currentQue/${cat.id}`}>
                <button onClick={(event)=>{props.selectCatFun(event,cat.id)}} onChange={(event)=>{props.handleChange(event.que)}} key={cat.name} className='btn'>{cat.name}</button>
                // </Link>
            )
        })}
        </>
    

}
export default Category;