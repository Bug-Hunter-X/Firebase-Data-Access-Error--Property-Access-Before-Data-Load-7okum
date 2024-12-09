The Firebase SDK may throw an error if you try to access a property of a document snapshot before the data has fully loaded.  This is common when using asynchronous functions like `onSnapshot`.  If the data is not yet available, the property will be `undefined`, and attempting to access it will lead to an error. For example, accessing `doc.data().name` before the data has loaded results in a runtime error.