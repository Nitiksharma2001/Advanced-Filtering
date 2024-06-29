import { CommentType } from '../../props/Comments'
import TableData from './TableData'

interface CommentsTableProps {
  isLoading: boolean
  comments: CommentType[]
}

const CommentsTable = ({ isLoading, comments }: CommentsTableProps) => {
  return (
    <>
      <table className='table table-pin-rows'>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
          </tr>
        </thead>
        {!isLoading &&
          comments.map((recipe, index) => {
            return <TableData key={index} commentProp={recipe} />
          })}
      </table>
    </>
  )
}

export default CommentsTable
