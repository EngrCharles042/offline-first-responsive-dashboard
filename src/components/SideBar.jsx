import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <Link to={"/add-contact"} style={styles.link}>
                    <h2 style={styles.sidebarItem}>Add Contact</h2>
                </Link>

                <Link to={"/dashboard"} style={styles.link}>
                    <h2 style={styles.sidebarItem}>Dashboard</h2>
                </Link>
            </div>

            <div style={styles.centerContent}>
                <h1 style={styles.title}>Offline First Responsive Dashboard</h1>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        height: "100vh",
    },
    centerContent: {
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    sidebar: {
        width: "200px",
        background: "#333",
        color: "#fff",
        padding: "20px",
        boxSizing: "border-box",

    },
    title: {
        fontSize: "24px",
        marginBottom: "20px",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
    },
    sidebarItem: {
        fontSize: "18px",
        marginBottom: "10px",
    },
};


export default SideBar;
