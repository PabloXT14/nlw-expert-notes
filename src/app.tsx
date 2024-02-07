import logo from './assets/logo-nlw-expert.svg'

export function App() {
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
        <div className="space-y-3 rounded-md bg-slate-700 p-5">
          <span className="text-sm font-medium text-slate-200">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>

        <div className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
          <span className="text-sm font-medium text-slate-300">há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi
            possimus magni, quasi debitis placeat.
          </p>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>

        <div className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
          <span className="text-sm font-medium text-slate-300">há 4 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi
            possimus magni, quasi debitis placeat.
          </p>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>

        <div className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5">
          <span className="text-sm font-medium text-slate-300">há 7 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi
            possimus magni, quasi debitis placeat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eum sequi possimus magni, quasi
            debitis placeat. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eum sequi possimus magni, quasi debitis placeat. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eum sequi possimus
            magni, quasi debitis placeat.
          </p>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
      </div>
    </div>
  )
}
