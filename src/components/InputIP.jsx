import React from "react";

export const InputIP = ({ address, setAddress }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    setAddress(e.target.previousSibling.value);
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Search for any IP address or domain" />
        <button type="button" onClick={handleButtonClick}>
          Submit
        </button>
      </form>
    </div>
  );
};
