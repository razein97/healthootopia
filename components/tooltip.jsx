import React from 'react';

export default function Tooltip({ tooltip, icon }) {
  return (
    <div className="group relative flex">
      {icon}
      <span className="tooltip-text absolute z-50 -mt-12 -ml-8 -mr-10 hidden w-24 rounded-md bg-gray-800 py-1 px-1 text-center text-xs text-gray-100 group-hover:block">
        {tooltip}
      </span>
    </div>
  );
}
