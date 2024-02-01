import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, height }) => {

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className={height === 'big' ? "blog-preview" : "blog-preview2"} key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <p>{blog.id}</p>
                    </Link>


                </div>
            ))}
        </div>
    );
}

export default BlogList;