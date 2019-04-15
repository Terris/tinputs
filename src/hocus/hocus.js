import { db } from '../firebase';
import { cadabra } from './cadabra';

const pocus = (tinput, uid) => {

  const command = tinput.toLowerCase().split(" ");
  const commandRoot = command[0];

  if ( typeof commandRoot !== "string" ) {
    cast("error: not a string", uid);
  } else {
    switch(commandRoot) {
      case "cadabra":
        cadabra(command, uid)
        break;
      default:
        cast(command, uid)
    }
  }
}

const cast = (command, uid) => {
  db.tinputs().push({ command: command.join(" "), user_id: uid })
}

export {
  pocus,
  cast
};
