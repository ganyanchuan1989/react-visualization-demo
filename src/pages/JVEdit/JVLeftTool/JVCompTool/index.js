import React from "react";

import JVContainerTools from "./JVContainerTools";
import JVComponentTools from "./JVComponentTools";
import JVChartTools from "./JVChartTools";
import "./index.less";

import { Collapse } from "antd";
const { Panel } = Collapse;

export default React.memo(({ style }) => {
  return (
    <div style={style} className="jv-comp-tool-container">
      <Collapse defaultActiveKey={["p-1", "p-2", "p-3"]}>
        <Panel header="容器" key="p-1">
          <JVContainerTools></JVContainerTools>
        </Panel>
        <Panel header="组件" key="p-2">
          <JVComponentTools></JVComponentTools>
        </Panel>
        <Panel header="图表" key="p-3">
          <JVChartTools></JVChartTools>
        </Panel>
      </Collapse>
    </div>
  );
});
