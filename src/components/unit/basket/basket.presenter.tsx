import BasketWritePage from "./basketWrite/basketWrite.container";
import { MainWrapper } from "./basket.styles";
import BasketDetailPage from "./basketDetail/basketDetail.container";
export default function BasketUI(props) {
  return (
    <MainWrapper>
      {props.value?.docs.map((doc) => (
        <BasketDetailPage
          key={doc.id}
          doc={doc}
          ref={props.basketDetail}
          onClickBasketUpdate={props.onClickBasketUpdate}
        />
      ))}
      <BasketWritePage basketDetail={props.basketDetail} />
    </MainWrapper>
  );
}
