import React from "react";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className="pt-3">
      <div className="text-center bg-darkGray text-white py-2">
        weather forecast
      </div>
    </footer>
  );
};

export default Footer;
