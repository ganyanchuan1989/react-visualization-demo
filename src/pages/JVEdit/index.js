import React, { useState } from "react";
import update from "immutability-helper";
// import _ from "lodash";
import JVMain from "./JVMain";
import JVLeftTool from "./JVLeftTool";
import JVRightTool from "./JVRightTool";
import { PageContext } from "@/common/context";

import "./index.less";

/**
 * JV visual Visual
 */
export default React.memo(({ pVo }) => {
  const { vos: initVos, pageId, title: pageTitle } = pVo;
  const vo_id_map = {};
  const [vos, setVos] = useState(initVos);
  const [selectedVo, setSelectedVo] = useState({});

  const setVosHandle = (vos) => {
    setVos(vos);
    vos.forEach((vo) => {
      vo_id_map[vo.id] = vo;
    });
  };
  const changeVoAttValue = (vo) => {
    const newVo = Object.assign({}, vo);
    setSelectedVo(newVo);
    updateVo(newVo);
  };

  const updateVo = (vo) => {
    let obj = { comps: [...vos] };
    recursiveUpdateVo(obj, vo);
    setVos(obj.comps);
  };

  // const updateVo = useCallback(
  //   // _.throttle((vo) => {
  //   //   console.log('updatevo')
  //   //   let obj = { comps: vos };
  //   //   recursiveUpdateVo(obj, vo);
  //   //   setVos(obj.comps);
  //   // }, 200),
  //   (vo) => {
  //     console.log("updatevo", vos);
  //     let obj = { comps: vos };
  //     recursiveUpdateVo(obj, vo);
  //     setVos(obj.comps);
  //   },
  //   []
  // );
  const recursiveUpdateVo = (obj, vo) => {
    for (let i = 0; i < obj.comps.length; i++) {
      if (vo.id === obj.comps[i].id) {
        obj.comps = update(obj.comps, {
          $splice: [
            // [index, 1],
            [i, 1, vo],
          ],
        });
        return;
      }
      if (obj.comps[i].hasOwnProperty("comps")) {
        return recursiveUpdateVo(obj.comps[i], vo);
      }
    }
  };

  const setSelectedVoHandle = (vo) => {
    setSelectedVo(vo);
  };

  return (
    <div className="visual-visual-container">
      <div className="visual-visual-nav">
        <span>React 可视化设计工具</span>
      </div>
      <div className="visual-visual-edit">
        <PageContext.Provider
          value={{
            vos,
            setVos: setVosHandle,
            selectedVo,
            setSelectedVo: setSelectedVoHandle,
            changeVoAttValue,
            updateVo,
            pageId: pageId,
            pageName: pageTitle,
          }}
        >
          <JVLeftTool></JVLeftTool>
          <JVMain style={{ flex: 1 }}></JVMain>
          <JVRightTool></JVRightTool>
        </PageContext.Provider>
      </div>
    </div>
  );
});
