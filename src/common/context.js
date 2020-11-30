import React from "react";

/**
 * App 级Context
 */
export const AppContext = React.createContext({
  appId: "",
  pages: [],
  selectPage: {}, // 选中页面
  selectTab: {}, // 选中得页签，当选择页面时和selectPage相等
  setSelectTab: () => {},
});

/**
 * Page 级Context
 */
export const PageContext = React.createContext({
  pageId: "",
  pageTitle: "",
  vos: [], // 当前vo数据
  setVos: () => {},
  selectedVo: {}, // 当前选中vo
  setSelectedVo: () => {}, // 设置选中vo
  changeVoAttValue: () => {}, // 修改vo属性
  updateVo: () => {},
});
