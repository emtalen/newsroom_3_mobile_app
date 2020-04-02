import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { basketball } from 'ionicons/icons';

const CardExamples = props => {

  
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonItem>
            <IonIcon icon={basketball} slot="start" />
            <IonLabel>Title snippet</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
        This is some snippet
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
  }

export default CardExamples