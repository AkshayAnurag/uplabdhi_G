import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './App.css'; // Import the CSS file

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar is closed by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Classes will now control the main content's margin and width
  const mainContentClass = `main-content ${isSidebarOpen ? '' : 'main-content-sidebar-closed'}`;
  // The sidebar component itself will get a class based on isOpen prop

  return (
    // The outermost div doesn't need specific styles like display:flex
    // if the sidebar is position:fixed, as it's out of the normal flow.
    <div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={mainContentClass}>
        <button onClick={toggleSidebar} className="toggle-button">
          {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        <h1>Hello, React!</h1>
        {/* Other main content here */}
      </div>
    </div>
  );
}

export default App;
