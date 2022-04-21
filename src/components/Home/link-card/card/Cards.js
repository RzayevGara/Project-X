import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Cards(props) {
  return (
    <div className={props.class}>
        <div className="text">
            <h4>{props.title}</h4>
            <p>Məhsul Sayı: <span>{props.count}</span></p>
            <Link to="/">Məhsullara keçid <FontAwesomeIcon icon={faAngleRight}/> </Link>
        </div>
        <img src={props.image} alt="logo"/>
    </div>
  )
}

export default Cards