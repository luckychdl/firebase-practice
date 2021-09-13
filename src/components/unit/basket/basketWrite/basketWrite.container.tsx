import BasketWritePageUI from "./basketWrite.presenter";
import { useState } from "react";
import { Modal } from "antd";
import { dbservice } from "../../../../commons/firebase/firebase";
const BasketWritePage = (props) => {
  const [isAdd, setIsAdd] = useState(false);
  const [basketTitle, setBasketTitle] = useState("");

  const onClickAddBasket = () => {
    setIsAdd((prev) => !prev);
  };
  const onChangeAddBasket = (event) => {
    setBasketTitle(event.target.value);
    console.log(basketTitle);
  };
  const basketId = dbservice.collection("basket").doc().id;
  const value = {
    basketId: basketId,
    title: basketTitle,
    createdAt: new Date(),
  };
  const onClickCreateBasket = async () => {
    try {
      await dbservice.collection("basket").doc(basketId).set(value);
      setIsAdd(false);
      props.basketDetail.current?.focus();
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  return (
    <BasketWritePageUI
      isAdd={isAdd}
      onClickAddBasket={onClickAddBasket}
      onClickCreateBasket={onClickCreateBasket}
      onChangeAddBasket={onChangeAddBasket}
    />
  );
};

export default BasketWritePage;
