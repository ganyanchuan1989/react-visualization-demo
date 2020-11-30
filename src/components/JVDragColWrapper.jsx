import React, { useContext } from "react";
import { Col } from "antd";
import { PageContext } from "@/common/context";
import { useDragFactory } from "./drag-factory";

export default React.memo(
  ({ vo, type, column, moveVo, findVo, children }) => {
    const { setSelectedVo } = useContext(PageContext);
    const { id, span } = vo;
    const [{ opacity, background }, drag, drop] = useDragFactory({
      id,
      findVo,
      moveVo,
      type,
      vo,
    });

    const handleClick = (e) => {
      setSelectedVo(vo);
    };

    const childrenWithProps =
      children &&
      React.Children.map(children, (child) => {
        return React.cloneElement(child, { vo, handleClick });
      });

    return (
      <Col
        ref={(node) => drag(drop(node))}
        span={span || 24 / column}
        style={{ opacity, background }}
      >
        {childrenWithProps}
      </Col>
    );
  }
);
