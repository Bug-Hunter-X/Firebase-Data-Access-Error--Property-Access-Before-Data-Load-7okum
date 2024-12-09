The solution is to check if the data exists before accessing it.  We can use optional chaining (?.) to gracefully handle undefined values:

```javascript
import { onSnapshot, collection, doc, getDoc } from "firebase/firestore";

const db = // your firebase database
const docRef = doc(db, 'collectionName', 'docId');

// Using optional chaining
onSnapshot(docRef, (snapshot) => {
  const data = snapshot.data();
  const name = data?.name; // Optional chaining
  if (name) {
    console.log(name);
  } else {
    console.log('Name not found');
  }
});

//Using async/await and getDoc
async function getData(){
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
  } else {
      console.log("No such document!");
  }
}

getData();

```
Alternatively, use the nullish coalescing operator (??) to provide a default value:

```javascript
const name = data?.name ?? 'Guest'; // Default to 'Guest' if name is undefined
```
These approaches ensure the code runs without errors when dealing with asynchronous Firebase data loading.