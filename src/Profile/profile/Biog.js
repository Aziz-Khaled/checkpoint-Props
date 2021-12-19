import React from "react";


const Biog = (props) => {
    const styles = {Border : "solid 1px black" , textAlign : 'center' }
    const children = props.children ; 
        return  (
<div styles ={styles}>
    <h1> {props.fullName}</h1>
    <h6>{props.bio}</h6>
    <h6> { props.Profession}</h6>
    <img src ={children} alt ="ph" />
    <button onClick={() => props.handleName(props.fullName) }>
        click !!
    </button>
</div>
                )
}


export default Biog