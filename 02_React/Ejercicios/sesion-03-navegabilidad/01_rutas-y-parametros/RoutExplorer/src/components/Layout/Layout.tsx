import { Outlet } from 'react-router-dom';
import { useLogger } from '../../hooks/useLogger';
import './Layout.css';

export default function Layout() {
    useLogger(Layout.name)

    return (
        <main className={'main-content'}>
            <div className="content-wrapper">
                <Outlet />
            </div>
        </main>
    );
};