import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'
import AddCard from './components/AddCard'

import Card from './components/Card'
import Add from './components/Icons/Add'
import type { Url } from './types'
// import axios from 'axios'

const INITIAL_STATE = {
  name: '',
  link: '',
  id: '',
}

function App() {
  const [url, setUrl] = useState(INITIAL_STATE)
  const [company, setCompany] = useState<Url[]>(() => {
    const saveUrl = window.localStorage.getItem('urls')
    if (!saveUrl) return []
    return JSON.parse(saveUrl)
  })
  const [modal, setModal] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('urls', JSON.stringify(company))
  }, [company])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl({
      ...url,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCompany([...company, { ...url, id: uuid() }])
    setUrl(INITIAL_STATE)
    setModal(false)
  }

  const deleteCompany = (id: string) => {
    const filterCompanies = company.filter((comp) => comp.id != id)
    setCompany(filterCompanies)
  }

  const onEdit = (url: Url) => {
    console.log(url)
  }

  return (
    <div className='p-12'>
      <header>
        <h1 className='text-5xl mb-4 text-primary text-center'>
          Consegui Trabajo!
        </h1>
        <p className='mb-8 text-gray-t text-center text-base'>
          Busca si una empresa esta buscando tu Seniority o tecnologia
          preferida!
        </p>
      </header>
      <main>
        <section>
          {company.length ? (
            <article className='relative grid gap-3 p-4 grid-cols-5 items-center rounded-md border-black border-2 w-3/4 mx-auto'>
              <div>Nombre</div>
              <div className='col-span-4'>Link</div>
              <button
                onClick={() => setModal(true)}
                className='absolute right-[15px] top-[11px] flex items-center gap-1 bg-primary py-1 px-2 text-white rounded-md'
              >
                Añadir
                <Add />
              </button>
              <AddCard
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                onClose={() => setModal(false)}
                modal={modal}
                name={url.name}
                link={url.link}
              />
              {company.map((comp) => (
                <Card
                  key={comp.id}
                  id={comp.id}
                  name={comp.name}
                  link={comp.link}
                  onEdit={onEdit}
                  deleteCompany={deleteCompany}
                />
              ))}
            </article>
          ) : (
            <div>No hay url anadidas</div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
