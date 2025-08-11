import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        const fetchPosts = async () => {
           try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            const data = await response.json();

            setPosts(data)
           }catch(e){
            console.log(e)
           }
        }

        fetchPosts()
    }, [])

  return (
    <div>
        <h1>Blog</h1>

        <div className="posts">
            {
                posts && posts.map(post => (
                    <div className="item" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>

                        <Link to={`/blog/${post.id}`}>Подробнее</Link>
                    </div>
                ))
            }
           
        </div>
    </div>
  )
}

export default Blog
