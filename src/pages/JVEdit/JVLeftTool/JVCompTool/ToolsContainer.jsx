import React from "react";
import { useDrag } from "react-dnd";
import { ExpandOutlined } from "@ant-design/icons";

import "./index.less";

const DragLi = ({ tool }) => {
  const { id, label, itemType, Icon } = tool;
  const [, drag] = useDrag({
    item: { ...tool, type: itemType, id, isTools: true }, // tools 标识从工具面板拖出
  });
  return (
    <li ref={drag} key={id}>
      {Icon ? (
        <Icon style={{ color: "#1890ff", fontSize: 16 }}></Icon>
      ) : (
        <ExpandOutlined style={{ color: "#1890ff", fontSize: 16 }} />
      )}
      <h5>{label}</h5>
    </li>
  );
};

export default React.memo(({ tools })=> {
  const toolsComp = tools.map((tool) => {
    return <DragLi tool={tool} key={tool.id}></DragLi>;
  });
  return <ul className="jv-comp-tool-tool-container">{toolsComp}</ul>;
});
