import './App.css';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import UserProfile from './pages/UserProfile';
import Products from './pages/Products';
import { useLogger } from './hooks/useLogger';

const year = (new Date).getFullYear();
const reactRouterVersion = 7;

export default function App() {
    useLogger(App.name)
    
    return (
        <BrowserRouter>
            <div className={'app-container'}>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="about" element={<AboutUs/>}/>
                        <Route path="users/:userId" element={<UserProfile/>}/>
                        <Route path="products?" element={<Products/>}/>
                    </Route>
                </Routes>
                <Footer year={year} reactRouterVersion={reactRouterVersion}></Footer>
            </div>
        </BrowserRouter>
    );
};