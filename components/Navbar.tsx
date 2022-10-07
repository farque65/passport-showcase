import React from 'react';
import Link from 'next/link';

export const Navbar = (): JSX.Element => {
	return (
		<header className='text-gray-600 body-font'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<Link href='/'>
					<a className='float-right mb-4 flex flex-row items-center font-medium text-gray-900 md:mb-0'>
						<img src='/gitcoinLogoDark.svg' alt='Gitcoin Logo' />
						<img className='ml-6 mr-6' src='/logoLine.svg' alt='Logo Line' />
						<img src='/passportLogoBlack.svg' alt='pPassport Logo' />
					</a>
				</Link>
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<a
						href='https://docs.passport.gitcoin.co/gitcoin-passport-sdk/getting-started'
						target='_blank'
						rel='noopener noreferrer'
						className='mr-5 hover:text-gray-900 flex flex-row'
					>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='mr-1.5 h-6 w-4'
						>
							<path
								d='M4.25 1.16663C2.79459 1.16663 1.47325 1.56401 0.5 2.21061V13.0439C1.47325 12.3973 2.79459 12 4.25 12C5.70541 12 7.02675 12.3973 8 13.0439C8.97325 12.3973 10.2946 12 11.75 12C13.2054 12 14.5268 12.3973 15.5 13.0439V2.21061C14.5268 1.56401 13.2054 1.16663 11.75 1.16663C10.2946 1.16663 8.97325 1.56401 8 2.21061C7.02675 1.56401 5.70541 1.16663 4.25 1.16663Z'
								fill='white'
							/>
							<path
								d='M8 2.21061V13.0439M8 2.21061C7.02675 1.56401 5.70541 1.16663 4.25 1.16663C2.79459 1.16663 1.47325 1.56401 0.5 2.21061V13.0439C1.47325 12.3973 2.79459 12 4.25 12C5.70541 12 7.02675 12.3973 8 13.0439M8 2.21061C8.97325 1.56401 10.2946 1.16663 11.75 1.16663C13.2054 1.16663 14.5268 1.56401 15.5 2.21061V13.0439C14.5268 12.3973 13.2054 12 11.75 12C10.2946 12 8.97325 12.3973 8 13.0439'
								stroke='#111827'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Docs
					</a>
					<Link href='/Examples'>
						<a className='mr-5 hover:text-gray-900 flex flex-row'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='mr-1.5 h-4 w-4'
							>
								<path
									d='M5.05374 5.05374C3.42655 6.68093 3.42655 9.31911 5.05374 10.9463L5.50965 11.4022C6.03706 11.9296 6.33335 12.6449 6.33335 13.3908V13.8333C6.33335 14.7538 7.07954 15.5 8.00002 15.5C8.92049 15.5 9.66668 14.7538 9.66668 13.8333V13.3908C9.66668 12.6449 9.96297 11.9296 10.4904 11.4022L10.9463 10.9463C12.5735 9.31911 12.5735 6.68093 10.9463 5.05374C9.31911 3.42656 6.68092 3.42656 5.05374 5.05374Z'
									fill='white'
								/>
								<path
									d='M6.05295 12.1667H9.94708M8.00002 0.5V1.33333M13.3033 2.6967L12.7141 3.28596M15.5001 7.99996H14.6667M1.33339 7.99996H0.500061M3.28597 3.28595L2.69672 2.6967M5.05374 10.9463C3.42655 9.31911 3.42655 6.68093 5.05374 5.05374C6.68092 3.42656 9.31911 3.42656 10.9463 5.05374C12.5735 6.68093 12.5735 9.31911 10.9463 10.9463L10.4904 11.4022C9.96297 11.9296 9.66668 12.6449 9.66668 13.3908V13.8333C9.66668 14.7538 8.92049 15.5 8.00002 15.5C7.07954 15.5 6.33335 14.7538 6.33335 13.8333V13.3908C6.33335 12.6449 6.03706 11.9296 5.50965 11.4022L5.05374 10.9463Z'
									stroke='#111827'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							Examples
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};
