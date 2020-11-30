import React, { useState } from "react";
import "./index.less";

export default React.memo(({ children, defaultTabId, width }) => {
  const [selectTabId, setSelectedTabId] = useState(defaultTabId);

  const changeSelectTab = (id) => {
    if (selectTabId === id) {
      setSelectedTabId(null);
    } else {
      setSelectedTabId(id);
    }
  };
  const ToolLi = [];
  let selectTab = null;
  children &&
    children.forEach((child) => {
      const { title, id, icon } = child.props;

      ToolLi.push(
        <li
          key={id}
          onClick={() => {
            changeSelectTab(id);
          }}
          style={{ backgroundColor: id === selectTabId ? "#fff" : "#3a3f51" }}
        >
          {icon}
          {title}
        </li>
      );
      if (id === selectTabId) {
        selectTab = child;
      }
    });

  const style = { width: selectTab ? `${width}px` : "50px" };
  return (
    <div className="visual-jvtab" style={style}>
      <ul>{ToolLi}</ul>
      <div className="visual-jvtab-pane">{selectTab}</div>
    </div>
  );
});
