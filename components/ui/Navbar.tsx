import Image from 'next/image';
import NextLink from 'next/link';

import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
        alt='icono de la app'
        width={70}
        height={70}
      />

      <NextLink href='/' passHref>
        <Link
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
          }}
        >
          <Text
            color='yellow'
            css={{ fontStyle: 'italic', WebkitTextStroke: '2px #3b83bd' }}
            h1
          >
            P
          </Text>
          <Text color='yellow' css={{ WebkitTextStroke: '1px #3b83bd' }} h3>
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link>
          <Text className='material-symbols-outlined' color='red'>
            favorite
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
