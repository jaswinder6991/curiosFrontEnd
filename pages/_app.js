import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import '../app.css'

function MyApp({ Component, pageProps }) {
   return <Component {...pageProps} />
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
}

export default MyApp