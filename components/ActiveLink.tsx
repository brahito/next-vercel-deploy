import React, { CSSProperties, FC } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props{
    name: string;
    link: string;
}

export const ActiveLink: FC<Props> = ({ name, link }) => {

    const style: CSSProperties = {
        color: '#0070f3',
        textDecoration: 'underline',
    }

    const {asPath} = useRouter();

    return (
        <Link href={link}>
            {<a style={asPath === link ? style : undefined}>{name}</a>}
        </Link>
    )
}
