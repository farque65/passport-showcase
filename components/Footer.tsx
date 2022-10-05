// --- React Methods
import React from 'react';

export const Footer = (): JSX.Element => {
	return (
		<div className='fixed inset-x-0 bottom-0'>
			<div className='relative bg-purple-darkpurple px-4 py-3 pr-14 text-white'>
				<p className='font-libre-franklin text-left text-sm font-medium ml-10'>
					🎉 Want to feature your project built with Passport?
				</p>

				<a
					href='https://docs.google.com/forms/d/e/1FAIpQLSd-qMBC71QgAug7Az-qn0sc7ehoARuQG4OOJDgE5Xh1ueSEMw/viewform?usp=sharing'
					target='_blank'
					rel='noopener noreferrer'
					className='absolute bg-purple-gitcoinpurple top-1/2 right-4 -translate-y-1/2 rounded-md px-2 py-1 transition text-sm'
				>
					Get Featured
				</a>
			</div>
		</div>
	);
};
