import "antd/dist/antd.css";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { config } from "../src/commons/firebase/firebase";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

const MyApp = ({ Component, pageProps }) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
