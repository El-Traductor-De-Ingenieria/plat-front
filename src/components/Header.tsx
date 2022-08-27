import type { ReactNode } from 'react';

export function Header({ children }: { children?: ReactNode }) {
	return <header>{children}</header>;
}
