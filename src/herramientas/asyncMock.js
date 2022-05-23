const promesa = (tiempo, tarea) => {
    return new Promise ((resultado) =>{
        setTimeout (()=>{
            resultado(tarea)
        }, tiempo)
    })
}

export default promesa