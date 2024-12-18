import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"
import { TComment } from "../../types"
import { Comment } from "../Comment"
import { useDebouncedValue } from "../../hooks/useDebounceValue"

const API_URL = "https://jsonplaceholder.typicode.com/posts/1/comments"

export const CommentList = ({ filter }: { filter: string }) => {
  const [comments, setComments] = useState<TComment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const debouncedFilter = useDebouncedValue(filter, 500)

  const fetchComments = useCallback(async () => {
    axios
      .get(API_URL)
      .then(({ data }) => setComments(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  const filteredComments = useMemo(() => {
    return debouncedFilter
      ? comments.filter((comment) => comment.name.includes(debouncedFilter))
      : comments
  }, [debouncedFilter, comments])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {filteredComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
