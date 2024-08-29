import React from "react";
import { useState } from "react";
import editIcon from "../assets/images/edit.svg";
import delIcon from "../assets/images/del.svg";
import clsx from "clsx";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { toast } from "react-toastify";

const NotesItem = ({ note, view }) => {
  const { deleteHandler, changeHandler } = useContext(TodoContext);
  const deleteNote = (id) => {
    deleteHandler(id);
    toast.error("Заметка удалена", {
      position: "top-right",
      autoClose: 2000,
      pauseOnHover: false,
    });
  };
  const notesItemTop = clsx("notes__item-top", { active: !view });
  return (
    <div className="notes__item  col-xl-4 col-lg-4 col-md-6 col-12">
      <div className={notesItemTop}>
        <h3 className="notes__item-top-title">{note.title}</h3>
        <p className="notes__item-top-date">{note.date}</p>
      </div>
      <p className="notes__item-text">{note.text}</p>
      <div className="notes__item-btns">
        <button
          className="notes__item-btn purple"
          onClick={() => changeHandler(note)}
        >
          <img src={editIcon} alt="" />
          <span>РЕДАКТИРОВАТЬ</span>
        </button>
        <button
          className="notes__item-btn red"
          onClick={() => deleteNote(note.id)}
        >
          <img src={delIcon} alt="" />
          <span>Удалить</span>
        </button>
      </div>
    </div>
  );
};

export default NotesItem;
