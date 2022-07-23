import React, { useState } from "react"
import PopupContent from './popup/index';
import './assets/main.css';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="block mx-auto w-max mt-4 items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        data-toggle="modal"
        data-target="click-me"
      >
        Click Me
      </button>
      {open && (
        <div
          className="modal fade"
          id="click-me"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <PopupContent />
        </div>
      )}
    </div>
  );
}

export default App;