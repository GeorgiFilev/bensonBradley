import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yosi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })

    }

    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit} className="formCreate">
                <label htmlFor=""> Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor=""> Blog body</label>
                <textarea name="" id="" cols="30" rows="10"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >

                </textarea>
                <label> Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario"> Mario</option>
                    <option value="yosi"> yosi</option>
                </select>
                {
                    isPending ? <button disabled> Adding Blog</button> : <button> Add blog</button>
                }
            </form>
        </div>
    );
}

export default Create;