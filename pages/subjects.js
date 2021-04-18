import { useUser } from '../lib/hooks'
import Link from 'next/link'
import Layout from '../components/layout'

const Subjects = () => {
    return (
        <>
        <Layout>
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Meet the experts</h1>
                    <div className="h-1 w-20 bg-indigo-500 rounded" />
                </div>
                <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <Link href="/chat">
                    <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/yRH8h2Z/blog-carbon-Markets2.png" alt="content"/>
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Carbon markets</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/pzHP1zz/learn-blockchain.png" alt="content" />
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Blockchain</h2>
                    <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/cTKfyC4/Coming-soon-on-blue-paint-background-isolated-on-white-Advertising-banner-concept.jpg" alt="content" />
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Coming soon...</h2>
                    <p className="leading-relaxed text-base">You can make suggestions, what other topics you would want here.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                    <div className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://i.ibb.co/cTKfyC4/Coming-soon-on-blue-paint-background-isolated-on-white-Advertising-banner-concept.jpg" alt="content" />
                    {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Coming soon...</h2>
                    <p className="leading-relaxed text-base">You can make suggestions, what other topics you would want here.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>

        </Layout>
        </>

    )

    }

    export default Subjects