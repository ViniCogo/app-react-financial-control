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
        <C.Total negative={isNegative}>R$ {value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
