'use client';

import styles from './nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import potleaf from '../../public/icons/potleaf.svg';

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
			className={`${styles.myNavFull} py-1 px-1 bg-4 left flex fixed`}
			id="menu-full"
		>
			<ul className={`flex no-deco`}>
				<li>
					<NavLink href="/">
						<div className={`icon-container`}>
							<Image src={potleaf.src} fill alt="Flag Icon" />
						</div>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
