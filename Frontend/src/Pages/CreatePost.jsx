import React from 'react'
import axios from 'axios'

function CreatePost() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    axios.post("http://localhost:3000/create-post", formData)
      .then((res) => {
        alert("Post created successfully")
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
        alert("Error creating post")
      })
  }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*'/>
            <input type="text" name='caption' placeholder='enter caption' required />
            <button type='submit'> Submit</button>
        </form>

    </section>
  )
}

export default CreatePost