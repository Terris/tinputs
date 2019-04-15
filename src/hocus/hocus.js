import { db } from '../firebase';
import { cadabra } from './cadabra';

const cast = (command, uid) => {
  console.log(command.join(" "));
  db.tinputs().push({ command: command.join(" "), user_id: uid })
}

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

export {
  pocus,
  cast
};
