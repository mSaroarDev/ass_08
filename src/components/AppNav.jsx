import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <div className=" z-50 bg-gray-100 py-5">
      <div className="container">
        <div className="grid grid-cols-2">
          <ul>
            <li className="font-fontBn font-medium text-2xl">
              <Link to="/">আয় ব্যায়</Link>
            </li>
          </ul>

          <ul className=" font-fontBn flex items-center justify-end gap-4">
                <Link to="/"><li className="menu-link">হোমপেজ</li></Link>
                <Link to="/income"><li className="menu-link">উপার্জন</li></Link>
                <Link to="/expense"><li className="menu-link">খরচ</li></Link>
            </ul>
        </div>
        
           
       
      </div>
    </div>
  );
};

export default AppNav;
