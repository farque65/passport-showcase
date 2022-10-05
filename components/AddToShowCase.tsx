// --- React Methods
import React from 'react';

export const AddToShowCase = (): JSX.Element => {
	return (
		<div className='text-gray-600 body-font border-t-2'>
			<div className='container px-5 py-24 mx-auto'>
				<div className='flex flex-col text-center w-full mb-12'>
					<h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
						Add your project to the Passport Showcase
					</h1>
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
						Fill out the form below with all the necessary information.
					</p>
				</div>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://docs.google.com/forms/d/e/1FAIpQLSd-qMBC71QgAug7Az-qn0sc7ehoARuQG4OOJDgE5Xh1ueSEMw/viewform?usp=sharing'
					className='w-1/4 justify-center flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
				>
					Enter Now
				</a>
			</div>
		</div>
	);
};
