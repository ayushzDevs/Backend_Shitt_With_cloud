import React, { useState } from 'react'

const Feed=()=> {

  const [ post, setPosts ] = useState([
    {
      _id: 1,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      caption: "Beautiful view of the mountains!"
    }
  ])
  return (
    <section className='feed-section'>
      <h1>Feed</h1>

      <div className='posts'>
        {post.map((post) => (
          <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Feed