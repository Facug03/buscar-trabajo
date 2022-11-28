import { useState } from 'react'

import type { Url } from '../types'

type Props = {
  modal: boolean
  deleteCompany: (id: string) => void
  onEdit: (id: Url) => void
  name: string
  id: string
  link: string
  onClose: () => void
}

export default function InfoCard({
  modal,
  name,
  link,
  id,
  deleteCompany,
  onEdit,
  onClose,
}: Props) {
  const [edit, setEdit] = useState({
    id,
    name,
    link,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {modal && (
        <div className='w-screen h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center z-50'>
          <div className='w-80 bg-white relative border-2 border-black p-5 rounded-md'>
            <button onClick={onClose} className='absolute top-0 right-[6px]'>
              X
            </button>
            <div className='flex gap-3 flex-col'>
              <div>
                <label className='block mb-3 text-lg'>Nombre</label>
                <input
                  className='border-primary px-2 py-1 border-2 rounded-md outline-none w-full'
                  name='name'
                  value={edit.name}
                  onChange={handleChange}
                />
              </div>
              <div className='relative'>
                <label className='block mb-3 text-lg'>Link</label>
                <a
                  className='absolute text-sm text-white rounded bg-primary px-1  hover:bg-secondary duration-300 ease-in-out top-[4.5px] left-[45px]'
                  href={edit.link}
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  Ir
                </a>
                <input
                  className='border-primary px-2 py-1 border-2 rounded-md outline-none w-full mb-2'
                  name='link'
                  value={edit.link}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  className='mr-3 bg-primary py-1 px-4 text-white rounded-md hover:bg-secondary duration-200 ease-in-out'
                  onClick={() => {
                    onEdit(edit)
                    onClose()
                  }}
                >
                  Editar
                </button>
                <button
                  className='bg-primary py-1 px-4 text-white rounded-md hover:bg-secondary duration-200 ease-linear'
                  onClick={() => deleteCompany(id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
