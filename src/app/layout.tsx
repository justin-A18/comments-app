import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './_lib/registry';
import { TanStackProvider } from './_providers/query';

const poppins = Poppins({
	variable: '--font-poppins',
	weight: ['400', '500', '600'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Sección de Comentarios',
	description: 'Una plataforma para compartir y leer comentarios de usuarios.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body className={`${poppins.variable}`}>
				<TanStackProvider>
					<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				</TanStackProvider>
			</body>
		</html>
	);
}
