import React from 'react'

import styles from './header.module.scss';
import Link from 'next/link';

const Header = () => {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
    ];
    return (
        <div className='contain-fluid'>
            <div className={styles.portfolio_header}>
                <div className={styles.logo}>Manoj</div>
                <nav className={styles.nav_links}>
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className={styles.nav_link}>
                            {link.name}
                        </a>
                    ))}
                </nav>
                <Link href="/contact" className={styles.nav_contact}>connect with me</Link>
            </div>
        </div>
    )
}

export default Header