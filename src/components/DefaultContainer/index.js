import React, { useContext, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import update from "immutability-helper";
import { Row } from "antd";
import { useDrop, useDrag } from "react-dnd";
import { AppContext, PageContext } from "@/common/context";
import { generateVO } from "@/common/vo";

import {
  INPUT,
  SELECT,
  CHART_PIE,
  CHART_POLYLINE,
  RADIO,
  CHECKBOX,
  DATEFIELD,
  INPUTNUMBER,
  BUTTON,
  DEFAULT_CONTAINER,
  TABLE,
  TAB,
  MODAL,
} from "@/common/ItemTypes";
import JVInput from "../JVInput";
import JVSelect from "../JVSelect";
import JVDateField from "../JVDateField";
import JVCheckbox from "../JVCheckbox";
import JVRadio from "../JVRadio";
import JVInputNumber from "../JVInputNumber";
import JVButton from "../JVButton";
import JVTable from "../JVTable";
import JVTab from "../JVTab";
import JVModal from "../JVModal";
import JVPieChart from "../Charts/JVPieChart";
import JVPolylineChart from "../Charts/JVPolylineChart";

import "./index.less";

function DefaultContainer({ vo, findVo: findVoParent, moveVo: moveVoParent }) {
  const [isMouseOver, setIsMouseOver] = useState(false); // 鼠标移动
  const { setSelectedVo, updateVo } = useContext(PageContext);
  const { setSelectTab } = useContext(AppContext);
  const dropHandle = (item) => {
    const gVo = generateVO(item);
    vo.comps = update(comps, { $push: [gVo] });
    updateVo(vo);
    // TODO: 默认选中
    if (gVo.type === MODAL) {
      setSelectTab(gVo);
    }
  };
  const [{ isDragging }, connectDrag] = useDrag({
    item: { type: DEFAULT_CONTAINER, id: vo.id }, // id, originalIndex
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const { accept } = vo;
  const [{ isDragOver }, connectDrop] = useDrop({
    accept,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        // 父节点
        return;
      }
      if (item.isTools) {
        dropHandle(item);
      }
      return;
    },
    collect: (monitor) => {
      const isTools = monitor.getItem() ? monitor.getItem().isTools : false;
      return {
        isDragOver: monitor.isOver({ shallow: true }) && isTools,
        // canDrop: monitor.canDrop(),
        // itemType: monitor.getItemType(),
        // item: monitor.getItem(),
      };
    },
    hover(item) {
      const draggedId = item.id;

      if (findVoParent) {
        if (draggedId !== vo.id) {
          const { index: overIndex } = findVoParent(vo.id);
          moveVoParent(draggedId, overIndex);
        }
      }
    },
  });

  const moveVo = (id, atIndex) => {
    const { cvo, index } = findChildVo(id);
    if (index === -1) return;
    const { comps } = vo;
    vo.comps = update(comps, {
      $splice: [
        [index, 1],
        [atIndex, 0, cvo],
      ],
    });
    updateVo(vo);
  };
  const findChildVo = (id) => {
    for (let i = 0; i < vo.comps.length; i++) {
      if (id === vo.comps[i].id) {
        return { cvo: vo.comps[i], index: i };
      }
    }

    return { cvo: null, index: -1 };
  };

  const { column, comps } = vo;
  const voComps = comps.map((vo) => {
    if (vo.type === INPUT) {
      return (
        <JVInput
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVInput>
      );
    } else if (vo.type === SELECT) {
      return (
        <JVSelect
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVSelect>
      );
    } else if (vo.type === RADIO) {
      return (
        <JVRadio
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVRadio>
      );
    } else if (vo.type === CHECKBOX) {
      return (
        <JVCheckbox
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVCheckbox>
      );
    } else if (vo.type === DATEFIELD) {
      return (
        <JVDateField
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVDateField>
      );
    } else if (vo.type === CHART_PIE) {
      return (
        <JVPieChart
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVPieChart>
      );
    } else if (vo.type === CHART_POLYLINE) {
      return (
        <JVPolylineChart
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVPolylineChart>
      );
    } else if (vo.type === INPUTNUMBER) {
      return (
        <JVInputNumber
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVInputNumber>
      );
    } else if (vo.type === BUTTON) {
      return (
        <JVButton
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVButton>
      );
    } else if (vo.type === TABLE) {
      return (
        <JVTable
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVTable>
      );
    } else if (vo.type === DEFAULT_CONTAINER) {
      return (
        <DefaultContainer
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></DefaultContainer>
      );
    } else if (vo.type === TAB) {
      return (
        <JVTab
          key={vo.id}
          vo={vo}
          column={column}
          findVo={findChildVo}
          moveVo={moveVo}
        ></JVTab>
      );
    } else if (vo.type === MODAL) {
      return (
        <JVModal
          key={vo.id}
          vo={vo}
          // column={column}
          // findVo={findChildVo}
          // moveVo={moveVo}
        ></JVModal>
      );
    }
    return <li>{vo.text}</li>;
  });

  const handleClick = (e) => {
    // const faComponent = findDOMNode(ref.current);
    // setIsMouseOver(faComponent === target);
    if (e.target.id === vo.id) {
      setSelectedVo(vo); // 设置选中项
    }
  };

  const mouseMoveHandle = ({ target }) => {
    const faComponent = findDOMNode(ref.current);
    setIsMouseOver(faComponent === target);
  };
  const mouseOutHandle = ({ target }) => {
    // const faComponent = findDOMNode(ref.current);
    // if (faComponent) {
    //   const isChild = faComponent.contains(target);
    //   console.log(isChild)
    // }
    setIsMouseOver(false);
  };

  const ref = useRef(null);
  connectDrag(connectDrop(ref));

  const opacity = isDragging ? 0.3 : 1;
  return (
    <div
      onMouseMove={mouseMoveHandle}
      onMouseOut={mouseOutHandle}
      ref={ref}
      className="jv-components-default-container"
      id={vo.id}
      onClick={handleClick}
      style={{
        border: isDragOver ? "1px dashed red" : "1px dashed #ccc",
        backgroundColor: isDragging
          ? "#fa8c16"
          : isMouseOver
          ? "#e6fffb"
          : "#fff",
        opacity,
      }}
    >
      <Row>{voComps}</Row>
    </div>
  );
}
export default React.memo(DefaultContainer);
