import { useState } from 'react'

import Edit from '../components/Icons/Edit'
import type { Url } from '../types'

type Props = {
  company: Url[]
  word: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCheck: () => void
  check: (string | undefined)[]
}

export default function CheckWord({
  company,
  word,
  handleChange,
  handleCheck,
  check,
}: Props) {
  const [edit, setEdit] = useState(true)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (word.length) {
      setEdit(false)
      setError('')
    } else {
      setError('La palabra clave no puede estar vacia')
    }
  }

  return (
    <section>
      {company.length ? (
        <div className='mt-7'>
          <h2 className='mb-4'>
            Revisar si alguna de estas paginas contiene la siguiente palabra:
          </h2>
          {!edit && !!word.length ? (
            <div>
              <div className='inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#ededed]'>
                <h3 className=' '>{word}</h3>
                <button onClick={() => setEdit(true)}>
                  <Edit />
                </button>
              </div>
              <button
                className='bg-primary py-2 px-4 text-white rounded-md block'
                onClick={handleCheck}
              >
                Check
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className='relative inline'>
                <label className='mr-2'>Palabra clave</label>
                <input
                  className='border-primary px-2 mr-2 border-2 rounded-md outline-none'
                  name='word'
                  value={word}
                  onChange={handleChange}
                />
                {word.length ? null : (
                  <p className='absolute top-[25px] left-[115px] text-xs text-red-500'>
                    {error}
                  </p>
                )}
              </div>
              <button className='bg-primary py-1 px-4 text-white rounded-md mr-4'>
                Aceptar
              </button>
              {/* <button onClick={} className='bg-primary py-1 px-4 text-white rounded-md'>
                Cancelar
              </button> */}
            </form>
          )}
        </div>
      ) : null}
      {check.length ? (
        <div className='mt-7 mx-auto'>
          <h2>Estas paginas contienen la siguiente palabra {word}</h2>
          {check.map((comp, index) => (
            <span key={index}>{comp}</span>
          ))}
        </div>
      ) : null}
    </section>
  )
}
