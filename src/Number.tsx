import React from "react";
import styled from "styled-components";

//=> 이렇게 쓰면 component의 interface와 헷갈리니까 stylecomponent는 한번에 쓰도록 한다
// interface IContainerProps{
//   isBlue: boolean
// }
// const Container = styled.span<IContainerProps>` //밖에 정의해서 가져와서 쓰기 
const Container = styled.span<{ isBlue:boolean }>` /* 한번에 정의하기 */
  color:${props=> (props.isBlue ? props.theme.blueColor : "black")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
);

export default Number;
