import { useEffect, useState } from 'react'

const useTablebar = () => {
  const [percentageHeight, setpercentageHeight] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const percentageReach =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setpercentageHeight(percentageReach)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return percentageHeight
}

export default useTablebar
