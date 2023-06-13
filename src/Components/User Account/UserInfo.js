import React from 'react'

export default function UserInfo( {PROFILE_DATA, ICON_SIZE} ) {
  return (
    <div>

<div>
       

        <table >
          <tr>
            <th>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                width={`${ICON_SIZE.width}`}
                height={`${ICON_SIZE.hight}`}
                viewBox="0 0 512 512"
                id="user-photo"
              >
                <circle cx="211" cy="132.6" r="74.4"></circle>
                <path d="M409.6,361h-10a14.444,14.444,0,0,1-14-10.9l-.5-1.9a2.379,2.379,0,0,0-2.4-1.8H359.1a2.553,2.553,0,0,0-2.4,1.9l-.4,1.7a14.339,14.339,0,0,1-14,11h-9.9a2.433,2.433,0,0,0-2.4,2.4v47.2a2.433,2.433,0,0,0,2.4,2.4h77.1a2.433,2.433,0,0,0,2.4-2.4V363.4A2.286,2.286,0,0,0,409.6,361Zm-38.7,47.7a25.3,25.3,0,1,1,25.3-25.3A25.329,25.329,0,0,1,370.9,408.7Z"></path>
                <path d="M371,305.7a84.361,84.361,0,0,0-11.2.8,74.014,74.014,0,0,0,1.8,146.6,71.448,71.448,0,0,0,9.3.6,74,74,0,0,0,.1-148Zm53,104.9A14.4,14.4,0,0,1,409.6,425H332.5a14.4,14.4,0,0,1-14.4-14.4V363.4A14.4,14.4,0,0,1,332.5,349h9.9a2.553,2.553,0,0,0,2.4-1.9l.4-1.7a14.339,14.339,0,0,1,14-11h23.6a14.444,14.444,0,0,1,14,10.9l.5,1.9a2.379,2.379,0,0,0,2.4,1.8h10a14.4,14.4,0,0,1,14.4,14.4v47.2Z"></path>
                <circle cx="370.9" cy="383.4" r="13.3"></circle>
                <path d="M285,379.7A86,86,0,0,1,351.3,296a66.1,66.1,0,0,0-59.7-44.5,102.3,102.3,0,0,1-161.2,0A66.494,66.494,0,0,0,67,317.8v136H327.2A86.437,86.437,0,0,1,285,379.7Z"></path>
              </svg>
            </th>

            <div class="mx-auto"  style={{ width: "200px", paddingLeft: "10vw" }}>
              <td>
                <table>
                  <tr>
                    <th><strong>{PROFILE_DATA.full_name} </strong>  </th>
                  </tr>

                  <tr>

                    <td> +91 {PROFILE_DATA.phone_number} </td>
                    
                    </tr>

                  <tr>
                    <a>
                      <svg
                        class="feather feather-edit"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      Edit
                    </a>
                  </tr>
                </table>

              </td>
            </div>

          </tr>
        </table>

      </div>

    </div>
  )
}