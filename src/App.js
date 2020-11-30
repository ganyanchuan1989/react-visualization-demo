import React, { useState } from "react";
import JVEdit from "./pages/JVEdit";
import { AppVO, PageVO, DefaultContainerVO } from "@/common/vo";
import { AppContext } from "@/common/context";

import { PAGE, ACCEPT_ALL } from "@/common/ItemTypes";

const mockData = () => {
  const dVo1 = new DefaultContainerVO({ accept: ACCEPT_ALL });
  const pVo1 = new PageVO({ vos: [dVo1] });

  const dVo2 = new DefaultContainerVO({ accept: ACCEPT_ALL });
  const pVo2 = new PageVO({ vos: [dVo2] });

  const aVo = new AppVO({ pages: [pVo1, pVo2] });
  return aVo;
};

const appVo = mockData();

export default React.memo(() => {
  const { appId, pages } = appVo;
  const defaultSelectPage = pages && pages[0];

  const [selectPage, setSelectPage] = useState(defaultSelectPage);
  const [selectTab, setSelectTab] = useState(defaultSelectPage);

  const selectPageCom = pages.map((pVo) => {
    if (pVo.pageId === selectPage.pageId) {
      return <JVEdit key={pVo.pageId} pVo={pVo}></JVEdit>;
    }
    return null;
  });

  const selSelectTabHandle = (vo) => {
    if (vo.type === PAGE) {
      setSelectPage(vo);
      setSelectTab(vo);
    } else {
      setSelectTab(vo);
    }
  };

  return (
    <AppContext.Provider
      value={{
        appId,
        pages,
        selectPage,
        selectTab,
        setSelectTab: selSelectTabHandle,
      }}
    >
      {selectPageCom}
    </AppContext.Provider>
  );
});
