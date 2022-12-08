import "../auth/ui";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import firebaseEmailPasswordAuth from "../auth/firebaseEmailPasswordAuth";
import firebase from "firebase/compat/app";
import {useState} from "react";
import createEmailPasswordAccount from "../auth/createEmailPassworAccount";

export default function Home() {

    const basicCardMock = {
        title: 'basic title',
        description: 'basic card description',

    }



  const [isSignedIn, setIsSignedIn] = useState(false)
  function formSubmit(e) {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    firebaseEmailPasswordAuth(email, password)
        .then(res => {
          console.log(res)
          console.log('user successfully signed in');
          setIsSignedIn(true)
        })
        .catch(err => {
            createEmailPasswordAccount(email, password)
                .then(res => console.log(res))
                .catch(err => console.error(err))
        })
  }

  return (
    <>
      <div id="login">
        <div className="header">
          <h1>Getting Started with Firebase Auth</h1>
        </div>
        {!isSignedIn ?
        <form onSubmit={(e) => formSubmit(e)}>
          <input type='text' id='email' />
          <input type='password' id='password' />
          <input type='submit' value='submit'/>
        </form> :
            <h1>Hello user!</h1>}
      </div>

      <div id="app">
        {/*<div class="header">*/}
        {/*  <h1>Welcome to Your Amazing App</h1>*/}
        {/*</div>*/}
        {/*<form>*/}
        {/*  <div class="group">*/}
        {/*    <div id="lblAuthState" class="authlabel"></div>*/}
        {/*  </div>*/}
        {/*  <button id="btnLogout" type="button" class="button buttonBlue">*/}
        {/*    Log out*/}
        {/*  </button>*/}
        {/*</form>*/}
      </div>
    </>
  );
}
