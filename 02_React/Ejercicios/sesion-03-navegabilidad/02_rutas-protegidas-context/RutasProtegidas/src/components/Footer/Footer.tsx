import './Footer.css';
import { useLogger } from '../../hooks/useLogger';

interface FooterProps {
    year: number,
    reactRouterVersion: number
}

export default function Footer({year, reactRouterVersion}: FooterProps) {
    useLogger(Footer.name)
    
    return (
        <div className={'footer'} >
            <p>© {year} RoutExplorer – React Router {reactRouterVersion}</p>
        </div>
    );
};