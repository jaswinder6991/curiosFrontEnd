import Head from 'next/head'
import Header from './header'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const Layout = (props) => {
  const [isOn, setIsOn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  return (
    <>
      <Head>
        <title>Curiosity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <main class="relative bg-gray-100 md:min-h-screen -my-4 boverflow-hidden"> */}
      <main>
        <div className="container mx-auto">{props.children}</div>
      </main>
</>
)
}
export default Layout