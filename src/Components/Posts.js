import Post from "./Post.js"

export default function Posts() {
    return(
        <div className="posts">
            <h3>Posts</h3>
            <Post />
            <Post />
            <Post />
        </div>
    )
}