import React from "react";
import { SELECT_CATEGORY } from "../state/actions/actionTypes";
import { connect } from "react-redux";
import logo from "../images/mars_times_cut.png";
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonToolbar,
} from "@ionic/react";

const Menu = (props) => {
  const handleItemClick = (event) => {
    props.dispatch({
      type: SELECT_CATEGORY,
      payload: {
        selectedCategory: event.target.value,
      },
    });
  };
  return (
    <>
      <IonToolbar>
        {" "}
        <img src={logo} alt="Logo" onClick={(e) => handleItemClick(e)} />
      </IonToolbar>
      <IonToolbar no-border no-padding>
        <IonSegment onIonChange={(e) => handleItemClick(e)}>
          <IonSegmentButton value="latest_news" size="mini">
            <IonLabel>News</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="politics" size="mini">
            <IonLabel>Politics</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sports" size="mini">
            <IonLabel>Sports</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="tech" size="mini">
            <IonLabel>Tech</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="culture" size="mini">
            <IonLabel>Culture</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </>
  );
};

export default connect()(Menu);
