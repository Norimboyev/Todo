import { useState } from "react";
import listIcon from "../assets/images/list.svg";
import gridIcon from "../assets/images/grid.svg";
import NotesItem from "./NotesItem";
import clsx from "clsx";
const Notes = ({ notes}) => {
  const [view, setView] = useState(true);
  const viewIcon = view ? listIcon : gridIcon;
  const spanText = view ? "Cписок" : "Сетка";
  const notesList = clsx("notes__list ", { active: !view });
  return (
    <main className="main">
      <div className="container">
        <div className="notes">
          <div className="notes__top">
            <h2 className="notes__top-title">
              {notes.length > 0 ? "Все заметки" : "Нет заметок"}
            </h2>
            <button className="notes__top-btn" onClick={() => setView(!view)}>
              <img src={viewIcon} alt="" />
              <span>{spanText}</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={notesList}>
          {notes.map((note) => (
            <NotesItem
              note={note}
              view={view}
              key={note.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Notes;
