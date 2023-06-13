import { useState } from "react";
const Navbar = ({ toggleMode, darkMode }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-8 md:px-14 bg-light-elem dark:bg-dark-blue shadow-md">
      <div>
        <h4 className="dark:text-light-elem font-semibold very-light-blue">
          Where in the world?
        </h4>
      </div>
      <div onClick={toggleMode} className="flex gap-2 items-center">
        {!darkMode ? (
          <>
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              width="1em"
              className="dark:text-light-elem text-very-light-blue"
            >
              <path
                fill="currentColor"
                d="M24 41q2.8 0 5.8-1.15t5.7-3.4q-4.9-1.7-8.45-4.575-3.55-2.875-5.625-6.65-2.075-3.775-2.65-8.25-.575-4.475.475-9.325-5.55 2.05-8.9 6.325Q7 18.25 7 24q0 7.2 4.9 12.1Q16.8 41 24 41Zm0 3q-4.2 0-7.85-1.55Q12.5 40.9 9.8 38.2q-2.7-2.7-4.25-6.35Q4 28.2 4 24q0-7.2 4.725-12.825Q13.45 5.55 20.5 4.3q1.3-.25 1.9.575.6.825.15 2.175-1.35 4.25-.9 8.65.45 4.4 2.5 8.15t5.575 6.475Q33.25 33.05 38 33.9q1.4.25 1.775 1.1.375.85-.475 1.85Q36.45 40 32.4 42q-4.05 2-8.4 2Z"
              />
            </svg>
            <h4 className="dark:text-light-elem font-semibold very-light-blue">
              dark mode
            </h4>
          </>
        ) : (
          <>
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              width="1em"
              className="dark:text-light-elem text-very-light-blue"
            >
              <path
                fill="currentColor"
                d="M24 9.5q-.65 0-1.075-.425Q22.5 8.65 22.5 8V3.5q0-.65.425-1.075Q23.35 2 24 2q.65 0 1.075.425.425.425.425 1.075V8q0 .65-.425 1.075Q24.65 9.5 24 9.5Zm10.25 4.25q-.45-.45-.45-1.05 0-.6.45-1.05l3.15-3.2Q37.85 8 38.475 8t1.075.45Q40 8.9 40 9.5q0 .6-.45 1.05l-3.2 3.2q-.45.45-1.05.45-.6 0-1.05-.45ZM40 25.5q-.65 0-1.075-.425Q38.5 24.65 38.5 24q0-.65.425-1.075Q39.35 22.5 40 22.5h4.5q.65 0 1.075.425Q46 23.35 46 24q0 .65-.425 1.075-.425.425-1.075.425ZM24 46q-.65 0-1.075-.425-.425-.425-.425-1.075V40q0-.65.425-1.075Q23.35 38.5 24 38.5q.65 0 1.075.425.425.425.425 1.075v4.5q0 .65-.425 1.075Q24.65 46 24 46ZM11.65 13.75l-3.2-3.15Q8 10.15 8 9.525t.45-1.075Q8.9 8 9.5 8q.6 0 1.05.45l3.2 3.2q.45.45.45 1.05 0 .6-.45 1.05-.45.4-1.075.4t-1.025-.4Zm25.8 25.8-3.2-3.2q-.45-.45-.45-1.05 0-.6.45-1.05.4-.4 1.025-.4.625 0 1.075.4l3.25 3.15q.45.45.425 1.075Q40 39.1 39.6 39.55q-.45.45-1.075.45t-1.075-.45ZM3.5 25.5q-.65 0-1.075-.425Q2 24.65 2 24q0-.65.425-1.075Q2.85 22.5 3.5 22.5H8q.65 0 1.075.425Q9.5 23.35 9.5 24q0 .65-.425 1.075Q8.65 25.5 8 25.5Zm4.95 14.05Q8 39.1 8 38.5q0-.6.45-1.05l3.2-3.2q.4-.4 1.025-.4.625 0 1.075.4.45.45.45 1.075t-.45 1.075l-3.15 3.15q-.45.45-1.075.45t-1.075-.45ZM24 36q-5 0-8.5-3.5T12 24q0-5 3.5-8.5T24 12q5 0 8.5 3.5T36 24q0 5-3.5 8.5T24 36Zm0-3q3.75 0 6.375-2.625T33 24q0-3.75-2.625-6.375T24 15q-3.75 0-6.375 2.625T15 24q0 3.75 2.625 6.375T24 33Z"
              />
            </svg>
            <h4 className="dark:text-light-elem font-semibold very-light-blue">
              light mode
            </h4>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
