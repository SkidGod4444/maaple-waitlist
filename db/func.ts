import { child, get, ref, set } from "firebase/database";
import { db } from "./init";

const genStrng = generateRandomString();

async function addTOwl(email: string) {
  set(ref(db, "waitlist/" + genStrng), {
    email: email,
  });
}

async function addTOesp(email: string) {
  set(ref(db, "early-supporters/" + genStrng), {
    email: email,
  });
}

async function getWLusers() {
  const dbRef = ref(db);
  get(child(dbRef, `waitlist/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const res = snapshot.val();
        return res;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getESPusers() {
  const dbRef = ref(db);
  get(child(dbRef, `early-supporters/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const res = snapshot.val();
        return res;
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}


function generateRandomString(): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

export { addTOwl, addTOesp, getWLusers, getESPusers };
