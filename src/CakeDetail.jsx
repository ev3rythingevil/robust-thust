
function CakeDetail({cake , handleDelete, handleUpdate}) {
    return (
        <>
        <img src={cake.image} style={{width:"200px"}}/>
        <p>{cake.flavor}</p>
        <p>{cake.size}</p>
        <p>${cake.price}</p>
        <p>{cake.description}</p>
        <button onClick={()=>handleUpdate(cake)}>{cake.liked?"❤️" : "♡"}</button>
        <button onClick={()=>handleDelete(cake.id)}>Remove Cake</button>
        </>
    );
}

export default CakeDetail;