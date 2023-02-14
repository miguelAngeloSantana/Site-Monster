import { addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import app from "./firebase-databse.js"

export async function subscriveMonster(subscription) {
    const db = getFirestore(app);
    const monsterCollection = collection(db, "monster-form");
    const doc = await addDoc(monsterCollection, subscription);
    return doc.id;
}