import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('waitlistapi').then(module => module.Waitlist),
  { ssr: false }
)

const Home = () => {

const user = useUser()

return (


<>
    <div className="mx-80 mt-10 max-w-2xl px-4 sm:mt sm:px-6 md:mt lg:mt lg:px-8 xl:mt">
    {/* </div><div className="mt-10 mx-auto max-w-7xl px-4 sm:mt sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"> */}
    <DynamicComponentWithNoSSR api_key="3G6AD9" waitlist_link="http://192.168.1.11:3000/"/>
    <style jsx>{`
      h1 {
        color: #000000;
      }
      .container--waitlistapi {
        margin: 0 auto; // centers the widget
        background-color: #dad9d9;
        max-width: 21rem;
          margin: 0 auto;
          padding: 2rem;
          border: 0px solid #ccc;
          border-radius: 4px;
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
    </style>
    </div>
  </>


)

}

export default Home