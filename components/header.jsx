import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import DropdownButton from './dropdownButton';

function Header(props) {
  return (
    <header>
      <div className="sticky top-0 z-30  h-14	 w-full  bg-white p-2 drop-shadow  ">
        <div className=" m-auto flex flex-row items-center lg:w-full xl:w-[1080px]  2xl:w-[1080px]">
          <div className="  flex flex-row items-center  md:w-1/5 ">
            <Link href="/">
              <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
                <Image
                  src="https://i0.wp.com/healthootopia.com/wp-content/uploads/2021/01/4.png?fit=192%2C192&ssl=1"
                  layout="fill"
                  objectFit="contain"
                  alt="logo"
                />
              </div>
            </Link>

            <Link href="/">
              <a className="pl-2 font-Sofia text-lg md:text-xl">
                Healthootopia
              </a>
            </Link>
          </div>
          <span className="flex flex-auto" />

          {/* hidden for big screen */}
          <div className="hidden justify-center space-x-1 md:flex">
            <DropdownButton />
            <Link href="/about">
              <button class="inline-flex items-center  py-2 px-4 font-OpenSans font-semibold text-gray-700">
                <span class="mr-1 hover:text-gray-900">About Me</span>
              </button>
            </Link>
          </div>

          <button onClick={() => props.setMenu(!props.menu)}>
            {props.menu ? (
              <AiOutlineClose className="headerIcon md:hidden" />
            ) : (
              <FiMenu className="headerIcon md:hidden" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
