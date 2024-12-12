import Navbar from "./Navbar.jsx";

// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
    return (
        <div className="relative">
            <Navbar/>
            <main className="mt-20">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;