import { useState, useCallback, useEffect } from 'react';
import firebase from '../firebase';

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    firebase.auth().onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser(newUser);
      } else {
        setUser(null);
      }
      setStatus('loaded');
    });
  }, []);

  const login = useCallback(() => {
    setStatus('loading');
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        setUser(res.user);
        setStatus('loaded');
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setStatus('error');
      });
  });

  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .catch((err) => {
        setStatus('error');
        setError(err);
      });
  });

  return { user, login, logout, status, error };
}

export default useFirebaseAuth;
