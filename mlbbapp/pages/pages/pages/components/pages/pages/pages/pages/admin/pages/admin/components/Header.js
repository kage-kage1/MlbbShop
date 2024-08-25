import Link from 'next/link';
import NotificationBell from './NotificationBell';

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/packages">Packages</Link></li>
                    <li><Link href="/order">Order</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                </ul>
                <NotificationBell />
            </nav>
        </header>
    );
}
