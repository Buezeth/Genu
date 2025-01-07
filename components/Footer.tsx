"use-client"
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-[--primary-500] text-white">
      <div className="footer">
        <div>
          <ul>
            <li>
              <Link href={"/"}>hello@genu.cm</Link>
            </li>
            <li>
              <p>© {year} Genu</p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>St 534 Kicukiro</li>
            <li>+250 785 408 573</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Rue 18.562 Melen, Yaounde, Cameroon</li>
            <li>(+237) 681 498 939</li>
            <li>(+237) 620 250 522</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>55 Dr. Wilmington, Delaware, United States</li>
            <li>+1 (347) 974-3202</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
