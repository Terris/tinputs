import { auth } from '../firebase';
import { cast } from './hocus';

const safeword = ["cadabra"];

const cadabra = (command, uid) => {
  switch(command[1]) {
    case "login":
      cadabraLogin(command, uid)
      break;
    case "logout" || "signout":
      auth.signOut()
      .then(() => console.log("logged out"))
      .catch(e => console.log(e));
      break;
    case "user":
      cadabraUser();
      break;
    default:
      cast(safeword, uid);
  }
}

const cadabraLogin = (command, uid) => {
  const valid = command.length === 4;
  if (valid) {
    auth.signInWithEmailandPassword(command[2], command[3])
    .then(() => console.log("logged in"))
    .catch((e) => console.log(e))
  } else {
    cast(safeword, uid)
  }
}

const cadabraUser = () => {
  const user = auth.currentUser();
  console.log(user);
  cast(safeword, user.uid)
}

export {
  cadabra
};
