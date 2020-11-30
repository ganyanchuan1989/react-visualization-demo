import React from "react";
import { Form, Table } from "antd";
import { TABLE } from "@/common/ItemTypes";
import JVDragColWrapper from "./JVDragColWrapper";

const FormTable = React.memo(({ vo, handleClick }) => {
  const { id, columns, dataSource } = vo;
  return (
    <Form.Item id={id} onClick={handleClick}>
      <Table dataSource={dataSource} columns={columns} />
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
      type={TABLE}
    >
      <FormTable></FormTable>
    </JVDragColWrapper>
  );
});
