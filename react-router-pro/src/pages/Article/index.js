import { useSearchParams } from "react-router-dom"

const Article = () => {
    const [params] = useSearchParams()
    const id = params.get("id")
    const title = params.get("title")
    return (
        <div>
            这是文章页
            <hr/>
            {id}:{title}
        </div>
    )
}

export default Article