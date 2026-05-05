──┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 0-promise.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default function getResponseFromAPI() {
   2   │   return new Promise((resolve, reject) => {});
   3   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 1-promise.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default function getFullResponseFromAPI(success) {
   2   │   return new Promise((resolve, reject) => {
   3   │     if (success) {
   4   │       resolve({
   5   │         status: 200,
   6   │         body: 'Success',
   7   │       });
   8   │     } else {
   9   │       reject(new Error('The fake API is not working currently'));
  10   │     }
  11   │   });
  12   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 2-then.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ export default function handleResponseFromAPI(promise) {
   2   │   return promise
   3   │     .then(() => ({
   4   │       status: 200,
   5   │       body: 'success',
   6   │     }))
   7   │     .catch(() => new Error())
   8   │     .finally(() => {
   9   │       console.log('Got a response from the API');
  10   │     });
  11   │ }
───────┴──────────────────────────────────────────────────────────────────────────────────────────────
───────┬──────────────────────────────────────────────────────────────────────────────────────────────
       │ File: 3-all.js
───────┼──────────────────────────────────────────────────────────────────────────────────────────────
   1   │ import uploadPhoto from './utils.js';
   2   │ import createUser from './utils.js';
   3   │
   4   │ export default function handleProfileSignup() {
   5   │   return Promise.all([uploadPhoto(), createUser()])
   6   │     .then(([photo, user]) => {
   7   │       console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
   8   │     })
   9   │     .catch(() => {
