import React from "react";
import { Form, Radio } from "antd";
import { RADIO } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const FormRaido = React.memo(({ vo, handleClick }) => {
  const { id, label, name, rules, options } = vo;
  return (
    <Form.Item
      id={id}
      label={label}
      name={name}
      rules={rules}
      onClick={handleClick}
    >
      <Radio.Group readOnly>
        {options &&
          options.map((option) => {
            return <Radio value={option} key={`r-${option}`}>{option}</Radio>;
          })}
      </Radio.Group>
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
      type={RADIO}
    >
      <FormRaido></FormRaido>
    </JVDragColWrapper>
  );
});

