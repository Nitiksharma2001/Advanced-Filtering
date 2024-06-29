import { useState } from 'react'
import TableData from '../../../../components/Card/TableData'
import useComments from '../../../../hooks/useComments'
import Index from '../../../Index'
import { searchDebounceHandler } from '../../../../helpers/debounce'
import { CiSearch } from 'react-icons/ci'
import CommentsTable from '../../../../components/Card/CommentsTable'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import useTablebar from '../../../../hooks/useTablebar'
interface NextParamProps {
  limit: number
  page: number
}

const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [nextParam, setNextParam] = useState<NextParamProps>({
    page: 1,
    limit: 10,
  })
  const { comments, isLoading, totalPages, displayToast } = useComments(nextParam)

  const searchDebounce = searchDebounceHandler(setSearchText)
  const percentageHeight = useTablebar()

  const [sortParams, setSortParams] = useState([
    {
      name: 'Post ID',
      value: 'postId',
      type: 'none',
    },
    {
      name: 'Name',
      value: 'name',
      type: 'none',
    },
    {
      name: 'Email',
      value: 'email',
      type: 'none',
    },
  ])

  const filterSort = (toChangeIndex: number) => {
    const changeSortType = (type: string) => {
      if (type === 'none') return 'asc'
      if (type === 'asc') return 'desc'
      return 'none'
    }
    return sortParams.map((param, index) => {
      let type = index == toChangeIndex ? changeSortType(param.type) : 'none'
      return { ...param, type }
    })
  }

  const filteredComments = () => {
    const currentSort = sortParams.find((param) => param.type === 'asc' || param.type === 'desc') || sortParams[0]
    const currentArray = comments.filter(
      (comment) =>
        searchText === '' ||
        comment.name.toLowerCase().includes(searchText.toLowerCase()) ||
        comment.email.toLowerCase().includes(searchText.toLowerCase()) ||
        comment.body.toLowerCase().includes(searchText.toLowerCase())
    )
    if (currentSort.type === 'none') {
      return currentArray
    }
    if (currentSort.type === 'asc') {
      return currentArray.sort((a, b) => (a[currentSort.value] > b[currentSort.value] ? 1 : -1))
    }
    return currentArray.sort((a, b) => (a[currentSort.value] > b[currentSort.value] ? -1 : 1))
  }

  return (
    <Index>
      <section className='flex flex-col items-center h-full justify-between'>
        <section className='flex gap-4 flex-wrap justify-center'>
          <div className='flex gap-4'>
            {sortParams.map((param, index) => (
              <button
                key={index}
                className='btn btn-md'
                onClick={() => setSortParams(filterSort(index))}
              >
                Sort {param.name} {param.type === 'asc' && <FaArrowUp />} {param.type === 'desc' && <FaArrowDown />}

              </button>
            ))}
          </div>
          <label className='input input-bordered flex items-center'>
            <input
              type='text'
              className='grow md:pr-40 pr-16'
              placeholder='Search'
              onChange={(e) => searchDebounce(e.target.value)}
            />
            <CiSearch />
          </label>
        </section>
        <section className='mx-20 h-[80%] overflow-x-auto overflow-y-scroll'>
          {/* <progress className='progress progress-primary' value={percentageHeight} max='100'></progress> */}
          <CommentsTable isLoading={isLoading} comments={filteredComments()}/>
        </section>
        <section className='flex gap-4 justify-end w-full'>
          <div className="join">
            <button className={`join-item ${nextParam.page > 1 && 'btn'}`} onClick={() => setNextParam({...nextParam, page: nextParam.page - 1})}>{nextParam.page > 1 && '«'}</button>
            <button className="join-item btn">Page {nextParam.page}</button>
            <button className={`join-item ${nextParam.page < totalPages && 'btn'}`} onClick={() => setNextParam({...nextParam, page: nextParam.page + 1})}>{nextParam.page < 5 && '»'}</button>
          </div>
          <select className="select select-bordered w-24" onChange={(e) => setNextParam({...nextParam, limit: Number(e.target.value)})}>
            <option disabled selected>Limit</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </section>
        {displayToast && (
          <div className='toast toast-bottom toast-start'>
            <div className='alert alert-info'>
              <span className='text-white font-bold'>Comments Loaded</span>
            </div>
          </div>
        )}
        
      </section>
    </Index>
  )
}
export default Home
