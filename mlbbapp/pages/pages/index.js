import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to MLBB Diamond Shop</h1>
                <p>Buy MLBB Diamonds at the best prices!</p>
                <Link href="/packages">Browse Packages</Link>
            </main>
        </div>
    );
}
