import React, { useState } from "react";
import { BsFillBellFill, BsFillPenFill, BsGrid1X2Fill, BsFillArchiveFill, BsFillArrowUpCircleFill, BsFillArrowDownCircleFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillQuestionCircleFill,BsFillClockFill, BsFillBookFill,BsFillCarFrontFill,BsFillGrid3X3GapFill } from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isPatroliDropdownVisible, setPatroliDropdownVisible] = useState(false);
  const [isLaporanDropdownVisible, setLaporanDropdownVisible] = useState(false);

  const togglePatroliDropdown = () => {
    setPatroliDropdownVisible(!isPatroliDropdownVisible);
    setLaporanDropdownVisible(false); // Tutup dropdown Laporan jika terbuka
  };

  const toggleLaporanDropdown = () => {
    setLaporanDropdownVisible(!isLaporanDropdownVisible);
    setPatroliDropdownVisible(false); // Tutup dropdown Patroli jika terbuka
  };

  const closeSidebar = () => {
    setPatroliDropdownVisible(false);
    setLaporanDropdownVisible(false);
    OpenSidebar();
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive active" : "sidebar-responsive"}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          WELCOME
        </div>
        <span className='icon close_icon' onClick={closeSidebar}>x</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="dashboard">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
  <a href="#" onClick={togglePatroliDropdown}>
    <BsFillArchiveFill className='icon' /> Patroli{' '}
    {isPatroliDropdownVisible ? <BsFillArrowUpCircleFill className="dropdown-icon" /> : <BsFillArrowDownCircleFill className="dropdown-icon" />}
  </a>
  {isPatroliDropdownVisible && (
    <div className="dropdown-content">
      <a href="/patroli" className="dropdown-item">
        <BsFillClockFill className='icon' /> Patrol
      </a>
      <a href="/mutasi" className="dropdown-item">
        <BsFillBookFill className='icon' /> Mutasi
      </a>
      {/* Add more options as needed */}
    </div>
  )}
</li>

<li className='sidebar-list-item'>
  <a href="#" onClick={toggleLaporanDropdown}>
    <BsMenuButtonWideFill className='icon' /> Laporan{' '}
    {isLaporanDropdownVisible ? <BsFillArrowUpCircleFill className="dropdown-icon" /> : <BsFillArrowDownCircleFill className="dropdown-icon" />}
  </a>
  {isLaporanDropdownVisible && (
    <div className="dropdown-content">
      <a href="/asset" className="dropdown-item">
        <BsFillGrid3X3GapFill className='icon' /> Asset
      </a>
      <a href="/lapdi" className="dropdown-item">
        <BsFillArchiveFill className='icon' /> Lapdi
      </a>
      <a href="/inout" className="dropdown-item">
        <BsFillCarFrontFill className='icon' /> In Out
      </a>
      <a href="/bap" className="dropdown-item">
        <BsFillPenFill className='icon' /> BAP
      </a>
      {/* Add more options as needed */}
    </div>
  )}
</li>
        <li className='sidebar-list-item'>
          <a href="/tamu">
            <BsPeopleFill className='icon' /> Tamu
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/ekspedisi">
            <BsListCheck className='icon' /> Ekspedisi
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/darurat">
            <BsFillBellFill className='icon' /> Darurat
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/bantuan.pdf" download="bantuan.pdf">
            <BsFillQuestionCircleFill className='icon' /> Bantuan
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;