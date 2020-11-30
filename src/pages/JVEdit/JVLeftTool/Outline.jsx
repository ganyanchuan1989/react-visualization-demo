import React, { useContext, useState } from "react";
import { AppContext } from "@/common/context";
import { Tree, Modal, Input, Form } from "antd";
import { DownOutlined, PlusOutlined } from "@ant-design/icons";
import { TAB, MODAL, PAGE } from "@/common/ItemTypes";
import { TabPaneVO, PageVO } from "@/common/vo";

export default React.memo(() => {
  const [newTabVisible, setNewTabVisible] = useState(false);
  const [newTabTitle, setNewTabTitle] = useState("");

  const { pages, selectPage, selectTab, setSelectTab } = useContext(AppContext);

  const recursiveTabNode = (dVo, pageNode) => {
    if (dVo.comps && dVo.comps.length > 0) {
      dVo.comps.forEach((uVo) => {
        if (uVo.type === TAB) {
          const tabNode = { ...uVo, key: uVo.id, children: [] };
          uVo.tabs.forEach((tabVo) => {
            const tabChildNode = { ...tabVo, key: tabVo.id };
            tabNode.children.push(tabChildNode);
          });

          pageNode.children.push(tabNode);
        } else if (uVo.type === MODAL) {
          const tabNode = { ...uVo, key: uVo.id };
          pageNode.children.push(tabNode);
        }
      });
    }
  };

  const rootData = {
    title: "所有页面",
    key: "root",
    type: "root",
    children: [],
  };
  pages.forEach((page) => {
    const pageNode = { ...page, key: page.pageId, children: [] };
    rootData.children.push(pageNode);
    if (selectPage.pageId === page.pageId) {
      // TODO: 这里需要优化， 目前没有深度递归
      if (page.vos && page.vos.length > 0) {
        recursiveTabNode(page.vos[0], pageNode);
      }
    }
  });
  const treeData = [rootData];
  const treeSelectHandle = (node) => {
    setSelectTab(node);
  };

  const titleRenderHandle = (node) => {
    if (node.type === TAB || node.type === "root") {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            treeSelectHandle(node);
          }}
        >
          <span style={{ flex: 1 }}>{node.title}</span>
          <PlusOutlined
            style={{ width: "20px" }}
            onClick={() => {
              setNewTabVisible(true);
            }}
          />
        </div>
      );
    } else if (node.pageId) {
      return (
        <div
          onClick={() => {
            treeSelectHandle(node);
          }}
        >
          {node.title}
        </div>
      );
    } else {
      return (
        <div
          onClick={() => {
            treeSelectHandle(node);
          }}
        >
          {node.title}
        </div>
      );
    }
  };

  const handleOk = () => {
    if (selectTab.type === TAB) {
      const tabPaneVo = new TabPaneVO({ title: newTabTitle });
      selectTab.tabs.push(tabPaneVo);
      setSelectTab(tabPaneVo);
    } else if (selectTab.type === "root") {
      const pVo = new PageVO({ title: newTabTitle });
      pages.push(pVo);
      setSelectTab(pVo);
    }
    setNewTabTitle("");
    setNewTabVisible(false);
  };
  const handleCancel = () => {
    setNewTabTitle("");
    setNewTabVisible(false);
  };

  const selectedKeys =
    selectTab.type === PAGE ? [selectTab.pageId] : [selectTab.id];
  return (
    <div style={{ padding: "10px 0 0 0" }}>
      <Tree
        showLine
        blockNode
        defaultExpandAll
        switcherIcon={<DownOutlined />}
        treeData={treeData}
        selectedKeys={selectedKeys}
        titleRender={titleRenderHandle}
      />
      {/* TODO：仅处理了Tab */}
      <Modal
        title="新建"
        visible={newTabVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form.Item label="请输入名字">
          <Input
            value={newTabTitle}
            onChange={(e) => {
              setNewTabTitle(e.target.value);
            }}
          ></Input>
        </Form.Item>
      </Modal>
    </div>
  );
});
