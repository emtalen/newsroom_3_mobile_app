import React from "react";
import { connect } from "react-redux";
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonGrid,
  IonTitle
} from "@ionic/react";
import { planet } from "ionicons/icons";
import image from "../pictures/alien.jpg";

const DisplayArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <IonCard>
        <IonGrid key={article.id} id={"article-" + article.id} align="center">
          <IonItem>
            <IonIcon icon={planet} slot="start" />
          </IonItem>
          <IonItem>
            <IonTitle align="center">{article.title}</IonTitle>
          </IonItem>
          <img src={image} />
          <IonCardContent>{article.snippet} </IonCardContent>
          <IonItem>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>
        </IonGrid>
      </IonCard>
    );
  });
  return <IonContent>{articleDisplay}</IonContent>;
};
const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(DisplayArticles);
