import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';

export default function Layout({ children }) {
	return (
		<Box>
			<Header />
			<Box>{children}</Box>
			<Footer />
		</Box>
	);
}
//hay order component

export const wityLayout = Component => {
	return function wityLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
