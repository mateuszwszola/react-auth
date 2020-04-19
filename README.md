# React Authentication with Firebase

Simple GitHub Authentication in React using Firebase

## Getting Started

These instructions will get you a copy of the project up and running on your local machine

### Prerequisites

Register the app with Firebase and enable authentication with Github following Firebase docs

Create a `firebaseConfig.js` file in the root of the project and export the project config object

The example of `firebaseConfig.js` file

```
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID
};

export default firebaseConfig;

```
