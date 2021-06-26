import Head from 'next/head'
import Header from './header'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

const Layout = (props) => {
  const [isOn, setIsOn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  return (
    <div className="containercomponent">
      <Head>
        <title>Curiosity</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      {/* <main class="relative bg-gray-100 md:min-h-screen -my-4 boverflow-hidden"> */}
      <main className="chatcontainer">
        <div className="chatbody">{props.children}</div>
      </main>
</div>
)
}
export default Layout