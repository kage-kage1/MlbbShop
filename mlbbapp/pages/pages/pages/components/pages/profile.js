import Header from '../components/Header';

export default function Profile() {
    return (
        <div>
            <Header />
            <main>
                <h1>Your Profile</h1>
                <p>Username: JohnDoe</p>
                <p>Email: johndoe@example.com</p>
                <button>Edit Profile</button>
            </main>
        </div>
    );
}
