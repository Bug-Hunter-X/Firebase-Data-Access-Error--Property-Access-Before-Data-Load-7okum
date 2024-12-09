# Firebase Data Access Error: Property Access Before Data Load

This repository demonstrates a common error in Firebase applications where you try to access properties of a document snapshot before the data has fully loaded. This often occurs with asynchronous operations like `onSnapshot`.  The solution shows how to properly handle asynchronous data loading to prevent these errors.

## Bug

Attempting to access document data before it's fully loaded leads to errors like `TypeError: Cannot read properties of undefined (reading 'name')`.

## Solution

The solution involves checking if the data exists before accessing it using optional chaining or nullish coalescing operators.  This prevents errors caused by accessing `undefined` properties.