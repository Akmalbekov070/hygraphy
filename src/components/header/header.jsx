import { Box, Button, Flex, HStack, Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdGTranslate } from 'react-icons/md';
import { language } from '../config/language';

export default function Header() {
	const { t, i18n } = useTranslation();
	console.log(language);

	const onLanguage = lng => {
		i18n.changeLanguage(lng);
	};
	return (
		<Box w={'full'} h={20} bg={'gray.500'} px={'20px'} py={5}>
			<Flex justifyContent={'space-between'} alignItems={'center'}>
				<Box>
					<Link href={'/'}>
						<Heading>{t('salom', { ns: 'layout' })}</Heading>
					</Link>
				</Box>
				<HStack gap={10}>
					<Link href='/about'> {t('about', { ns: 'layout' })}</Link>
					<Link href=''>{t('home', { ns: 'layout' })}</Link>
					<Link href=''>{t('conatact', { ns: 'layout' })}</Link>
				</HStack>
				<HStack gap={3}>
					<Menu>
						<MenuButton as={Button}>
							<MdGTranslate />
						</MenuButton>
						<MenuList>
							{language.map(item => (
								<MenuItem key={item.lng} onClick={() => onLanguage(item.lng)}>
									{item.name}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
					<Button variant={'ghost'}>{t('sign', { ns: 'layout' })}</Button>
				</HStack>
			</Flex>
		</Box>
	);
}
