import BasketWritePage from "./basketWrite/basketWrite.container";
import { MainWrapper } from "./basket.styles";
import BasketDetailPage from "./basketDetail/basketDetail.container";
export default function BasketUI() {
  return (
    <MainWrapper>
      <BasketDetailPage />
      <BasketWritePage />
    </MainWrapper>
  );
}
