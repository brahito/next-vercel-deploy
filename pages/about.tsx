import Head from 'next/head'
import styles from '../styles/About.module.css'
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayour } from '../components/layouts/DarkLayour';
import { CSSProperties } from 'react';

export default function About() {
    const boxColors: CSSProperties = {
        width: "100px",
        height: "100px",
        boxShadow: "0px 0px 14px -2px #00000038",
    };
    const marginRight: CSSProperties = {
        marginRight: "5px",
    };
    return (
        <div className={styles.container}>
            <h1>About Page</h1>
            <h1 className={'title'}>
                Ir a<Link href="/">Home</Link>
            </h1>

            <p className={'description me-3'}>
                Get started by editing{' '}
                <code className={'code'}>pages/about.js</code>
            </p>
        </div>
    )
}

About.getLayout = function getLayout(page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayour>
                {page}
            </DarkLayour>
        </MainLayout>
    )
}
