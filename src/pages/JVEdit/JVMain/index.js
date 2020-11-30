import React, { useContext } from "react";
import DefaultContainer from "@/components/DefaultContainer";
import { DEFAULT_CONTAINER } from "@/common/ItemTypes";
import { PageContext } from "@/common/context";

import { Form } from "antd";
import "./index.less";

export default React.memo(({ style }) => {
  const { vos } = useContext(PageContext);

  const vo2Comps = vos.map((vo) => {
    if (vo.type === DEFAULT_CONTAINER) {
      return <DefaultContainer vo={vo} key={vo.id}></DefaultContainer>;
    }
    return null;
  });

  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <div style={{ ...style, }}>
      <div className="jv-main-container" style={{ height: "100%" }}>
        <h3>展示</h3>
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ height: "100%" }}
        >
          <div style={{ height: "100%", overflow: "scroll" }}>
            {vo2Comps}
          </div>
        </Form>
      </div>
    </div>
  );
});
