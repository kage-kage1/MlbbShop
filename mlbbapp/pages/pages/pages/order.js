import Header from '../components/Header';

export default function Order() {
    return (
        <div>
            <Header />
            <main>
                <h1>Order Confirmation</h1>
                <p>You have selected 500 Diamonds.</p>
                <button>Proceed to Payment</button>
            </main>
        </div>
    );
}
