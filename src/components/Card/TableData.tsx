import { commentProps } from '../../props/Comments.ts'

const TableData = ({ commentProp }: commentProps) => {
  const { postId, name, email, body } = commentProp
  return (
    <tbody>
      <tr className='hover'>
        <th>{postId}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{body}</td>
      </tr>
    </tbody>
  )
}

export default TableData
