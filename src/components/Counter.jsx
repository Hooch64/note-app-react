import NoteList from "./NoteList";

export default function Counter({ notes }) {
    return (
        <div>Nombre de notes : <span id="count">{notes.length}</span></div>
    )
}