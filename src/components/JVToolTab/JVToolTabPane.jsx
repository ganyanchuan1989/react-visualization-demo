import React from "react";

export default React.memo(({ children }) => {
  return <div style={{ width: "100%" }}>{children}</div>;
});
