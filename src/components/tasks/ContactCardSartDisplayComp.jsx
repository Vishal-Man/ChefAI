import React from "react";
import starFilled from "../../assets/star-filled.png";
import starEmpty from "../../assets/star-empty.png";

export default function Star(Props) {

    let starIcon = Props.isFilled ? starFilled : starEmpty

    return(
        <button
            onClick={Props.onClick}
            aria-pressed={Props.isFilled}
            aria-label={Props.isFilled ? "true" : "flase"}
            className="employeed-button"
        ><img
            src={starIcon}
            alt= {Props.isFilled ? "Filled start icon" : "Empty star icon"}
            className="favorite"
        />
        </button>
    )
}