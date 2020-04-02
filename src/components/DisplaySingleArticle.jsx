import React from "react";
import { connect } from "react-redux";
import { BACK_TO_ARTICLES_LIST } from "../state/actions/actionTypes";
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonButton,
  IonGrid,
  IonTitle,
  IonSegment
} from "@ionic/react";

import React from "react";

const DisplaySingleArticle = props => {
  let articleDetails;
  let article = props.singleArticle;
  articleDetails = (
    <IonCard>
      <IonGrid>
        <IonItem>
          <IonTitle key={article.title}>{article.title}</IonTitle>
        </IonItem>
        <img src={article.image} alt={`${article.title}-image`} />
        <IonItem>
          <IonCardContent key={article.snippet}>
            {article.snippet}
          </IonCardContent>
        </IonItem>
        <IonItem>
          <IonCardContent key={article.content}>
            {article.content}
          </IonCardContent>
        </IonItem>
        <IonItem>
          <IonButton
            onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
          >
            back
          </IonButton>
        </IonItem>
      </IonGrid>
    </IonCard>
  );

  return <IonContent>{articleDetails}</IonContent>;
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle
  };
};
export default connect(mapStateToProps)(DisplaySingleArticle);
