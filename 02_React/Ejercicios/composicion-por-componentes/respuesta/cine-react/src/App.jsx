import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageLayout from "./components/PageLayout/PageLayout";
import './App.css'

export default function App() {
    return (
        <div className="app">
            <Navbar></Navbar>
            <PageLayout></PageLayout>
            <Footer></Footer>
        </div>
    );
}
