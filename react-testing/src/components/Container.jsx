import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Container ({children}) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}