import { useState } from "react";
//useState总是返回一个数组，总是两个元素。
//useState是 react 提供的一个定义响应式变量的 hook 函数，基本语法如下：const [count, setCount] = useState(initialCount).
//它返回一个状态和一个修改状态的方法，状态需要通过这个方法来进行修改；initialCount 是我们传入的一个初始状态，它是惰性的，我们可以通过传一个函数来返回一个值当作初始状态，并且这个函数只会在初始渲染时执行一次；
//const [count, setCount] = useState(() => {
//    const initialCount = someExpensiveComputation();
//    return initialCount
//})

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); //在（）中定义初始值，也可以在这更改该值。  可以访问当前存储得值通过第一个元素。 第二个元素是一个允许我们更改该值的函数。调用setModalIsOpen分配一个新的值。
  //为什么重要： 因为每当调用setModalIsOpen改变函数时， react最终回重新执行该状态的组件函数，并重新评估它，并更新屏幕上呈现的内容。

  //props对于构建可重用组件很重要，state对于改变我们在动态显示在屏幕上所看到的很重要，用于添加或删除元素，改变屏幕上的文本，或者在本次联系的情况下现实和隐藏叠加层.
  //
  function deleteHander() {
    setModalIsOpen(true);
  }

  function closeModalHander() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHander}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHander} onConfirm={closeModalHander} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHander} />}
    </div>
  );
}

export default Todo;
