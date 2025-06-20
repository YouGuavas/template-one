import Image from 'next/image';
import banner from '../public/banner.svg';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Quality Products | Top Shelf Cannabis in Flint, MI',
	description:
		'Quality Products is a high-end cannabis provider serving the greater Flint, MI area. Powered by Donnovan Aleman. Website facilitated by Patrick Other (Pat).',
	icons: { icon: '/favicon.ico' },
};

export default function Home() {
	return (
		<main className={`flex row`}>
			<p>
				NOTE - this site is in &quot;Rough Draft&quot; mode - I need to make a
				ton of changes. This is only for visualization.
			</p>
			<p>
				Current theming ideas involve purple, green, and gold - for associations
				with royalty, quality, and trust. Open to modifications in alignment
				with your vision.
			</p>

			<div className={`banner-container width-full center bg-2`}>
				<Image
					src={banner.src}
					fill
					className={`relative`}
					alt="Car and flag"
				/>
			</div>
			<h1 className={`undisplayed`}>Quality Products</h1>
			<section className={`width-half`}>
				<h2 className={`style-1 color-1 uppercase thin spaced`}>
					A Quality Mission.
				</h2>
				<p>Placeholder text - mission statement.</p>
			</section>

			<section className={`width-half`}>
				<h2 className={`style-1 color-1 uppercase thin spaced`}>
					How to Grow Quality Products
				</h2>
				<p>
					Placeholder text - a description of the care that goes into growing
					Quality Products&apos; products.
				</p>
			</section>
		</main>
	);
}
