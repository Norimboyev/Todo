import { useState, useContext } from "react";
import React from "react";
import { v4 } from "uuid";
import { TodoContext } from "../context/todoContext";
import { toast } from "react-toastify";

const Modal = ({ isEdit, editNote }) => {
  const [title, setTitle] = useState(editNote?.title ?? "");
  const [text, setText] = useState(editNote?.text ?? "");
  const { close, addOrChangeHandler } = useContext(TodoContext);
  const addOrChange = () => {
    if (title.length > 2 && text.length > 2) {
      const item = {
        id: editNote?.id ?? v4(),
        title: title,
        text: text,
        date: new Date().toLocaleDateString(),
      };
      setTitle("");
      setText("");
      addOrChangeHandler(item);
      close();

      if (editNote) {
        toast.success("Заметка изменена", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: false,
        });
      } else {
        toast.success("Заметка добавлена", {
          position: "top-right",
          autoClose: 2000,
          pauseOnHover: false,
        });
      }
    }
  };

  return (
    <div className="modal" onClick={() => close()}>
      <div
        className="modal__block"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="modal__block-title">
          {!isEdit ? "Добавить заметку" : "Изменить заметку"}
        </h2>
        <div className="modal__block-fields">
          <label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>Title</span>
          </label>
          <label>
            <input
              type="text"
              placeholder="Content"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <span>Content</span>
          </label>
        </div>
        <div className="modal__block-btns">
          <button className="modal__btn red" onClick={() => close()}>
            Отмена
          </button>
          <button className="modal__btn purple" onClick={() => addOrChange()}>
            {!isEdit ? "Добавить" : "Изменить"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
