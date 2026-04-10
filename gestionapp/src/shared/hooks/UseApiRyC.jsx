import { useEffect, useState } from "react"
import axios from "axios"
import { getCharacters } from "../services/RickAndMortyService"

export function useApiRyC() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [info, setInfo] = useState({})
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const source = axios.CancelToken.source()

    getCharacters(page, query, source.token)
      .then(({ data }) => {
        setCharacters(data.results || [])
        setInfo(data.info || {})
        setLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        if (err.response?.status === 404) {
          setCharacters([])
          setInfo({})
        } else {
          console.error(err)
        }
        setLoading(false)
      })

    return () => source.cancel()
  }, [page, query])

  const handleSearch = (e) => {
    setQuery(e.target.value.trim())
    setPage(1)
  }

  const handlePageChange = (_, value) => setPage(value)

  return {
    characters,
    page,
    info,
    query,
    loading,
    handleSearch,
    handlePageChange,
  }
}