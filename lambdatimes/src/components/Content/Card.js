import React from 'react';
import PropTypes from "prop-types"

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  )
}

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string, //which makes no sense to me but I guess we are techincally passing a string which is a reference to an img not the actual img but still this is kinda dumb.
  author: PropTypes.string
}

export default Card;
