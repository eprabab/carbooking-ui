import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<header
			data-spy='affix'
			data-offset-top='39'
			data-offset-bottom='0'
			className='large'
		>
			<div className='row container box'>
				<div className='col-md-5'>
					{/* <!-- Logo start --> */}
					<div className='brand'>
						<h1>
							<a className='scroll-to'>
								<Image
									className='img-responsive'
									src='./img/logo.gif'
									alt='Car|Rental'
									width='300'
									height='57'
								/>
							</a>
						</h1>
					</div>
					{/* <!-- Logo end --> */}
				</div>
				<div className='col-md-7'>
					<div className='pull-right'>
						<div className='header-info pull-right'>
							<div className='contact pull-left'>
								CONTACT: (562) 498-4600
							</div>
						</div>
					</div>

					<div className='clearfix'></div>

					{/* <!-- start navigation --> */}
					<nav className='navbar navbar-default' role='navigation'>
						<div className='container-fluid'>
							{/* <!-- Toggle get grouped for better mobile display --> */}
							<div className='navbar-header'>
								<button
									type='button'
									className='navbar-toggle'
									onClick={() => setShowNavbar(!showNavbar)}
								>
									<span className='sr-only'>
										Toggle navigation
									</span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
								</button>
								<a
									className='navbar-brand scroll-to'
									href='#top'
								>
									<Image
										className='img-responsive'
										src='img/logo.gif'
										alt='Car|Rental'
										width='300'
										height='57'
									/>
								</a>
							</div>
							{/* <!-- Collect the nav links, for toggling --> */}
							<div
								className={`navbar-collapse ${
									showNavbar ? 'collapse in' : 'collapse'
								} `}
							>
								<ul className='nav navbar-nav navbar-right'>
									<li className='active'>
										<Link href='/' className='scroll-to'>
											Home
										</Link>
									</li>
									<li>
										<Link
											href='/attractions'
											className='scroll-to'
										>
											Attractions
										</Link>
									</li>
									<li>
										<Link
											href='/tarrifs'
											className='scroll-to'
										>
											Tarrifs
										</Link>
									</li>

									<li>
										<Link
											href='/contact'
											className='scroll-to'
										>
											Contact
										</Link>
									</li>
								</ul>
								{/* <!-- Nav-Links end --> */}
							</div>
						</div>
					</nav>
					{/* <!-- end navigation --> */}
				</div>
			</div>
		</header>
	);
}
