import React from "react";
import { connect } from "react-redux";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonGrid
} from "@ionic/react";
import { basketball } from "ionicons/icons";

const DisplayArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <IonGrid key={article.id} id={"article-" + article.id} align='center'>
        <h1>{article.title}</h1>
        <p>{article.snippet}</p>
      </IonGrid>
    );
  });
  return <IonContent>{articleDisplay}</IonContent>
 
};
const mapStateToProps = state => {
  return {

    articles: state.articles
  }
}

export default connect(mapStateToProps)(DisplayArticles);
