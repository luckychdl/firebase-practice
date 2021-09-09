import BasketWritePageUI from "./basketWrite.presenter";
import { useState } from "react";
import firebase from "firebase";
import { Modal } from "antd";
import { useCollection } from "react-firebase-hooks/firestore";
const BasketWritePage = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [basketTitle, setBasketTitle] = useState("");
  const [value] = useCollection(firebase.firestore().collection("basket"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const onClickAddBasket = () => {
    setIsAdd((prev) => !prev);
  };
  const onChangeAddBasket = (event) => {
    setBasketTitle(event.target.value);
    console.log(basketTitle);
  };
  const onClickCreateBasket = async () => {
    const basketId = firebase.firestore().collection("basket").doc().id;
    try {
      const value = {
        basketId: basketId,
        title: basketTitle,
        createdAt: new Date(),
      };
      await firebase.firestore().collection("basket").doc(basketId).set(value);
      setIsAdd(false);
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  return (
    <BasketWritePageUI
      isAdd={isAdd}
      value={value}
      onClickAddBasket={onClickAddBasket}
      onClickCreateBasket={onClickCreateBasket}
      onChangeAddBasket={onChangeAddBasket}
    />
  );
};

export default BasketWritePage;
