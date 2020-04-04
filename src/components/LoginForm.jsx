import React from "react";
import auth from "../modules/auth";
import { AUTHENTICATE } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import { IonContent, IonButton, IonItem, IonItemDivider, IonInput, IonList } from "@ionic/react";
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
        <IonContent id="logged-in-message" class="success-message">
          {cutEmail}
          <IonButton
            onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
          >
            Back
          </IonButton>
        </IonContent>
    );
  } else {
    login = (
      <IonContent>
        <IonList>
          <IonItemDivider>Email</IonItemDivider>
          <IonItem>
            <IonInput type="email" value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value)}></IonInput>
          </IonItem>

          <IonItemDivider>Password</IonItemDivider>
          <IonItem>
            <IonInput type="password" value={password} placeholder="Password" onIonChange={e => setPassword(e.detail.value)}></IonInput>
          </IonItem>
          <IonButton onClick={onLogin}>Sign in</IonButton>
        </IonList>
      </IonContent>
    );
  }

  return <div>{login}</div>;
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    currentUser: state.currentUser,
    articleList: state.articleList
  };
};

export default connect(mapStateToProps)(LoginForm);
