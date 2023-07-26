import React from 'react';

const SummaryHeader = () => {
  return (
    <div className="header-summary grid grid-cols-tripleFr rounded-md bg-gray-500 p-4">
      <div className="flex items-center">Note Category</div>
      <div className="flex items-center">Active</div>
      <div className="flex items-center">Archived</div>
    </div>
  );
};

export default SummaryHeader;
