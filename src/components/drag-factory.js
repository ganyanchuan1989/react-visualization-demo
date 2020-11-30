// import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { SORT_ACCEPT } from "@/common/ItemTypes";

export function useDragFactory({ id, type, findVo, moveVo }) {
  const [{ isDragging }, drag] = useDrag({
    item: { type, id }, // id, originalIndex
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: SORT_ACCEPT,
    canDrop: () => false, // 禁用drop，只允许drop排序
    hover(item) {
      const draggedId = item.id;
      if (draggedId !== id) {
        const { index: overIndex } = findVo(id);
        moveVo(draggedId, overIndex);
      }
    },
  });
  const opacity = isDragging ? 0.3 : 1;
  const background = isDragging ? "#fa8c16" : "#fff";

  return [{ opacity, background, isDragging }, drag, drop];
}
