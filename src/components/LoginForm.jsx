import React from "react";
import auth from "../modules/auth";
import { AUTHENTICATE } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { IonContent, IonButton, IonItem, IonItemDivider, IonInput, IonList, IonModal, IonTitle } from "@ionic/react";
import {useState} from 'react'
import {BACK_TO_ARTICLES_LIST} from '../state/actions/actionTypes'

const LoginForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = async e => {
    e.preventDefault();
    try {
      let response = await auth.signIn(
        email,
        password
      );
      props.dispatch({
        type: AUTHENTICATE,
        payload: {
          currentUser: { email: response.data.email, role: response.data.role },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  let login;
  if (props.authenticated) {
    let cutEmail = props.currentUser.email.substring(
      0,
      props.currentUser.email.indexOf("@")
    );
    login = (
        <IonContent size='large'>
          Welcome back {cutEmail}
        </IonContent>
    );
  } else {
    login = (
      <IonContent>
        <IonList>
          <IonItem>
            <IonInput
              type="email"
              value={email}
              placeholder="Email"
              onIonChange={(e) => setEmail(e.detail.value)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput
              type="password"
              value={password}
              placeholder="Password"
              onIonChange={(e) => setPassword(e.detail.value)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton fill="outline" onClick={onLogin}>
          Sign in
        </IonButton>
      </IonContent>
    );
  }

  return (
    <IonContent>
      <IonModal isOpen={props.showLoginForm}>
        <p style={{ color: "white", fontWeight: "bold" }}>Sign In</p>
        {login}
        <IonButton
          fill="outline"
          onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
        >
          Back
        </IonButton>
      </IonModal>
    </IonContent>
  );
  
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    currentUser: state.currentUser,
    showLoginForm: state.showLoginForm
  };
};

export default connect(mapStateToProps)(LoginForm);
