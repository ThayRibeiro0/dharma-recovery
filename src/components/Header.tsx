import { Link } from 'react-router-dom';
import logo from '../static/logo.png'

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} className="logo" />
      </div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |
        <Link to="/meetings">Meetings</Link> | 
        <Link to="/calendar">Calendar</Link> |
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
