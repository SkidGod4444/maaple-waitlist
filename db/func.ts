import { child, get, ref, set } from "firebase/database";
import { db } from "./init";


async function addTOwl(email: string) {
  try {
    const waitlistRef = ref(db, "waitlist/" + generateRandomString());
    await set(waitlistRef, {
      email: email,
    });
    return true;
  } catch (error: any) {
    console.error("Error adding to waitlist:", error);
    return false;
  }
}

async function addTOesp(email: string) {
  try {
    const espRef = ref(db, "early-supporter/" + generateRandomString());
    await set(espRef, {
      email: email,
    });
    return true;
  } catch (error: any) {
    console.error("Error adding to waitlist:", error);
    return false;
  }
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
