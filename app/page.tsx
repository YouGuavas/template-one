import Link from 'next/link';

import Image from 'next/image';
import banner from '../public/banner.svg';
import type { Metadata } from 'next';
import hours from './data/hours.json';
import inventory from './data/inventory.json';

export const metadata: Metadata = {
	title: 'Homesteader Template | An incredible egg stand',
	description:
		'An incredible egg provider serving the greater Flint, MI area. Powered by A Name. Website facilitated by Patrick Other (Pat).',
	icons: { icon: '/favicon.ico' },
};

export default function Home() {
	return (
		<main className={`flex row main center`}>
			<p>
				NOTE - this site is in &quot;Rough Draft&quot; mode - I need to make a
				ton of changes. This is only for visualization.
			</p>
			<p>
				Theming ideas and colors will align with your personal
				project/vision/preferences.
			</p>

			<p>
				I can add buttons here - or wherever - which allow people to call, text,
				or email you (useful for requests/inquiries, etc)
			</p>

			<div className={`banner-container width-full center bg-3`}>
				<Image src={banner.src} fill className={`relative`} alt="Egg Banner" />
			</div>
			<h1 className={`undisplayed`}>Homestead Name</h1>

			<section className={`width-full`}>
				<h2 className={`style-1 color-1 uppercase thin spaced`}>
					Homestead Bound.
				</h2>
				<p>Placeholder text - mission statement.</p>
			</section>

			<section className={`width-half`}>
				<h2 className={`style-1 color-1 uppercase thin spaced`}>Prices</h2>
				<p>Placeholder text.</p>
				<ul className={`width-full pad-none`}>
					{inventory.map((item, index) => {
						return (
							<li key={index} className={`no-deco`}>
								{item.item}: {item.price} - Optional Stock Count
							</li>
						);
					})}
				</ul>
			</section>

			<section className={`width-half`}>
				<h2 className={`style-1 color-1 uppercase thin spaced centered`}>
					Hours
				</h2>
				<ul className={`width-full pad-none`}>
					{hours.map((day, index) => {
						return (
							<li key={index} className={`no-deco`}>
								{day.day}: {day.hours}
							</li>
						);
					})}
				</ul>
			</section>

			<section className={`width-full center`}>
				<h2 className={`style-1 color-1 uppercase thin spaced`}>
					What You Will Find at the Stand
				</h2>
				<p>
					Placeholder text - a description of the natural, baked, or crafted
					goods found at your stand.
				</p>
			</section>

			<section className={`width-full`}>
				<h2 className={`style-1 color-1 uppercase thin spaced`}>
					Characters You May Meet
				</h2>
				<p>
					Placeholder text - a description of the people who operate the stand.
					This is your chance to tell your story. Optionally, for a small fee, I
					can cartoonize you, your animals, whatever. Go look at{' '}
					<Link
						className="no-deco lowercase spaced"
						href="https://patripples.com/character"
					>
						my character sheets
					</Link>{' '}
					for examples of the animation style I will use.
				</p>
			</section>
		</main>
	);
}
