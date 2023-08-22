interface card {
typen: string;    
name: string;
place: string;
duration:string;
date: string;
}

function Cards(props:card) {
    return(
        <>
         <h6>{props.typen}</h6>
        <p>{props.name}</p>
        <p>{props.duration}</p>
        <p>{props.place}</p>
        <p>{props.date}</p>
        </>
       
    )
}

export default Cards;