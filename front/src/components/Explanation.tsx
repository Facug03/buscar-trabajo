import { useState } from 'react'

export default function Explanation() {
  const [info, setInfo] = useState(false)

  return (
    <section className='mb-5'>
      <div
        className='border-[3.5px] border-primary bg-primary rounded-lg p-1 cursor-pointer w-fit mb-3'
        onClick={() => setInfo(!info)}
      >
        <h2 className='text-3xl font-lexendBold text-white max-[355px]:text-2xl'>
          + ¿Cómo funciona?
        </h2>
      </div>
      {info && (
        <div className='bg-[#eeeef0] px-3 py-4 rounded'>
          <div className='mb-4'>
            <h3 className='mb-2 text-base text-primary font-lexendBold'>
              El primer paso es agregar un link a un portal de empleo de una
              empresa. Podés agregar cuantos links quieras:
            </h3>
            <p className='mb-2 pl-2'>Ejemplo:</p>
            <div className='bg-white px-2 py-3 rounded'>
              <div className='relative grid gap-3 p-4 grid-cols-5 max-ph:grid-cols-1 items-center rounded-md border-black border-2 whitespace-nowrap'>
                <div>Nombre</div>
                <div className='col-span-4 max-ph:hidden'>Link</div>
                <button className='absolute right-[15px] top-[11px] flex items-center gap-1 bg-primary py-1 px-2 text-white rounded-md hover:bg-secondary duration-200 ease-linear'>
                  Añadir
                  <svg
                    stroke='#ffffff'
                    stroke-width='2px'
                    fill='#ffffff'
                    width='14px'
                    height='14px'
                    viewBox='0 0 42 42'
                  >
                    <polygon points='42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 '></polygon>
                  </svg>
                </button>
                <div className='cursor-pointer overflow-hidden overflow-ellipsis'>
                  Eudamonia
                </div>
                <div className='text-xs text-primary col-span-4 cursor-pointer overflow-hidden overflow-ellipsis max-ph:col-span-1 min-[1800px]:text-sm'>
                  https://www.eudaimonia.com.ar/jobs.html
                </div>
              </div>
            </div>
          </div>
          <h3 className='mb-2 text-base text-primary font-lexendBold'>
            El segundo paso es elegir la palabra clave:
          </h3>
          <p className='mb-2 pl-2'>Ejemplo:</p>
          <div className='bg-white p-2 rounded mb-4'>
            <h2 className='mb-4'>
              Revisar si alguna de estas paginas contiene la siguiente palabra:
            </h2>
            <div>
              <div className='relative inline max-[435px]:block'>
                <p className='mr-2 inline'>Palabra clave</p>
                <div className='inline border-primary pl-2 pr-52 mr-2 border-2 rounded-md max-[435px]:block'>
                  <p className='inline'>jr</p>
                </div>
                <div className='inline max-tb:block max-tb:mt-5'>
                  <span className='bg-primary py-[6px] px-4 text-white rounded-md mr-4'>
                    Aceptar
                  </span>
                  <span className='bg-primary py-[6px] px-4 text-white rounded-md'>
                    Cancelar
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h3 className='mb-2 text-base text-primary font-lexendBold'>
            El tercer paso es darle al boton de check y aparecerán todos los
            resultados:
          </h3>
          <p className='mb-2 pl-2'>Ejemplo:</p>
          <div className='bg-white p-2 rounded'>
            <h2 className='mb-2'>
              Estas paginas contienen la palabra:
              <span className='px-3 py-1 bg-[#ededed] rounded'>jr</span>
            </h2>
            <ul className='list-none'>
              <li className='text-primary'>
                <span>https://www.eudaimonia.com.ar/jobs.html</span>
              </li>
            </ul>
          </div>
          <p className='mt-3 text-base text-primary font-lexendBold'>
            ¡Podés agregar cuántos links quieras e ir revisando cada cierto
            tiempo si alguna de las empresas abrió el puesto de trabajo que te
            interesa!
          </p>
        </div>
      )}
    </section>
  )
}
