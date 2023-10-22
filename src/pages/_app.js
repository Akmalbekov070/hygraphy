import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export default function App({ Component, pageProps }) {
	return (
		<HydrationProvider>
			<I18nextProvider i18n={i18n}>
				<ChakraProvider>
					<Client>
						<Component {...pageProps} />
					</Client>
				</ChakraProvider>
			</I18nextProvider>
		</HydrationProvider>
	);
}
