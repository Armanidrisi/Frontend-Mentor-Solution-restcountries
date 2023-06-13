import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;
