import { useState } from "react";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import editIcon from "./assets/images/edit.svg";
import Modal from "./components/Modal";
import { TodoContext } from "../src/context/todoContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "html",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.",
      date: "29.05.2024",
    },
    {
      id: 2,
      title: "css",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.",
      date: "29.05.2024",
    },
    {
      id: 3,
      title: "js",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, eum.",
      date: "29.05.2024",
    },
  ]);
  const [searchValue, setSearchValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);

  const filterNotes = notes.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const close = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    setIsEdit(false);
    setEditNote(null);
  };

  const addOrChangeHandler = (note) => {
    if (editNote?.id) {
      const updateNotes = notes.map((item) => {
        if (item.id == note.id) {
          return note;
        }
        return item;
      });
      setNotes(updateNotes);
    } else {
      setNotes([...notes, note]);
    }
  };
  const changeHandler = (note) => {
    setIsModalOpen(true);
    setIsEdit(true);
    setEditNote(note);
  };

  const deleteHandler = (id) => {
    setNotes(notes.filter((item) => item.id != id));
  };
  return (
    <>
      <TodoContext.Provider
        value={{
          close,
          changeHandler,
          deleteHandler,
          addOrChangeHandler,
          searchValue,
          setSearchValue,
        }}
      >
        <Navbar />
        <Notes notes={filterNotes} />
        {isModalOpen && <Modal isEdit={isEdit} editNote={editNote} />}

        {!isModalOpen && (
          <button className="add__btn" onClick={() => openModal()}>
            <img src={editIcon} alt="" />
          </button>
        )}
        <ToastContainer />
      </TodoContext.Provider>
    </>
  );
};

export default App;
