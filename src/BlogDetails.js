import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const BlogDetails = () => {
    const { id } = useParams();

    const apiUrl = `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}/api` || 'http://localhost:8000';
    const { data: blog, error, isLoading } = useFetch(`${apiUrl}/blogs/` + id);

    const history = useHistory();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const handleSubmit = () => {

    // }

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setBody(blog.body);
        }
    }, [blog]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${apiUrl}/blogs/` + blog.id, {
            method: 'PATCH',  // Use 'PATCH' if your API requires a partial update
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                body: body,
            }),
        }).then(() => {
            history.push('/home');
        });
    }
    return (
        <div className="blog-details">
            <h2>
                {isLoading && <div> Loading ... </div>}
                {error && <div> {error}</div>}

                {blog && (
                    <article>
                        <form onSubmit={handleSubmit} >
                            <div> Section {blog.id}</div>
                            <label htmlFor=""> Title</label>
                            <br />
                            <input type="text"
                                className="inputForTitle"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <br />
                            <br />
                            {/* <p>Written by {blog.author}</p> */}
                            <label htmlFor="">Article/Body</label>
                            <br />
                            <textarea className="textAreaEdit" name="" id="" cols="30" rows="10"
                                required
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            >
                            </textarea>
                            <br />
                            <button className="buttonEdit"> Edit</button>
                        </form>
                    </article>
                )}
            </h2>
        </div>
    );
}

export default BlogDetails;