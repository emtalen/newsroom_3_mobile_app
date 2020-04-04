import React from "react";
import { connect } from "react-redux";
import { BACK_TO_ARTICLES_LIST } from "../state/actions/actionTypes";
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonButton,
  IonGrid,
  IonTitle,
  IonImg,
} from "@ionic/react";
import RestrictedContent from "./RestrictedContent";
import FullContent from "./FullContent";

const DisplaySingleArticle = (props) => {
  let articleDetails;
  let article = props.singleArticle;
  let currentUser = props.currentUser;

  let showContent =
    currentUser.role === "subscriber" || article.premium === false ? (
      <FullContent />
    ) : (
      <RestrictedContent />
    );

  articleDetails = (
    <IonCard>
      <IonGrid key={article.id} align="center">
        <IonImg src={article.image} alt={`${article.title}-image`} />
        <IonItem>
          <IonTitle key={article.title}>{article.title}</IonTitle>
        </IonItem>

        <IonItem>
          <IonCardContent key={article.snippet}>
            {article.snippet}
          </IonCardContent>
        </IonItem>
        <IonItem>
          <IonCardContent key={article.content}>{showContent}</IonCardContent>
        </IonItem>
        <IonItem>
          <IonButton
            fill="outline"
            onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
          >
            Back
          </IonButton>
        </IonItem>
      </IonGrid>
    </IonCard>
  );

  return <IonContent>{articleDetails}</IonContent>;
};

const mapStateToProps = (state) => {
  return {
    singleArticle: state.singleArticle,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(DisplaySingleArticle);
