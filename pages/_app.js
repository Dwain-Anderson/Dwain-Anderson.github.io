import '../styles/global.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/snow.js'
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <>
      <canvas id="snow" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.45 }} />
      <Component {...pageProps} />
    </>
  )
}