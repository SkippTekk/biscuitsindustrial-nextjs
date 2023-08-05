import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from '../components/context/ThemeContext'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Authprovider from '../components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Biscuits Indsutrial',
  description: 'Fan based website for Eve Online!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Authprovider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </Authprovider>
        </ThemeProvider>
      </body>
    </html>
  )
}
