import React from "react";
import { Form, DatePicker } from "antd";
import { DATEFIELD } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const FormDatePicker = React.memo(({ vo, handleClick }) => {
  const { id, label, name, rules, placeholder } = vo;
  return (
    <Form.Item
      id={id}
      label={label}
      name={name}
      rules={rules}
      onClick={handleClick}
    >
      <DatePicker readOnly placeholder={placeholder}></DatePicker>
    </Form.Item>
  );
});

export default React.memo(({ vo, column, moveVo, findVo }) => {
  return (
    <JVDragColWrapper
      vo={vo}
      column={column}
      moveVo={moveVo}
      findVo={findVo}
      type={DATEFIELD}
    >
      <FormDatePicker></FormDatePicker>
    </JVDragColWrapper>
  );
});
