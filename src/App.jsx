import { useState } from 'react'
import Counter from './components/Counter'
import AddNoteForm from './components/AddNoteForm'
import Filters from './components/Filters'
import NoteList from './components/NoteList'

export default function App() {

  const [notes, setNotes] = useState([
    { id: 1, text: 'premiere note' },
    { id: 2, text: 'deuxieme note' },
    { id: 3, text: 'troisieme note' }
  ]);

  function handleRemove(noteToDelete) {
    console.log('remove index : ', noteToDelete);
    const newNotes = notes.filter(note => note.id !== noteToDelete.id);
    setNotes(newNotes)
  }

  return (
    <>
      <h1>Application Notes</h1>
      <Counter />
      <AddNoteForm />
      <Filters />
      <NoteList notes={notes} onRemoveClick={handleRemove} />
    </>
  )
}
