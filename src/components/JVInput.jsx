import React from "react";
import { Form, Input } from "antd";
import { INPUT } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const FormInput = React.memo(({ vo, handleClick }) => {
  const { id, label, name, rules, placeholder } = vo;
  return (
    <Form.Item
      id={id}
      label={label}
      name={name}
      rules={rules}
      onClick={handleClick}
    >
      <Input readOnly placeholder={placeholder} />
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
      type={INPUT}
    >
      <FormInput></FormInput>
    </JVDragColWrapper>
  );
});
