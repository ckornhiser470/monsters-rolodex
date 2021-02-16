import React from "react";

import "./card-styles.css";

//sfc
//pass in individual monster
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};

// export default Card; just put export before const
