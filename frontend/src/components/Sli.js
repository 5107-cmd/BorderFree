import React from 'react';

export default function Sli(props) {
    console.log(props.image);
    if (props.number == 0) {
        return (
            <div class="carousel-item active">
                <img class="d-block w-100" src={props.image} alt="First slide" />
            </div>
        )
    }
    else {
        return (

            <div class="carousel-item">
                <img class="d-block w-100" src={props.image} alt="First slide" />
            </div>

        )
    }
}