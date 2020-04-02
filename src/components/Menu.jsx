import React from 'react';
import { IonSegmentButton, IonSegment, IonToolbar } from '@ionic/react';

const Menu = () => {
  return (
    <IonSegment>
      <IonToolbar>
        <IonSegmentButton>Latest news</IonSegmentButton>
        <IonSegmentButton>Tech</IonSegmentButton>
        <IonSegmentButton>Culture</IonSegmentButton>
        <IonSegmentButton>Politics</IonSegmentButton>
        <IonSegmentButton>Culture</IonSegmentButton>
      </IonToolbar>
    </IonSegment>
  )
}

export default Menu