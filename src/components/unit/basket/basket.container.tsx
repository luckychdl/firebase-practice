// import firebase from "firebase";
// import { useState } from "react";
import BasketUI from "./basket.presenter";
// import { useCollection } from "react-firebase-hooks/firestore";
// import { Modal } from "antd";

export default function basket() {
  // const [isAdd, setIsAdd] = useState(false);
  // const [basketTitle, setBasketTitle] = useState("");
  // const [value] = useCollection(firebase.firestore().collection("basket"), {
  //   snapshotListenOptions: { includeMetadataChanges: true },
  // });
  // const onClickAddBasket = () => {
  //   setIsAdd((prev) => !prev);
  //   console.log(isAdd);
  // };
  // const onChangeAddBasket = (event) => {
  //   setBasketTitle(event.target.value);
  //   console.log(basketTitle);
  // };
  // const onClickCreateBasket = async () => {
  //   const basketId = firebase.firestore().collection("basket").doc().id;
  //   try {
  //     const value = {
  //       basketId: basketId,
  //       title: basketTitle,
  //       createdAt: new Date(),
  //     };
  //     await firebase.firestore().collection("basket").doc(basketId).set(value);
  //     setIsAdd(false);
  //   } catch (err) {
  //     Modal.error({
  //       content: err.message,
  //     });
  //   }
  // };
  return <BasketUI />;
}
