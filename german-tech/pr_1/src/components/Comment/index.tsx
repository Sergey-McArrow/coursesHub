import { FC } from "react"
import { TComment } from "../../types"

type TCommentProps = {
  comment: TComment
}

export const Comment: FC<TCommentProps> = ({ comment }) => {
  return (
    <div>
      <h1>{comment.name}</h1>
      <p>{comment.body}</p>
    </div>
  )
}
