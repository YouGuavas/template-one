'use client';

import { createContext, useState, useEffect, useContext } from 'react';

type Theme = 'spaceship' | 'default' | 'alternate';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

export const Provider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setThemeState] = useState<Theme>('default');

	// On first load: try localStorage or system preference
	useEffect(() => {
		const stored = localStorage.getItem('theme') as Theme | null;

		const initialTheme = 'default';
		setThemeState(initialTheme);
		document.documentElement.classList.add(initialTheme);
	}, []);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.remove('default');
		document.documentElement.classList.add(newTheme);
	};

	const toggleTheme = () => {
		setTheme(theme === 'default' ? 'alternate' : 'default');
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
