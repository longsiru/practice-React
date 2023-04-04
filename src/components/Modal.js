function Modal(props) {
  function cancelHander() {
    props.onCancel();
  }

  function confirmHander() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are You sure?</p>
      <button className="btn btn--alt" onClick={cancelHander}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHander}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
