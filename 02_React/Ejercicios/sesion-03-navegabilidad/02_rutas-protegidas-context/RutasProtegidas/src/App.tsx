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
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './components/privateRoute/privateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const year = (new Date).getFullYear();
const reactRouterVersion = 7;

export default function App() {
    useLogger(App.name)
    
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className={'app-container'}>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Layout/>}>
                            <Route index element={<Home/>}/>
                            <Route path="about" element={<AboutUs/>}/>
                            <Route path="login" element={<Login/>}/>
                            <Route path="dashboard" element={
                                <PrivateRoute>
                                    <Dashboard/>
                                </PrivateRoute>
                            }/>
                            <Route path="userProfile" element={
                                <PrivateRoute>
                                    <UserProfile/>
                                </PrivateRoute>
                            }/>
                            <Route path="users/:userId" element={
                                <PrivateRoute>
                                    <UserProfile/>
                                </PrivateRoute>
                            }/>
                            <Route path="products?" element={
                                <PrivateRoute>
                                    <Products/>
                                </PrivateRoute>
                            }/>
                        </Route>
                    </Routes>
                    <Footer year={year} reactRouterVersion={reactRouterVersion}></Footer>
                </div>
            </BrowserRouter>
        </AuthProvider>
    );
};