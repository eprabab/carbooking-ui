import Footer from '../footer';
import Header from '../header';
import useSWR from 'swr';
import Image from 'next/image';

import Fetcher from '../../components/fetcher';
import { useState } from 'react';
import Carousel from 'nuka-carousel';

interface Attraction {
	name: string;
	summary: string;
	detailed: string;
	imagesUrl: string[];
}

export default function Attractions() {
	const { data, error } = useSWR('/api/attractions', Fetcher);
	const [showDetails, setShowDetails] = useState<{ [key: string]: string }>(
		{}
	);
	const toggleHide = (index: number) => {
		setShowDetails({
			...showDetails,
			[index]: !showDetails[index],
		});
	};
	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;
	const newData: Attraction[] = data;
	return (
		<div>
			<Header />
			<div>
				<section id='teaser-blog'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6'>
								<h2 className='title'>Car Rental Blog Page</h2>
							</div>
						</div>
					</div>
				</section>

				<section className='blog-posts'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8'>
								<div className='blog-box'>
									{newData &&
										newData.length &&
										newData.map(
											(
												item: Attraction,
												index: number
											) => {
												return (
													<div
														className='blog-post single-post'
														key={index}
													>
														<div className='post-attachment'>
															<Carousel
																adaptiveHeight={
																	true
																}
															>
																{item.imagesUrl &&
																	item
																		.imagesUrl
																		.length &&
																	item.imagesUrl.map(
																		(
																			imgUrl,
																			idx: number
																		) => {
																			return (
																				<div
																					key={
																						idx
																					}
																				>
																					<Image
																						src={
																							imgUrl
																						}
																						alt='car1'
																						width={
																							750
																						}
																						className='img-responsive'
																						height={
																							354
																						}
																					/>
																				</div>
																			);
																		}
																	)}
															</Carousel>
														</div>
														<div className='post-content-text'>
															<h2 className='post-title'>
																<a href='#'>
																	{item.name}
																</a>
															</h2>

															<p>
																{item.summary}
															</p>
														</div>
														{!!showDetails[
															index
														] && (
															<div className='post-content-text'>
																<p>
																	{
																		item.detailed
																	}
																	<span
																		className='read-more'
																		onClick={(
																			e
																		) =>
																			toggleHide(
																				index as number
																			)
																		}
																	>
																		Hide
																	</span>
																</p>
															</div>
														)}
														{!showDetails[
															index
														] && (
															<div
																className='read-more'
																onClick={(e) =>
																	toggleHide(
																		index as number
																	)
																}
															>
																Continue
																reading...
															</div>
														)}
													</div>
												);
											}
										)}
								</div>
							</div>
							<div className='col-md-4'>
								<div className='sidebar'>
									<aside
										id='text-1'
										className='widget widget_text'
									>
										<h2 className='widget-title'>
											Text Widget
										</h2>

										<div className='textwidget'>
											<div className='text-box'>
												<p>
													At vero eos et accusam et
													justo duo dolores et ea
													rebum. Lorem ipsum dolor sit
													amet, consetetur sadipscing
													elitr, sed nonumy eirmod
													tempor invidunt ut labore et
													dolore magnaed aliquyam
													erat, sed diam voluptua.
													Stet clita kasd gubergren.
												</p>
											</div>
										</div>
									</aside>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}
