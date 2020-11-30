import React from "react";
import ToolsContainer from "./ToolsContainer";
import { DEFAULT_CONTAINER } from "@/common/ItemTypes";

const TOOLS_DATA = [
  { id: "jvc-1", label: "单栏", itemType: DEFAULT_CONTAINER, column: 1 },
  { id: "jvc-2", label: "双栏", itemType: DEFAULT_CONTAINER, column: 2 },
  { id: "jvc-3", label: "三栏", itemType: DEFAULT_CONTAINER, column: 3 },
];
export default React.memo(() => {
  return (
    <div>
      <ToolsContainer tools={TOOLS_DATA}></ToolsContainer>
    </div>
  );
});
