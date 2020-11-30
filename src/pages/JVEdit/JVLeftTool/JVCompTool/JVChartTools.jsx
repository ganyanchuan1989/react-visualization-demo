import React from "react";
import ToolsContainer from "./ToolsContainer";
import { PieChartOutlined, LineChartOutlined } from "@ant-design/icons";

import { CHART_PIE, CHART_POLYLINE } from "@/common/ItemTypes";

const TOOLS_DATA = [
  {
    id: "jvchart-1",
    label: "饼图",
    itemType: CHART_PIE,
    Icon: PieChartOutlined,
  },
  {
    id: "jvchart-2",
    label: "折线图",
    itemType: CHART_POLYLINE,
    Icon: LineChartOutlined,
  },
];

export default React.memo(() => {
  return (
    <ToolsContainer tools={TOOLS_DATA}></ToolsContainer>
  );
});
