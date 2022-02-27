import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          udi: userAuth.udi,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
    {/* header */}
    <Header/>

    {/* Si no hay usuario renderizar Login, por otra manera renderizar la app */}
    {!user ?(
      <Login/>
    ) : (
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    )}
    </div>
  );
}

export default App;
