import styled from "@emotion/styled";

export default function LargeButton(props) {
  const Button = styled.div`
    background-color: red;
    width: 160px;
    height: 36px;

    line-height: 36px;
    text-align: center;
  `;

  return <Button onClick={props.onClick}>{props.buttonName}</Button>;
}
