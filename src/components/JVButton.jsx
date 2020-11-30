import React from "react";
import { Form, Button } from "antd";
import { BUTTON } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const FormButton = React.memo(({ vo, handleClick }) => {
  const { id, label, name } = vo;
  return (
    <Form.Item id={id} name={name} onClick={handleClick}>
      <Button htmlType="submit">{label}</Button>
    </Form.Item>
  );
});

export default React.memo(({ vo, column, moveVo, findVo }) => {
  return (
    <JVDragColWrapper vo={vo} column={column} moveVo={moveVo} findVo={findVo} type={BUTTON}>
      <FormButton></FormButton>
    </JVDragColWrapper>
  );
});