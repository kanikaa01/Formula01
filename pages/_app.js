import "@/styles/globals.css";
import Nav from "./components/navigation";

export default function App({ Component, pageProps }) {
  return <>
  <Nav/>
  <Component {...pageProps} />
  </>
}
