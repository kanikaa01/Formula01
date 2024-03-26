import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blogs.module.css'

const Blog = (props) => {
    const [blogs, setblogs] = useState(props.allBlogs);
  return (
    <div className={styles.container}>
        <div className={styles.grid}>

        {blogs.map((blogitem)=>{
            return <div key={blogitem.slug}>
            <a
            href={`/components/${blogitem.slug}`}
          >
            <h2 className={styles.card}>
              {blogitem.team} <span>➙</span>
            </h2>
          </a>
          </div>
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}

export default Blog