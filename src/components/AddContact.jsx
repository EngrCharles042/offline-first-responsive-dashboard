import {useState} from "react";

const AddContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        addresses: [''],
        longitude: '',
        latitude: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddressChange = (index, value) => {
        const addresses = [...formData.addresses];
        addresses[index] = value;
        setFormData({
            ...formData,
            addresses
        });
    };

    const addAddress = () => {
        if (formData.addresses.length < 5) {
            setFormData({
                ...formData,
                addresses: [...formData.addresses, '']
            });
        } else {
            alert("You can't add more than 5 addresses");
        }
    };

    const removeAddress = (index) => {
        if (formData.addresses.length > 1) {
            const addresses = [...formData.addresses];
            addresses.splice(index, 1);
            setFormData({
                ...formData,
                addresses
            });
        } else {
            alert("You must have at least 1 address");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Form</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    // pattern="[0-9]{10}"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />

                <div id="addressContainer">
                    <label htmlFor="address">Addresses:</label>
                    {formData.addresses.map((address, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => handleAddressChange(index, e.target.value)}
                                required
                                style={styles.input}
                            />
                            <button
                                type="button"
                                onClick={() => removeAddress(index)} style={styles.removeButton}>Remove</button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addAddress} style={styles.addButton}>Add Address</button>
                </div>

                <label htmlFor="longitude">Longitude:</label>
                <input
                    type="text"
                    id="longitude"
                    name="longitude"
                    value={formData.longitude}
                    readOnly
                    style={styles.input}
                />

                <label htmlFor="latitude">Latitude:</label>
                <input
                    type="text"
                    id="latitude"
                    name="latitude"
                    value={formData.latitude}
                    readOnly
                    style={styles.input}
                />

                <button type="submit" style={styles.submitButton}>Add Contact</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "600px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "white"
    },
    heading: {
        textAlign: "center",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        color: "#333",
    },
    input: {
        backgroundColor: "white",
        border: "2px solid green",
        borderRadius: "4px",
        color: "black",
        padding: "8px",
        margin: "8px 0",
        fontSize: "16px",
    },
    addButton: {
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px",
        margin: "8px 0",
        cursor: "pointer",
        fontSize: "16px",
    },
    removeButton: {
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px",
        margin: "8px 0",
        cursor: "pointer",
        fontSize: "16px",
    },
    submitButton: {
        backgroundColor: "green",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px",
        margin: "8px 0",
        cursor: "pointer",
        fontSize: "16px",
    },
    // Add more styles for other elements as needed
};

export default AddContact;
