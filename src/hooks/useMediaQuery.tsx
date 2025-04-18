import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const matchQueryList = window.matchMedia(query)
      setMatches(matchQueryList.matches)

      const handleChange = (e: MediaQueryListEvent) => {
        setMatches(e.matches)
      }

      matchQueryList.addEventListener('change', handleChange)
      return () => {
        matchQueryList.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}
