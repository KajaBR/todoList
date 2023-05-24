import React from "react";

export const Metric = (props) => {
    return (
        <article>
        <p>{props.label}</p>
        <p>{props.value}</p>
        </article>
    )
}