import React from 'react'
import Router, { useRouter } from 'next/router'
import styles from './blog01.module.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'

const Post = (props) => {
  const [blog, setblog] = useState(props.myBlog)
  return (
    <div className={styles.main}>
      <div className={styles.teamlogo}>
      </div>
        <h1>{blog && blog.team}</h1>
      <hr/>
      <div className={styles.content}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.logo}
          src={blog && blog.player1img}
          alt="Formula-1 Logo"
          width={200}
          height={210}
          priority
        />
        <Image
          className={styles.logo}
          src={blog && blog.player2img}
          alt="Formula-1 Logo"
          width={200}
          height={210}
          priority
        />
      </div>
      <p className={styles.info}>
        Drivers: {blog && blog.player1} and {blog && blog.player2} <br/>
        Base: {blog && blog.base} <br/>
        Team Chief: {blog && blog.chief} <br/>
        Technical Chief: {blog && blog.tchief} <br/>
        Chassis: {blog && blog.chassis} <br/>
        Power Unit: {blog && blog.power} <br/>
        First Team Entry: {blog && blog.entry} <br/>
        World Champions: {blog && blog.champions} <br/>
        Fastest Race Finish: {blog && blog.finish} <br/>
        Pole Positions: {blog && blog.positions} <br/>
        Fastest Laps: {blog && blog.laps} <br/>
      </p>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {slug} = context.query
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()

  return {
    props: { myBlog }, // will be passed to the page component as props
  }
}


export default Post