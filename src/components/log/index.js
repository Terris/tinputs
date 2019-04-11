import React from 'react';

import "../../css/log.css";

const Log = ({ tinputs }) => {
  return (
    <div className="log">
      <h3>:</h3>
      {!!tinputs && Object.keys(tinputs).map(key => {
        return (
          <p key={key}>{tinputs[key].command}</p>
        )
      })}

    </div>
  )
}

export default Log;
