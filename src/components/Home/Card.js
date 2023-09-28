
import './home.css'

function Card(props){


    const handleClick = ()=>{

        props.onClick(props.id_loc);
    };


    return (

            <div className="card" style= {{width: "18rem", height:"20rem"}} onClick={handleClick}>
            <img className="card-img-top" src={props.image} alt={props.partName} style= {{width: "18rem", height:"10rem"}} />
                <div className="card-body">
                    <h5 className="card-title">{props.partName}</h5>
                    <h4 className="card-text">{props.carModel}</h4>
                    <p className="card-text">{props.price} euros - {props.carYear}</p>

                </div>
            </div>


    );
}

export default Card;