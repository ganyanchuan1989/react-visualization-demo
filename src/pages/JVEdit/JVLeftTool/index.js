import React from "react";
import "./index.less";
import JVToolTab from "@/components/JVToolTab";
import JVToolTabPane from "@/components/JVToolTab/JVToolTabPane";
import { PicRightOutlined, AppstoreAddOutlined } from "@ant-design/icons";
import Outline from "./Outline";
import JVCompTool from "./JVCompTool";


export default React.memo(() => {
  return (
    <JVToolTab width={280} defaultTabId="tab-1">
      <JVToolTabPane
        title="大纲"
        id="tab-1"
        icon={<PicRightOutlined style={{ fontSize: "20px" }} />}
      >
        <Outline></Outline>
      </JVToolTabPane>
      <JVToolTabPane
        title="组件"
        id="tab-2"
        icon={<AppstoreAddOutlined style={{ fontSize: "20px" }} />}
      >
        <JVCompTool></JVCompTool>
      </JVToolTabPane>
    </JVToolTab>
  );
});
