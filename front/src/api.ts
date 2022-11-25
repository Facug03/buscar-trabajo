import axios from 'axios'
import type { Url } from './types'

export const getSites = async (companies: Url[]) => {
  const sites = await Promise.allSettled(
    companies.map((comp) =>
      axios(`http://localhost:3001/page?url=${comp.link}`)
    )
  )

  return sites
}
