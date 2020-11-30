import React from "react";
import JVToolTab from "@/components/JVToolTab";
import JVToolTabPane from "@/components/JVToolTab/JVToolTabPane";
import { SettingOutlined } from "@ant-design/icons";
import JVAttTools from "./JVAttTools";

import "./index.less";

export default React.memo(() => {
  return (
    <JVToolTab width={350}>
      <JVToolTabPane
        title="设置"
        id="tab-1"
        icon={<SettingOutlined style={{ fontSize: "20px" }} />}
      >
        <JVAttTools></JVAttTools>
      </JVToolTabPane>
      <JVToolTabPane
        title="1111"
        id="tab-3"
        icon={<SettingOutlined style={{ fontSize: "20px" }} />}
      >
        fdafdaf
      </JVToolTabPane>
    </JVToolTab>
  );
});
