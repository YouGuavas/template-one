'use client';

import styles from './nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import routes from '../routes';

import clsx from 'clsx';

type NavLinkProps = {
	href: string;
	children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
	const pathName = usePathname();
	const isActive = pathName === href;
	return (
		<Link
			scroll={false}
			href={href}
			id={pathName.toLowerCase()}
			className={clsx(
				`style-1 lowercase spaced thin no-deco darken z15`,
				isActive ? 'darken color-2' : 'color-2'
			)}
		>
			{children}
		</Link>
	);
}

export default function Nav() {
	return (
		<nav
			className={`${styles.myNavFull} py-1 px-1 bg-4 left flex fixed center`}
			id="menu-full"
		>
			<ul className={`flex no-deco`}>
				{routes.map(({ name, path, image }) => (
					<li key={path}>
						<NavLink href={path}>
							<div className={`icon-container`}>
								<Image src={image.src} fill alt={`${name}`} />
							</div>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
