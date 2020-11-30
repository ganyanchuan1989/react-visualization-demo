import React, { useContext } from "react";
import { Form, Input } from "antd";
import { PageContext } from "@/common/context";

// 过滤属性
const FILTER_ATT = ["id", "type"];

export default React.memo(() => {
  const { selectedVo, changeVoAttValue } = useContext(PageContext);
  const attComps = [];

  const attChangeAtt = (val, key) => {
    selectedVo[key] = val;
    changeVoAttValue(selectedVo);
  };

  for (const key in selectedVo) {
    // 过滤类型。TODO：未来特殊类型需要优化
    if (
      typeof selectedVo[key] === "string" ||
      typeof selectedVo[key] === "number" ||
      typeof selectedVo[key] === "undefined"
    ) {
      if (FILTER_ATT.filter((fKey) => fKey === key).length > 0) {
        // 过滤字段
        continue;
      }
      attComps.push(
        <Form.Item label={key} key={key}>
          <Input
            value={selectedVo[key]}
            onChange={(e) => {
              attChangeAtt(e.target.value, key);
            }}
          ></Input>
        </Form.Item>
      );
    }
  }
  return <div className="jv-right-tool-tool-att">{attComps}</div>;
});
