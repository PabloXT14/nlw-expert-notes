import { useState } from 'react'
import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

type Note = {
  id: string
  date: Date
  content: string
}

const LOCALSTORAGE_KEY_NOTES = '@nlw-expert:notes'

export function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    const storedNotes = localStorage.getItem(LOCALSTORAGE_KEY_NOTES)

    if (storedNotes) {
      return JSON.parse(storedNotes)
    }

    return []
  })

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }

    const newNotes = [newNote, ...notes]

    setNotes(newNotes)

    localStorage.setItem(LOCALSTORAGE_KEY_NOTES, JSON.stringify(newNotes))
  }

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6">
      <img src={logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}
