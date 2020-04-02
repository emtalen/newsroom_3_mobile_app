import React from "react";
import { connect } from "react-redux";
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonButton,
  IonGrid,
  IonTitle
} from "@ionic/react";
import { planet } from "ionicons/icons";

const SingleArticle = props => {
  let articleDetails;
  let article = props.singleArticle;

articleDetails = (
  <IonCard>
    <IonGrid key={article.id} id={"article-" + article.id} align="center">
      <IonItem>
        <IonIcon icon={planet} slot="start" />
      </IonItem>
      <img src={article.image} alt={`${article.title}-image`} />
      <IonItem>
        <IonTitle align="center">{article.title}</IonTitle>
      </IonItem>
      <img src={article.image} alt={`${article.title}-image`} />
      <IonCardContent>{article.snippet} </IonCardContent>
      <IonCardContent>{article.content}</IonCardContent>
      <button
        id="home-button"
        onClick={() => props.dispatch({ type: BACK_TO_ARTICLES_LIST })}
      >
        Back
      </button>
    </IonGrid>
  </IonCard>
);
return <div id="single-article">{articleDetails}</div>;
}
const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle,
  };
};
export default connect(mapStateToProps)(SingleArticle);