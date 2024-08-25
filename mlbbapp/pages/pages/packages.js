import Header from '../components/Header';

const packages = [
    { id: 1, name: '100 Diamonds', price: 2.99 },
    { id: 2, name: '500 Diamonds', price: 9.99 },
    { id: 3, name: '1000 Diamonds', price: 18.99 },
];

export default function Packages() {
    return (
        <div>
            <Header />
            <main>
                <h1>Select a Package</h1>
                <ul>
                    {packages.map(pkg => (
                        <li key={pkg.id}>
                            <h2>{pkg.name}</h2>
                            <p>Price: ${pkg.price}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}
