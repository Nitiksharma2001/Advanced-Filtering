
export interface commentProps {
  commentProp: CommentType
}

export interface CommentType {
  postId: number
  name: string
  email: string
  body: string
}