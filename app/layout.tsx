import { Inter } from 'next/font/google';
import Head from 'next/head';
import { ProviderWrapper } from './ThemeProviderWrapper'; // or from your UI library

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Orbitron:wght@400..900&family=Patrick+Hand&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className={`${inter.className} bg-5`}>
				<ProviderWrapper>{children}</ProviderWrapper>
			</body>
		</html>
	);
}
