import React from 'react'
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {

  const isNegative = value < 0;

  const monetaryValue = 'R$' + value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
        <C.Total negative={isNegative}>{monetaryValue}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
