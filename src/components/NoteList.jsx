export default function NoteList({ notes, onRemoveClick }) {

    const listNotes = notes.map((note, index) =>
        <li key={index}>
            {note.text}
            &nbsp;
            <button onClick={(event) => onRemoveClick(note)}>X</button>
        </li>
    )

    return (
        <>
            <p>NOTE LIST</p>
            <ul>
                {listNotes}
            </ul>
        </>
    )
}