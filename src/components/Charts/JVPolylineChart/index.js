import React from "react";
import { Form } from "antd";
import { BUTTON } from "@/common/ItemTypes";
import JVDragColWrapper from "../../JVDragColWrapper";
import PolylineChart from "./PolylineChart";

const FormPolylineChart = React.memo(({ vo, handleClick }) => {
  const { id, name } = vo;
  return (
    <Form.Item id={id} name={name} onClick={handleClick}>
      <PolylineChart></PolylineChart>
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
      type={BUTTON}
    >
      <FormPolylineChart></FormPolylineChart>
    </JVDragColWrapper>
  );
});
