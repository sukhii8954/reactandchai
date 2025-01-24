/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */

import React from "react";
import { Container, LogoutBtn, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => {
    state.auth.status;
  });
  const navigate = useNavigate();
  //  using navigation to navigate to different pages
  // and it always used with array in which we keep the paths
  // where to navigate on some condition.

  // what we add in objects in array it gets added to navigation bar

  const navItems = [
    { name: "name", slug: "/", acitve: true },
    { name: "Login", slug: "/login", acitve: !authStatus },
    { name: "Signup", slug: "/signup", acitve: !authStatus },
    { name: "Add Posts", slug: "/all-posts", acitve: authStatus },
    { name: "Add Post", slug: "/add-post", acitve: authStatus },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      {/* we will insert nav component inside container 
       and will take logo and loop the unordered list */}
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.acitve ?   // if item in navigation is active then navigate to the particular item
              (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                    className="inline-block  px-6 py-2 duration 200 hover:bg-blue-100 rounded-full">
                    {item.name}
                  </button>
                </li> 
                  // else show null 
              ) : null
            )}
             {/* so if user is authenticated then we show logout but only */}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
            
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
