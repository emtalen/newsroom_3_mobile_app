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
  IonButton
} from "@ionic/react";
import { basketball } from "ionicons/icons";

const DisplayArticles = props => {
  let articleDisplay = props.articles.map(article => {
    return (
      <IonPage>
        <IonContent>
          <IonCard>
            <IonItem key={article.id} id={"article-" + article.id}>
              <IonIcon icon={basketball} slot="start" />
              <IonLabel id="title">{article.title}</IonLabel>
              <IonButton fill="outline" slot="end">
                View
              </IonButton>
            </IonItem>
            <IonCardContent id="snippet">{article.snippet}</IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  });
  return (
  <>
  {articleDisplay}
  </>
  )
};
const mapStateToProps = state => {
  return {

    articles: state.articles
  }
}

export default connect(mapStateToProps)(DisplayArticles);
