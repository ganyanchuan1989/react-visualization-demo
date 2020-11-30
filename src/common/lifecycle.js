import React, { useState, useEffect } from "react";

// construct
export function useConstruct(fn) {
  // useState 传入初始化函数 fn 只会执行一次
  useState(fn);
}

// componentDidMount
export function useDidMount(fn) {
  // 依赖项给空数组，只会执行一次
  useEffect(fn, []);
}

// componentDidUpdate
export function useDidUpdate(fn) {
  // 依赖项不传值，任何触发的 render 都会执行
  useEffect(fn);
}

// componentWillUnmount
export function useUnMount(fn) {
  useEffect(() => fn, []);
}

/**
 * Demo
 * useConstruct(() => {
    instance.current.name = 1;
    console.log('Block Component----Construct');
  });

  useDidMount(() => {
    console.log('Block Component----componentDidMount');
  });

  useDidUpdate(() => {
    console.log('instance.current.name', instance.current.name);
    console.log('Block Component----componentDidUpdate');
  });

  useUnMount(() => {
    console.log('Block Component----componentWillUnmount');
  });

 */
