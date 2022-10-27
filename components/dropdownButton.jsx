import React from 'react';
import Link from 'next/link';

export default function DropdownButton() {
  return (
    <div className="">
      <div className="dropdown  relative inline-block">
        <button className="inline-flex items-center  py-2 px-4 font-OpenSans font-semibold text-gray-700">
          <span className="mr-1 hover:text-gray-900">Categories</span>
        </button>
        <ul className="dropdown-menu absolute hidden  w-40  text-gray-700">
          <li>
            <Link href="/categories/health">
              <p className="whitespace-no-wrap block bg-gray-50  py-2 px-4 hover:cursor-pointer hover:bg-gray-200">
                Health
              </p>
            </Link>
          </li>
          <hr />

          <Link href="/categories/fitness">
            <p className="whitespace-no-wrap block bg-gray-50 py-2 px-4 hover:cursor-pointer hover:bg-gray-200">
              Fitness
            </p>
          </Link>
          <hr />

          <Link href="/categories/potpourri">
            <p className="whitespace-no-wrap block bg-gray-50 py-2 px-4 hover:cursor-pointer hover:bg-gray-200">
              Potpourri
            </p>
          </Link>
        </ul>
      </div>
    </div>
  );
}
