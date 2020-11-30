// container
export const DEFAULT_CONTAINER = "defaultContainer";

// component
export const INPUT = "input";
export const SELECT = "select";
export const RADIO = "radio";
export const CHECKBOX = "checkbox";
export const DATEFIELD = "datefield";
export const INPUTNUMBER = "InputNumber";
export const BUTTON = "button";

export const TABLE = "table";
export const TAB = "tab";
export const TABPANE = "tabpane";
export const MODAL = "modal";

// chart
export const CHART_PIE = "chart_pie";
export const CHART_POLYLINE = "chart_polyline";

//
export const PAGE = "page";
export const APP = "app";

// 标识哪些组件可以拖拽排序
export const SORT_ACCEPT = [
  INPUT,
  SELECT,
  RADIO,
  CHECKBOX,
  DATEFIELD,
  INPUTNUMBER,
  BUTTON,
  TABLE,
  CHART_PIE,
  CHART_POLYLINE,
  DEFAULT_CONTAINER,
];

/**
 * 所有DefaultContainer可以接收得类型
 */
export const ACCEPT_ALL = [
  INPUT,
  SELECT,
  RADIO,
  CHECKBOX,
  DATEFIELD,
  CHART_PIE,
  CHART_POLYLINE,
  INPUTNUMBER,
  BUTTON,
  DEFAULT_CONTAINER,
  TABLE,
  TAB,
  MODAL,
];
