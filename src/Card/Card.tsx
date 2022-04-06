import React from "react";
import '../Card.css';

export const Card: React.FunctionComponent<CardProps> = props => {
    return (
        <div className="card" role="card">
            {props.title}
        </div>
    );
};

export type CardProps = {
    title: String
}