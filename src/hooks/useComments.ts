import { useEffect, useState } from 'react'
import commentsData from '../data/comments.json'
import { CommentType } from '../props/Comments'

interface NextParamProps {
  limit: number
  page: number
}
const useRecipes = ({ limit, page }: NextParamProps) => {
  const [comments, setComments] = useState<CommentType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [displayToast, setDiplayToast] = useState(false)
  const [totalPages, setTotalPages] = useState(0)

  const displayToastHandler = () => {
    setDiplayToast(true)
    setTimeout(() => {
      setDiplayToast(false)
    }, 2000)
  }
  useEffect(() => {
    const fetchDate = async () => {
      try {
        setIsLoading(true)
        setDiplayToast(false)
        setTotalPages(Math.floor(commentsData.length / limit))
        setComments(commentsData.slice((page - 1) * limit, limit + (page - 1) * limit))
      } catch (err) {
        setIsLoading(false)
        displayToastHandler()
      } finally {
        setIsLoading(false)
        displayToastHandler()
      }
    }
    fetchDate()
  }, [limit, page])
  return {
    comments,
    isLoading,
    totalPages,
    displayToast,
  }
}

export default useRecipes
