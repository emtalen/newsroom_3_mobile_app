import React from "react";
import { Redirect, Route } from "react-router-dom";
import { SELECT_CATEGORY } from './state/actions/actionTypes'
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonContent,
  IonToolbar,
  IonItem,
  IonSegment,
  IonGrid,
  IonTitle,
  IonFooter,
  IonButton,
  IonLabel,
  IonSegmentButton,
  IonIcon
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Menu from "./components/Menu";
import DisplayArticles from "./components/DisplayArticles";
import Header from "./components/Header";
import { fetchArticles } from "./state/actions/articleAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DisplaySingleArticle from "./components/DisplaySingleArticle";
import logo from "./images/mars_times_cut.png";
import { planet } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = props => {
  props.fetchArticles();
  
  const handleItemClick = event => {
    props.dispatch({
      type: SELECT_CATEGORY,
      payload: {
        selectedCategory: event.target.value,
      }
    });
  };
  return (
    <IonApp>
      <IonToolbar>
        {" "}
        <img src={logo} alt="Logo" />
      </IonToolbar>
      {props.articleList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
      <IonToolbar>
        <IonSegment onIonChange={e => handleItemClick(e)}>
          <IonSegmentButton value="">
            <IonIcon icon={planet} slot="start" />
          </IonSegmentButton>
          <IonSegmentButton value="latest_news">
            <IonLabel>Latest News</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="politics">
            <IonLabel>Politics</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sports">
            <IonLabel>Sports</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="tech">
            <IonLabel>Tech</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="culture">
            <IonLabel>Culture</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </IonApp>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch),
    dispatch: dispatch
  };
};

const mapStateToProps = state => {
  return {
    singleArticle: state.singleArticle,
    articleList: state.articleList
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
