import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'

import type { Url } from './types'
import Card from './components/Card'
import Add from './components/Icons/Add'
import AddCardModal from './components/AddCardModal'
import { getSites } from './api'
import CheckWord from './components/CheckWord'
import AddCard from './components/AddCard'
import Explanation from './components/Explanation'

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
  const [check, setCheck] = useState<(string | undefined)[]>([])
  const [word, setWord] = useState('')
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('urls', JSON.stringify(company))
  }, [company])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name !== 'word') {
      setUrl({
        ...url,
        [e.target.name]: e.target.value,
      })
    } else {
      setWord(e.target.value)
    }
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
    const comp = [...company]
    const item = comp.find((com) => com.id === url.id)
    if (item) {
      item.name = url.name
      item.link = url.link
      setCompany(comp)
    }
  }

  const handleCheck = async () => {
    setLoading(true)
    const res = await getSites(company).then((resp) => resp)
    const isWord: string[] = []
    res.forEach((res, index) => {
      if (
        res.status === 'fulfilled' &&
        res.value.data.toLowerCase().includes(word.toLocaleLowerCase())
      ) {
        isWord.push(company[index].link)
      }
    })
    isWord.length ? setCheck(isWord) : setNotFound(true)

    setLoading(false)
  }

  return (
    <div className='px-16 pt-5 max-ph:px-10 max-[435px]:px-6 min-[1500px]:px-36 min-[1800px]:px-48'>
      <header className='min-[1800px]:mb-14'>
        <h1 className='text-5xl mb-4 text-primary text-center font-lexendBold max-[435px]:text-4xl'>
          ¡Herramienta para buscar trabajo!
        </h1>
        <p className='mb-8 text-gray-t text-center text-base max-[435px]:text-sm'>
          Busca si una empresa esta buscando tu seniority o tecnología preferida
        </p>
      </header>
      <main>
        <Explanation />
        <section className='min-[1800px]:mb-14'>
          {company.length ? (
            <article className='relative grid gap-3 p-4 grid-cols-5 max-ph:grid-cols-1 items-center rounded-md border-black border-2 whitespace-nowrap'>
              <div>Nombre</div>
              <div className='col-span-4 max-ph:hidden'>Link</div>
              <button
                onClick={() => setModal(true)}
                className='absolute right-[15px] top-[11px] flex items-center gap-1 bg-primary py-1 px-2 text-white rounded-md hover:bg-secondary duration-200 ease-linear'
              >
                Añadir
                <Add />
              </button>
              <AddCardModal
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
            <AddCard
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              name={url.name}
              link={url.link}
            />
          )}
        </section>
        {company.length > 0 && (
          <CheckWord
            company={company}
            word={word}
            handleChange={handleChange}
            handleCheck={handleCheck}
            check={check}
            loading={loading}
            notFound={notFound}
            changeFound={() => setNotFound(false)}
            changeWord={(word) => setWord(word)}
            changeCheck={() => setCheck([])}
          />
        )}
      </main>
    </div>
  )
}

export default App
