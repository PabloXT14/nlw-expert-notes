import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { X } from 'lucide-react'
import { Note } from '../app'

type NoteCardProps = {
  note: Note
  onNoteDeleted: (id: string) => void
}

export const NoteCard = ({ note, onNoteDeleted }: NoteCardProps) => {
  const formattedDate = formatDistanceToNow(note.date, {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="relative flex flex-col gap-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className="text-sm font-medium text-slate-300">
            {formattedDate}
          </span>
          <p className="text-sm leading-6 text-slate-400">{note.content}</p>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />

        <Dialog.Content className="fixed inset-0 flex w-full flex-col overflow-hidden bg-slate-700 outline-none md:inset-auto md:left-1/2 md:top-1/2 md:h-[60vh] md:max-w-[640px] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-md">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-500 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formattedDate}
            </span>
            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>

          <button
            type="button"
            onClick={() => onNoteDeleted(note.id)}
            className="group w-full bg-slate-800 py-4 text-center text-sm font-medium text-slate-300 outline-none"
          >
            Deseja{' '}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
