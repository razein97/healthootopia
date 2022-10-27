import React from 'react';
import Link from 'next/link';

export default function DropdownButton() {
  return (
    <div className="">
      <div className="dropdown relative inline-block">
        <button className="inline-flex items-center  py-2 px-4 font-OpenSans font-semibold text-gray-700">
          <span className="mr-1 hover:text-gray-900">Categories</span>
        </button>
        <ul className="dropdown-menu absolute hidden pt-1 text-gray-700">
          <li className="">
            <Link className="" href="/categories/health">
              <p className="whitespace-no-wrap block rounded-t bg-gray-100 py-2 px-4 hover:bg-gray-200">
                <button>Health</button>
              </p>
            </Link>
          </li>
          <li className="">
            <Link
              className="whitespace-no-wrap block bg-gray-100 py-2 px-4 hover:bg-gray-200"
              href="/categories/fitness"
            >
              <button>Fitness</button>
            </Link>
          </li>
          <li className="">
            <Link
              className="whitespace-no-wrap block rounded-b bg-gray-100 py-2 px-4 hover:bg-gray-200"
              href="/categories/potpourri"
            >
              <button> Potpourri</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
