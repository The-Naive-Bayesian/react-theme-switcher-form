import * as React from "react";
import './card.css';

const Card = (props: {children?: any, styles?: any}) => {
    return (
        <section style={props.styles}>
            {props.children || null}
        </section>
    )
};

export default Card;