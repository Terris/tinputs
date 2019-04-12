import React from 'react';
import Reply from '../reply';
import "../../css/log.css";

const Log = ({ tinputs }) => {
  return (
    <div className="log">
      {!!tinputs && Object.keys(tinputs).map(key => {
        return (
          <Reply key={key} command={tinputs[key].command} />
        )
      })}
    </div>
  )
}

export default Log;
