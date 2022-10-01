import React from 'react';
import Link from 'next/link';

export const Navbar = (): JSX.Element => {
	return (
		<header className='text-gray-600 body-font border-b-2'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<div className='float-right mb-4 flex flex-row items-center font-medium text-gray-900 md:mb-0'>
					<img src='/gitcoinLogoDark.svg' alt='Gitcoin Logo' />
					<img className='ml-6 mr-6' src='/logoLine.svg' alt='Logo Line' />
					<img src='/passportLogoBlack.svg' alt='pPassport Logo' />
				</div>

				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
					<Link href='/'>
						<a className='mr-5 hover:text-gray-900' href=''>
							Showcase
						</a>
					</Link>
					<a
						href='https://docs.passport.gitcoin.co/gitcoin-passport-sdk/getting-started'
						target='_blank'
						rel='noopener noreferrer'
						className='mr-5 hover:text-gray-900'
					>
						Docs
					</a>
					<Link href='/Examples'>
						<a className='mr-5 hover:text-gray-900'>Examples</a>
					</Link>
				</nav>
			</div>
		</header>
	);
};
