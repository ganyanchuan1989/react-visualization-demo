import React, { useContext } from "react";
// import { findDOMNode } from "react-dom";
import { Tabs } from "antd";
import { TAB } from "@/common/ItemTypes";
import DefaultContainer from "./DefaultContainer";
import JVDragColWrapper from "./JVDragColWrapper";
import { AppContext } from "@/common/context";

const { TabPane } = Tabs;

const FormTab = React.memo(({ vo, handleClick }) => {
  const { selectTab, setSelectTab } = useContext(AppContext);
  const { id, tabs } = vo;

  const tabPanes = tabs.map((tabPaneVo) => {
    const { title, id, dvo } = tabPaneVo;
    return (
      <TabPane tab={title} key={id}>
        <DefaultContainer vo={dvo}></DefaultContainer>
      </TabPane>
    );
  });

  const mySelfClickHandle = ({ target }) => {
    // const faComponent = findDOMNode(tabRef.current);
    if (target.getAttribute("class").indexOf("ant-tabs-nav-wrap") >= 0) {
      handleClick();
    }
  };

  const tabClickHandle = (key) => {
    setSelectTab(tabs.filter((tab) => tab.id === key)[0]);
  };

  const activeKey =
    tabs.filter((tab) => tab.id === selectTab.id).length > 0
      ? selectTab.id
      : tabs[0].id; // 设置默认

  return (
    <Tabs
      id={id}
      onClick={mySelfClickHandle}
      activeKey={activeKey}
      onTabClick={tabClickHandle}
    >
      {tabPanes}
    </Tabs>
  );
});

export default React.memo(({ vo, column, moveVo, findVo }) => {
  return (
    <JVDragColWrapper
      vo={vo}
      column={column}
      moveVo={moveVo}
      findVo={findVo}
      type={TAB}
    >
      <FormTab></FormTab>
    </JVDragColWrapper>
  );
});
