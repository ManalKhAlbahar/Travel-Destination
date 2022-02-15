import './Tour.css';
export default function Tours(props) {
    return (
     <>
        <p id='name'>  City :  {props.data.name}</p>
            <img src={props.data.image} />
      
     </>
         
    )
}
