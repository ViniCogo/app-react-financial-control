import React from 'react'
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {

  const isNegative = value < 0;
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      {isNegative ? (
        <C.NegativeTotal>{value}</C.NegativeTotal>
      ) : (
        <C.Total>R$ {value}</C.Total>
      )}
    </C.Container>
  );
};

export default ResumeItem;
