import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<ul className='footer-nav'>
							<li>
								<Link className='scroll-to' href='/'>
									Home
								</Link>
							</li>
							<li>
								<Link className='scroll-to' href='/attractions'>
									Attractions
								</Link>
							</li>
							<li>
								<Link className='scroll-to' href='/tarrifs'>
									Tarrifs
								</Link>
							</li>

							<li>
								<Link className='scroll-to' href='/contact'>
									Contact
								</Link>
							</li>
						</ul>
						<div className='clearfix'></div>
						<p className='copyright'>
							©{new Date().getFullYear()} OotyRentalTaxis, All
							Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
