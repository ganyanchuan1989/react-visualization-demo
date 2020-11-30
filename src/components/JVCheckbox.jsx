import React from "react";
import { Form, Checkbox } from "antd";
import { CHECKBOX } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const FormCheckBox = React.memo(({ vo, handleClick }) => {
  const { id, label, name, rules, options } = vo;
  return (
    <Form.Item
      id={id}
      label={label}
      name={name}
      rules={rules}
      onClick={handleClick}
    >
      <Checkbox.Group options={options} />
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
      type={CHECKBOX}
    >
      <FormCheckBox></FormCheckBox>
    </JVDragColWrapper>
  );
});
