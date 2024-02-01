import { useState, useEffect } from 'react';

const Dashboard = () => {
    const [contacts, setContacts] = useState([]);
    const zoom = 20;

    useEffect(() => {
        const mockContacts = [
            {
                id: 1,
                name: 'John Doe',
                phoneNumber: '1234567890',
                email: 'john@example.com',
                addresses: ['123 Main St', '456 Oak Ave', '789 Pine Ln'],
                longitude: '-73.9857',
                latitude: '40.748817'
            },
            {
                id: 2,
                name: 'Jane Smith',
                phoneNumber: '9876543210',
                email: 'jane@example.com',
                addresses: ['456 Elm St', '789 Maple Ave', '101 Pine Ln'],
                longitude: '-74.0059',
                latitude: '40.7128'
            },
            {
                id: 3,
                name: 'Bob Johnson',
                phoneNumber: '5551234567',
                email: 'bob@example.com',
                addresses: ['789 Oak St', '1023 Birch Ave', '543 Pine Ln'],
                longitude: '-73.9662',
                latitude: '40.7831'
            },
            {
                id: 4,
                name: 'Alice Williams',
                phoneNumber: '1239876543',
                email: 'alice@example.com',
                addresses: ['321 Cedar St', '654 Pine Ave', '876 Oak Ln'],
                longitude: '-73.9812',
                latitude: '40.7549'
            },

        ];

        setContacts(mockContacts);
    }, []);

    const getRandomAddress = (addresses) => {
        const randomIndex = Math.floor(Math.random() * addresses.length);
        return addresses[randomIndex];
    };


    return (
        <div style={styles.container}>
            <h2>Dashboard</h2>

            {/* Table View */}
            <div style={styles.section}>
                <h3>Table View</h3>
                <table border="1" style={styles.table}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Longitude</th>
                        <th>Latitude</th>
                    </tr>
                    </thead>
                    <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.email}</td>
                            <td>{getRandomAddress(contact.addresses)}</td>
                            <td>{contact.longitude}</td>
                            <td>{contact.latitude}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Map View */}
            <div style={styles.section}>
                <h3>Map View</h3>
                <iframe
                    src={`https://maps.google.com/maps?q=${contacts[2]?.latitude},${contacts[2]?.longitude}&z=${zoom}&output=embed`}
                    className="w-[100%] h-[60vh] shadow-xl"
                    style={styles.contain}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    section: {
        marginBottom: "20px",
        width: "100%",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
    },
    contain: {
        height: '400px',
        width: '100%',
    },
};

export default Dashboard;
