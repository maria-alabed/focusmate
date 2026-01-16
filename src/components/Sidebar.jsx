import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <h2 className="logo">Admin</h2>

      <ul>
        <li onClick={() =>navigate ('/admin') }>Dashboard</li>
        <li onClick={() =>navigate ('/reports')}>Reports</li>
        <li>Statistics</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
