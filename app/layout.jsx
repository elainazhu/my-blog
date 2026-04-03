import Link from 'next/link'
import '../styles/main.css'

export const metadata = {
  title: "Hello! I'm Elaina Zhu",
  description: 'Welcome to my personal website!',
  openGraph: {
    title: "Hello! I'm Elaina Zhu",
    description: 'Welcome to my personal website!',
    siteName: "Hello! I'm Elaina Zhu",
    images: ['/images/self.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hello! I'm Elaina Zhu",
    description: 'Welcome to my personal website!',
    images: ['/images/self.jpg'],
  },
  robots: 'follow, index',
}

const YEAR = new Date().getFullYear()

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="site-container">
          <nav className="nav-line">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/posts" className="nav-link">Posts</Link>
            <Link href="/photos" className="nav-link">Photos</Link>
          </nav>
          <main className="prose">
            {children}
          </main>
          <footer>
            <small>
              <time>{YEAR}</time> © Elaina Zhu.{' '}
              <a style={{ float: 'right' }}>zhuwenxin426@gmail.com</a>
            </small>
          </footer>
        </div>
      </body>
    </html>
  )
}
