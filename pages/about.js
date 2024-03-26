import React from 'react'
import styles from '@/styles/Pages.module.css'
import Link from 'next/link'

const Definition = () => {
  return (
    <div className={styles.main}>
       <h1>A note from the developer</h1>
       <p>
         Hey! 
         <br/>
         Thank you for exploring my website! This website is one of my beginner projects! I hope you like it :&#41;<br/>
If you have any feedback, suggestions, or exciting opportunities, I would love to hear from you. Feel free to reach out to me via email gyamlanikanika@gmail.com or connect with me on LinkedIn <Link 
         href="https://www.linkedin.com/in/kanika-gyamlani-401679252"
         target="_blank"
         rel="noopener noreferrer"
         >
           HERE! 
        </Link>. 
        <br/>
        Let's collaborate and turn ideas into reality together!
<br/>
Thank you once again for visiting, and I hope you enjoy exploring my website. &nbsp;
       </p>
    </div>
  )
}

export default Definition