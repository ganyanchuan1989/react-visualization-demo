import React from "react";
import ToolsContainer from "./ToolsContainer";

import {
  INPUT,
  SELECT,
  RADIO,
  CHECKBOX,
  DATEFIELD,
  INPUTNUMBER,
  BUTTON,
  TABLE,
  TAB,
  MODAL,
} from "@/common/ItemTypes";

const TOOLS_DATA = [
  { id: "jvcc-1", label: "输入框", itemType: INPUT },
  { id: "jvcc-2", label: "选择框", itemType: SELECT },
  { id: "jvcc-3", label: "单选框", itemType: RADIO },
  { id: "jvcc-4", label: "复选框", itemType: CHECKBOX },
  { id: "jvcc-5", label: "日期", itemType: DATEFIELD },
  { id: "jvcc-6", label: "数字", itemType: INPUTNUMBER },
  { id: "jvcc-7", label: "按钮", itemType: BUTTON },
  { id: "jvcc-8", label: "表格", itemType: TABLE },
  { id: "jvcc-9", label: "Tab", itemType: TAB },
  { id: "jvcc-10", label: "Modal", itemType: MODAL },
];

export default React.memo(() => {
  return <ToolsContainer tools={TOOLS_DATA}></ToolsContainer>;
});
