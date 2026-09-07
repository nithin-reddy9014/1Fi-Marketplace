import { Link } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="bottom-nav">
      <Link to="/">
        <span>⌂</span>
        <small>Home</small>
      </Link>

      <Link to="/shop" className="active">
        <span>▣</span>
        <small>Shop</small>
      </Link>

      <Link to="#">
        <span>▤</span>
        <small>EMI Dues</small>
      </Link>

      <Link to="#">
        <span>⌁</span>
        <small>Limit</small>
      </Link>

      <Link to="#">
        <span>♙</span>
        <small>Profile</small>
      </Link>
    </div>
  );
}

export default BottomNav;
