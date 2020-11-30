import React from "react";
import { Form, InputNumber } from "antd";
import { INPUTNUMBER } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const FormInputNumber = React.memo(({ vo, handleClick }) => {
  const { id, label, name, rules, placeholder } = vo;
  return (
    <Form.Item
      id={id}
      label={label}
      name={name}
      rules={rules}
      onClick={handleClick}
    >
      <InputNumber readOnly placeholder={placeholder}></InputNumber>
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
      type={INPUTNUMBER}
    >
      <FormInputNumber></FormInputNumber>
    </JVDragColWrapper>
  );
});
