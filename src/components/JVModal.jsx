import React, { useContext } from "react";
import { Modal } from "antd";
import DefaultContainer from "./DefaultContainer";
import { AppContext } from "@/common/context";

export default React.memo(({ vo }) => {
  const { selectTab, setSelectTab } = useContext(AppContext);
  const { dVo, width } = vo;
  const handleOk = (e) => {
    setSelectTab({});
  };

  const handleCancel = (e) => {
    setSelectTab({});
  };

  return (
    <Modal
      visible={selectTab.id === vo.id}
      title="Modal"
      width={width}
      mask={false}
      style={{ pointerEvents: "none" }}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <DefaultContainer vo={dVo}></DefaultContainer>
    </Modal>
  );
});
