// --- React Methods
import React from 'react';

export type ItemCardProps = {
	img: string | undefined;
	name: string;
	description: string;
	repo: string;
	link: string;
	index: number;
};

export const ItemCard = ({
	img,
	name,
	description,
	repo,
	link,
	index,
}: ItemCardProps): JSX.Element => {
	return (
		<div className='w-1/2 p-2 md:w-1/2 xl:w-1/4' key={`${name}-${index}`}>
			<div className='relative border border-gray-200'>
				<div className='flex flex-row p-6'>
					<div className='flex h-10 w-1/2 w-10 flex-grow mb-2'>
						{img ? (
							<img src={img} alt={name} className='h-20 w-20 rounded-full' />
						) : (
							<div className='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 text-indigo-500 mb-5 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									className='w-10 h-10'
									viewBox='0 0 24 24'
								></svg>
							</div>
						)}
					</div>
				</div>
				<div className='mt-2 p-2'>
					<h1 className='title-font mb-3 text-lg font-medium text-gray-900'>
						{name}
					</h1>
					<p className='pleading-relaxed hidden md:inline-block text-gray-400'>
						{description}
					</p>
				</div>
				<div className='text-center mt-2  flex w-full py-4 rounded'>
					<a
						className='inline-flex items-center px-3 py-2 text-purple-gitcoinpurple text-sm'
						href={link}
						target='_blank'
						rel='noopener noreferrer'
					>
						Visit Website
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='ml-1.5 h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
							/>
						</svg>
					</a>
					<a
						className='inline-flex items-center px-3 py-2 rounded-lg text-purple-gitcoinpurple text-sm'
						href={repo}
						target='_blank'
						rel='noopener noreferrer'
					>
						Github
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='ml-1.5 h-4 w-4'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='2'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};
