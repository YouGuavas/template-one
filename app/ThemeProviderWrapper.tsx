'use client';

import { Provider } from './theme/ThemeContext';

export function ProviderWrapper({ children }: { children: React.ReactNode }) {
	return <Provider>{children}</Provider>;
}
