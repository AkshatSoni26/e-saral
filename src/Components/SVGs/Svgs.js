export const HeaderSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    id="profile"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#FFFFFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      transform="translate(4 2.5)"
    >
      <circle cx="7.579" cy="4.778" r="4.778"></circle>
      <path d="M5.32907052e-15,16.2013731 C-0.00126760558,15.8654831 0.0738531734,15.5336997 0.219695816,15.2311214 C0.677361723,14.3157895 1.96797958,13.8306637 3.0389178,13.610984 C3.81127745,13.4461621 4.59430539,13.3360488 5.38216724,13.2814646 C6.84083861,13.1533327 8.30793524,13.1533327 9.76660662,13.2814646 C10.5544024,13.3366774 11.3373865,13.4467845 12.1098561,13.610984 C13.1807943,13.8306637 14.4714121,14.270023 14.929078,15.2311214 C15.2223724,15.8479159 15.2223724,16.5639836 14.929078,17.1807781 C14.4714121,18.1418765 13.1807943,18.5812358 12.1098561,18.7917621 C11.3383994,18.9634099 10.5550941,19.0766219 9.76660662,19.1304349 C8.57936754,19.2310812 7.38658584,19.2494317 6.19681255,19.1853548 C5.92221301,19.1853548 5.65676678,19.1853548 5.38216724,19.1304349 C4.59663136,19.077285 3.8163184,18.9640631 3.04807112,18.7917621 C1.96797958,18.5812358 0.686515041,18.1418765 0.219695816,17.1807781 C0.0745982583,16.8746908 -0.000447947969,16.5401098 5.32907052e-15,16.2013731 Z"></path>
    </g>
  </svg>
);

const ICON_SIZE = {
  width: "50",
  hight: "50",
};

export const CourseInfoSVG = (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE.width}
      height={ICON_SIZE.height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="BLACK"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-book-open"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  </div>
);

export const UserInfoSVG = (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ICON_SIZE.width}
      height={ICON_SIZE.height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      class="feather feather-user"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  </div>
);

export const EditSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M15.414 4.586a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828l-9.9 9.9a1 1 0 0 1-.342.22l-3.805.954a1 1 0 0 1-1.274-1.273l.955-3.805a1 1 0 0 1 .22-.342l9.9-9.9zM16.828 6.004L6 16.832V20h3.168L17.996 9.172 16.828 6.004zM19 2h4v4l-1.003.001L19 6.998V2z" />
  </svg>
);
