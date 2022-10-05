import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Navbar, Footer, AddToShowCase } from '../components';
import { projects } from '../utils/projects';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Showcase Passport</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<div className='flex flex-col items-center justify-center py-10 min-h-screen'>
				<main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
					<h1 className='text-6xl font-bold'>Showcase</h1>

					<p className='mt-3 text-2xl'>
						<code className='rounded-md bg-gray-100 p-3 font-mono text-lg'>
							Explore the amazing work created with Passport :)
						</code>
					</p>

					{/* Projects */}
					<div className='mt-20 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
						{projects.map((item, i) => (
							<div className='w-1/2 p-2' key={`${item.name}${i}`}>
								<div className='block overflow-hidden rounded-2xl'>
									<img
										alt='Project Picture'
										src='/genericProjectPlaceholder.jpg'
										className='object-cover w-full h-56'
									/>

									<div className='p-4 bg-gray-900'>
										<div className='inline-flex items-center px-3 py-2 rounded-lg text-white text-sm'>
											{item.name}
										</div>

										<p className='mt-1 text-xs text-gray-500'>
											{item.description}
										</p>
										<div className='text-center mt-2 leading-none flex justify-center w-full py-4'>
											<a
												className='inline-flex items-center px-3 py-2 text-gray-400 text-sm border-r-2 border-gray-400 hover:text-white'
												href={item.repo}
												target='_blank'
												rel='noopener noreferrer'
											>
												Repository
											</a>
											<a
												className='inline-flex items-center px-3 py-2 rounded-lg text-gray-400 text-sm hover:text-white'
												href={item.link}
												target='_blank'
												rel='noopener noreferrer'
											>
												Site
											</a>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</main>
			</div>
			<AddToShowCase />
			<Footer />
		</div>
	);
};

export default Home;
