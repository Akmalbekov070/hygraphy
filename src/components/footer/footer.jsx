import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t, i18n } = useTranslation();
	const onLanguage = lng => {
		i18n.changeLanguage(lng);
	};
	return <></>;
}
