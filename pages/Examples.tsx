import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar, Footer, ItemCard } from '../components';
import { devkits } from '../utils/devkits';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Showcase Passport</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='flex flex-col py-10 h-screen'>
				<main className='flex w-full flex-1 flex-col items-center px-20'>
					<div className='text-left container'>
						<p className='text-6xl font-librefranklin'>Passport SDK Examples</p>

						<p className='mt-3 text-2xl'>
							These are great starting points for a new project
						</p>
					</div>

					{/* Projects */}
					<div className='container mx-auto py-10'>
						<div className='flex flex-wrap md:-m-4 md:px-4'>
							{devkits.map((item, i) => (
								<ItemCard
									img={item.img}
									name={item.name}
									description={item.description}
									repo={item.repo}
									link={item.link}
									index={i}
								/>
							))}
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
