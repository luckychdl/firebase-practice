import Item from "../../item/item.container";
import {
  SubWrapper,
  BasketTitle,
  Wrapper,
  AddBasket,
} from "./basketDetail.styles";
const BasketDetailPageUI = (props) => {
  return (
    <>
      <div style={{ width: "60px", backgroundColor: "aqua", color: "aqua" }}>
        asd
      </div>
      {props.value?.docs.map((doc) => (
        <SubWrapper key={doc.id}>
          <Wrapper>
            <BasketTitle>{doc.data().title}</BasketTitle>
            <Item />
            <AddBasket>+ Add item</AddBasket>
          </Wrapper>
        </SubWrapper>
      ))}
    </>
  );
};

export default BasketDetailPageUI;
