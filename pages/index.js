import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
//import { Waitlist } from 'waitlistapi'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('waitlistapi').then(module => module.Waitlist),
  { ssr: false }
)

const Home = () => {
  const user = useUser()
  return (
    <Layout>
    
    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
      <div className="sm:text-center lg:text-center">
        <h2 className="mb-3 text-xs font-semibold tracking-widest uppercase text-gray-500 title-font">Conversation platform powered by GPT-3</h2>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
          <span className="block xl:inline">Do you love </span>
          <span className="block text-indigo-500 xl:inline">asking questions?</span>
        </h2>
        <p className="mt-8 text-base text-gray-500 sm:mt-8 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-8 md:text-lg lg:text-centre">
          Does having a conversation makes it easy for you to understand concepts better. Curiosity is a platform powered by GPT-3 where you can talk to a chatbot about tens of topics and catch up on them fast and easy.
        </p>
        <p className="mt text-base text-gray-500 sm:mt sm:text-lg sm:max-w-xl sm:mx-auto md:mt md:text-lg lg:text-centre">
          Sign up for early access below to try it out!
        </p>
        {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
            Get started
            </a>
          </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
            Live demo
          </a>
        </div>
        </div> */}
        
      </div>

      <div className="m-14 mx-auto max-w-md px-4 sm:mt-20 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-26">
        <DynamicComponentWithNoSSR api_key="3G6AD9" waitlist_link="https://curiosity.so/"/>
    
    {/* <style jsx>{`
      h1 {
        color: #000000;
      }
      .container--waitlistapi {
        //margin: 0 auto; // centers the widget
        background-color: #000000 //#dad9d9;
      }
      .button--waitlistapi {
        background-color: #8B5CF6;
      }
      .statusTextContainer--waitlistapi {
        color: #000000;
      }
      .referralLinkField--text {
        color: #000000;
      }`}
    </style>*/}
    </div>
    </main>
    
    </Layout>
  )
}

export default Home