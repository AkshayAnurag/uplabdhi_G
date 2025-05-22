import React from 'react';
// App.css is imported in App.js, so Sidebar can use its classes

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Determine the class for the sidebar based on the isOpen prop
  const sidebarContainerClass = `sidebar ${isOpen ? '' : 'sidebar-closed'}`;

  // Using CSS classes for sections and items now
  return (
    <div className={sidebarContainerClass}>
      <div className="sidebar-section">
        <strong>Roles</strong>
        <div className="sidebar-item">Full Stack Developer</div>
        <div className="sidebar-item">Frontend Developer</div>
        <div className="sidebar-item">Android Developer</div>
      </div>
      <div className="sidebar-section">
        <strong>Technologies</strong>
        <div className="sidebar-item">AWS</div>
        <div className="sidebar-item">React</div>
      </div>
      {/* 
        A close button (part of Sidebar) could be styled and use toggleSidebar:
        <button 
          onClick={toggleSidebar} 
          // style={{ position: 'absolute', top: '10px', right: '10px', ...otherStyles }}
          className="sidebar-close-button" // Example class for a potential close button
        >
          &times; Close
        </button> 
      */}
    </div>
  );
};

export default Sidebar;
