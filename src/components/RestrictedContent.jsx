import React from "react";
import { connect } from "react-redux";
import { IonCardContent, IonButton } from "@ionic/react";
const RestrictedContent = (props) => {
  let article = props.singleArticle;

  let shortContent = article.content.substring(0, 20) + "...";
  let currentUser = props.currentUser;

  let switchLoginAndSubscribe =
    currentUser.role === "reg_user" ? (
      <IonCardContent>
        This is premium article. If you want to continue reading, you need to
        subscribe.
        <br />
        To buy a subscription,
        <br />
        <a href="https://themarstimes.netlify.com/">visit our website.</a>
      </IonCardContent>
    ) : (
      <>
        <IonCardContent>
          This is premium article. If you want to continue reading, you need to
          subscribe.
          <br />
          To sign up and buy a subscription,
          <br />
          <a href="https://themarstimes.netlify.com/">visit our website.</a>
        </IonCardContent>
        <IonButton>Login</IonButton>
      </>
    );

  return (
    <>
      <IonCardContent id="content">{shortContent}</IonCardContent>
      {switchLoginAndSubscribe}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    singleArticle: state.singleArticle,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(RestrictedContent);
