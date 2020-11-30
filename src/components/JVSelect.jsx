import React from "react";
import { Form, Select } from "antd";
import { SELECT } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const { Option } = Select;

const FormSelect = React.memo(({ vo, handleClick }) => {
  const { id, label, name, rules, options, placeholder } = vo;
  return (
    <Form.Item
      id={id}
      label={label}
      name={name}
      rules={rules}
      onClick={handleClick}
    >
      <Select readOnly placeholder={placeholder}>
        {options &&
          options.map((option) => {
            return (
              <Option key={`s-${option}`} value={option}>
                {option}
              </Option>
            );
          })}
      </Select>
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
      type={SELECT}
    >
      <FormSelect></FormSelect>
    </JVDragColWrapper>
  );
});
