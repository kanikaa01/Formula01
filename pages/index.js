import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Nav from "./components/navigation";
import Head from "next/head";

export default function Home() {
  return (
    <>
    {/* <Nav/> */}
    <Head>
      <title>Formula 1</title>
      <link rel= "icon" href="logo.jpg"/>
    </Head>
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Strap in, Revheads!
          {/* <code className={styles.code}>app/page.js</code> */}
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/kanika-gyamlani-401679252"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/kik.png"
              alt="My profile"
              className={styles.vercelLogo}
              width={24}
              height={24}
              priority
            />
            Kanika Gyamlani 
          </a>
        </div>
      </div>

      <p className={styles.discover}>Discover everything you need to know about this year's Formula 1 teams!</p>

      <div className={styles.centre}>
        <Image
          className={styles.logo}
          src="/image01.png"
          alt="Formula-1 Logo"
          width={600}
          height={200}
          priority
        />
      </div>

      <div className={styles.top}>
        Pick your choice! 
      </div>

      <div className={styles.grid}>
        <a
          href="https://en.wikipedia.org/wiki/Formula_One"
          className={styles.card}
        >
          <h2>
            What is Formula One? <span>➙</span>
          </h2>
        </a>

        <a
          href="https://tickets.formula1.com/en"
          className={styles.card}
        >
          <h2>
            Book your ticket <span>➙</span>
          </h2>
        </a>
      </div>
      <a
          href="/blog"
          className={styles.seeall}
        >
          <h2>
            Explore all Teams<span>➙</span>
          </h2>
        </a>
    </main>
    </>
  );
}
