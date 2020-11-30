import { v4 as uuidv4 } from "uuid";
import {
  DEFAULT_CONTAINER,
  INPUT,
  SELECT,
  CHART_PIE,
  CHART_POLYLINE,
  RADIO,
  CHECKBOX,
  DATEFIELD,
  INPUTNUMBER,
  BUTTON,
  TABLE,
  TAB,
  MODAL,
  APP,
  PAGE,
  TABPANE,
  ACCEPT_ALL,
} from "./ItemTypes";

/**
 * 数据结构设计说明
 *  AppVo
 *    - PageVo
 *      - DefaultContainerVO
 *        - FormVO
 *        - DefaultContainerVO
 *
 */

let fieldCount = 1;
let pageCount = 1;
let modalCount = 1;
let tabCount = 1;

export class VO {
  constructor({ id, type }) {
    this.id = id || uuidv4();
    this.type = type;
  }
}

export class AppVO {
  constructor({ appId, pages }) {
    this.type = APP;
    this.appId = appId || uuidv4();
    this.pages = pages || []; // PageVO list
  }
}

/**
 * 页面数据VO
 *  */
export class PageVO {
  constructor({ pageId, vos, title }) {
    this.type = PAGE;
    this.pageId = pageId || uuidv4();
    this.vos = vos || [new DefaultContainerVO({accept: ACCEPT_ALL})]; // DefaultContainerVO list
    this.title = title || `页面${pageCount}`;
    pageCount++;
  }
}

export class DefaultContainerVO extends VO {
  constructor({ id, column, accept }) {
    super({ id, type: DEFAULT_CONTAINER });
    this.column = column || 1; // 分栏：默认1列
    this.comps = []; // 子组件
    this.accept = accept || [
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
      // MODAL, // 仅第一层可以增加
    ];
  }
}

export class FormVo extends VO {
  constructor({ id, type, name, label, span, rules, placeholder }) {
    super({ id, type });
    this.name = name || `field-${fieldCount}`;
    this.label = label || `字段${fieldCount}`;
    this.span = span;
    this.rules = rules || [];
    this.placeholder = placeholder || `请输入${this.label}`;
    this.rules = rules || [{ required: true, message: `请输入${this.label}` }];
    fieldCount++;
  }
}

export class InputVO extends FormVo {
  constructor({ id, name, label, span, rules }) {
    super({ id, type: INPUT, name, rules, label, span });
  }
}

export class SelectVO extends FormVo {
  constructor({ id, name, label, span, rules }) {
    super({ id, type: SELECT, name, span, label, rules });
    this.options = ["选项1", "选项2", "选项3"];
  }
}

export class RadioVO extends FormVo {
  constructor({ id, name, label, span, rules }) {
    super({ id, type: RADIO, name, span, label, rules });
    this.options = ["选项1", "选项2", "选项3"];
  }
}

export class CheckboxVO extends FormVo {
  constructor({ id, name, label, span, rules }) {
    super({ id, type: CHECKBOX, name, span, label, rules });
    this.options = ["选项1", "选项2", "选项3"];
  }
}

export class DateFieldVO extends FormVo {
  constructor({ id, name, label, span, rules }) {
    super({ id, type: DATEFIELD, name, span, label, rules });
    this.formatString = "YYYY-MM-DD";
  }
}

export class InputNumberVO extends FormVo {
  constructor({ id, name, label, span, rules }) {
    super({ id, type: INPUTNUMBER, name, span, label, rules });
  }
}

export class ButtonVO extends FormVo {
  constructor({ id, label, span }) {
    super({ id, type: BUTTON, span, label: label || "按钮" });
  }
}

export class TableVO extends FormVo {
  constructor({ id, span }) {
    super({ id, type: TABLE, span });

    this.columns = [];
    let obj = {};
    for (let i = 0; i < 10; i++) {
      const field = `field${i}`;
      this.columns.push({ title: field, dataIndex: field, key: field });
      obj[field] = field;
    }
    this.dataSource = [obj];
  }
}

export class TabPaneVO extends VO {
  constructor({ id, title, dvo }) {
    super({ id, type: TABPANE });
    this.title = title || "叶子节点";
    this.dvo = dvo || new DefaultContainerVO({});
  }
}

export class TabVO extends FormVo {
  constructor({ id, span, title }) {
    super({ id, type: TAB, span });
    this.tabs = [
      new TabPaneVO({ title: "子页签2" }),
      new TabPaneVO({ title: "子页签1" }),
    ];
    this.title = title || `页签${tabCount}`; // 左侧Tree显示label

    tabCount++;
  }
}

export class ModalVO extends FormVo {
  constructor({ id, span, width, dVo, visible, title }) {
    super({ id, type: MODAL, span });
    this.dVo = dVo || new DefaultContainerVO({}); // 容器
    this.visible = visible || true;
    this.width = width || 600;
    this.title = title || `弹框${modalCount}`; // 左侧Tree显示label

    modalCount++;
  }
}

export class ChartVO extends VO {
  constructor({ id, type }) {
    super({ id, type });
  }
}

export class PieChartVo extends VO {
  constructor({ id }) {
    super({ id, type: CHART_PIE });
  }
}

export class PolyLineChartVo extends VO {
  constructor({ id }) {
    super({ id, type: CHART_POLYLINE });
  }
}

export const generateVO = (item) => {
  let vo = null;
  const { type, column } = item;
  if (type === DEFAULT_CONTAINER) {
    vo = new DefaultContainerVO({ column: column || 1 });
  } else if (item.type === INPUT) {
    vo = new InputVO({});
  } else if (item.type === SELECT) {
    vo = new SelectVO({});
  } else if (item.type === RADIO) {
    vo = new RadioVO({});
  } else if (item.type === CHECKBOX) {
    vo = new CheckboxVO({});
  } else if (item.type === DATEFIELD) {
    vo = new DateFieldVO({});
  } else if (item.type === CHART_PIE) {
    vo = new PieChartVo({});
  } else if (item.type === CHART_POLYLINE) {
    vo = new PolyLineChartVo({});
  } else if (item.type === INPUTNUMBER) {
    vo = new InputNumberVO({});
  } else if (item.type === BUTTON) {
    vo = new ButtonVO({});
  } else if (item.type === TABLE) {
    vo = new TableVO({});
  } else if (item.type === TAB) {
    vo = new TabVO({});
  } else if (item.type === MODAL) {
    vo = new ModalVO({});
  }

  return vo;
};
