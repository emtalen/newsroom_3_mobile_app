import React from "react";
import { connect } from "react-redux";
import { IonCardContent } from "@ionic/react";

const FullContent = (props) => {
  let article = props.singleArticle;
  return (
    <>
      <IonCardContent>{article.content}</IonCardContent>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    singleArticle: state.singleArticle,
  };
};

export default connect(mapStateToProps)(FullContent);
