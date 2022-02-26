import Head from 'next/head'
import Header from '../components/Home/Header'
import GenderCard from '../components/Card/GenderCard'
import PRODUCT_LIST from '../components/List/Product.list'
import ProductCard from '../components/Card/ProductCard'
import Info from '../components/Home/Info'
import JoinBanner from '../components/Home/JoinBanner'
import GENDER_LIST from '../components/List/Gender.list'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Home({ products }) {

  return (
    <div className="min-h-screen w-full">
      <Head>
        <title>addidas Official Website India</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className="flex flex-col justify-center items-center">
        <Header />

        <div className="w-11/12 lg:w-9/12 my-10">

          <h1 className="font-bold text-3xl italic tracking-tighter uppercase mt-16 text-center">Popular Right Now</h1>
          <div className='flex justify-center items-center w-full gap-4 mt-4'>
            <span className='cursor-pointer text-sm border border-gray-300 p-2 uppercase'>Face Covers</span>
            <span className='cursor-pointer text-sm border border-gray-300 p-2 uppercase'>Sneakers</span>
            <span className='cursor-pointer text-sm border border-gray-300 p-2 uppercase'>Superstar</span>
            <span className='cursor-pointer text-sm border border-gray-300 p-2 uppercase'>Adidas Originals</span>
            <span className='cursor-pointer text-sm border border-gray-300 p-2 uppercase'>Ultraboost</span>
          </div>

          <h1 className="font-bold text-3xl italic tracking-tighter uppercase mt-16 text-left">WHO ARE YOU SHOPPING FOR?</h1>
          <div className="grid grid-cols-3 mt-6">
            {
              GENDER_LIST.map((e) => <GenderCard key={e.id} name={e.name} image={e.image} link={e.link} />)
            }
          </div>
        </div>

        <div className='w-full relative flex justify-center'>
          <video autoPlay muted loop className='w-full h-750 object-cover'>
            <source src='/video.mp4'></source>
          </video>

          <div className="w-11/12 lg:w-9/12 p-6 absolute top-1/2 -translate-y-1/2">
            <h1 className="text-4xl text-white font-black uppercase">FIND YOUR I&apos;MPOSSIBLE</h1>
            <p className="text-white text-sm font-medium">You don&apos;t have to tell us what&apos;s possible. We are well aware.</p>
            <button className="text-xs cursor-pointer bg-white text-black py-3 px-6 mb-4 flex items-center uppercase font-bold mt-4">Explore more &nbsp; <HiArrowNarrowRight /></button>
          </div>

        </div>

        <div className='w-11/12 lg:w-9/12 my-10'>
          <h1 className="font-bold text-3xl italic tracking-tighter uppercase mt-16 text-left">Best of adidas</h1>
          <div className="grid grid-cols-4 mt-6">
            {
              PRODUCT_LIST.map((e) => <ProductCard data={e} key={e._id} />)
            }
          </div>
        </div>

        <Info />

        {
          <JoinBanner />
        }

      </main>
    </div>
  )
}


// export async function getServerSideProps() {

//   let products = [];

//   try {
//     const res = await getProducts();
//     if (res.data.success) {
//       products = res.data.products
//     } else {
//       products = []
//     }
//   } catch (err) {
//     console.log(err.message)
//   }

//   return {
//     props: { products }, // will be passed to the page component as props
//   }
// }