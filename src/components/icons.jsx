import {Input} from "@nextui-org/react";

export const MailIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
        fill="currentColor"
      />
    </svg>
  )
}
  export const PerIcon =(props)=>{
    return (
        <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1.5em"
      role="presentation"
      viewBox="0 0 24 14"
      width="1.2em"
      {...props}>
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" 
      fill="currentColor"/>
      
  </svg>
    )
  }
  
  export const AddressIcon = (props)=>{
    return(
        <svg
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM10 16h6" />
        <path d="M11 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 8h3m-3 4h3m-3 4h3" />
      </svg>
    );
  }
  export const LocIcon = (props)=>{
    return(
        <svg
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 500 1000"
    {...props}
  >
    <path d="M250 100c69.333 0 128.333 24.333 177 73s73 107.667 73 177c0 70.667-20.667 151.667-62 243s-83.333 165.667-126 223l-62 84c-6.667-8-15.667-19.667-27-35-11.333-15.333-31.333-45-60-89s-54-87.333-76-130-42-91.667-60-147S0 394 0 350c0-69.333 24.333-128.333 73-177s107.667-73 177-73m0 388c37.333 0 69.333-13.333 96-40s40-58.667 40-96-13.333-69-40-95-58.667-39-96-39-69 13-95 39-39 57.667-39 95 13 69.333 39 96 57.667 40 95 40" />
  </svg>
    );
  }
  export function BaselineLogout(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
        ></path>
      </svg>
    )
  }
  export function MapPinOutline(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 0v6M9.5 9A2.5 2.5 0 0 1 12 6.5"
        ></path>
      </svg>
    )
  }
  export function CalendarDateFill(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
        {...props}
      >
        <g fill="currentColor">
          <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18c0-.832-.527-1.23-1.16-1.23c-.586 0-1.168.387-1.168 1.21c0 .817.543 1.2 1.144 1.2"></path>
          <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82c.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79c-.852 0-1.676-.61-1.676-1.77c0-1.137.871-1.809 1.797-1.809c1.172 0 1.953.734 1.953 2.668c0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z"></path>
        </g>
      </svg>
    )
  }
  export function BaselineArrowDownward(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"
        ></path>
      </svg>
    )
  }
  
  export function Analytics02(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          color="currentColor"
        >
          <path d="M6.5 17.5v-3m5 3v-9m5 9v-4m5-8a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path>
          <path d="M21.496 11s.004.34.004 1c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.717 1.391-8.109C5.282 2.5 7.521 2.5 12 2.5h1"></path>
        </g>
      </svg>
    )
  }
  
  export function InterfaceDashboard(
    props,
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        width="1em"
        height="1em"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="3.25" cy="3.25" r="2.75"></circle>
          <circle cx="10.75" cy="3.25" r="2.75"></circle>
          <circle cx="3.25" cy="10.75" r="2.75"></circle>
          <circle cx="10.75" cy="10.75" r="2.75"></circle>
        </g>
      </svg>
    )
  }
  
  
  export function OutlineDownloading(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M18.32 4.26A9.95 9.95 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.94 7.94 0 0 1 1.62 3.9m-1.62 5.9l1.43 1.43a10 10 0 0 0 2.21-5.32h-2.02a7.95 7.95 0 0 1-1.62 3.89M13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62m2.59-9.34L13 13.17V7h-2v6.17l-2.59-2.59L7 12l5 5l5-5zM11 19.93v2.02c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95v2.02C7.05 4.56 4 7.92 4 12s3.05 7.44 7 7.93"
        ></path>
      </svg>
    )
  }
  

  export function LibraryBuilding(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M247.759 14.358L16 125.946V184h480v-58.362ZM464 152H48v-5.946l200.241-96.412L464 146.362ZM16 496h480V392H16Zm32-72h416v40H48Zm24-216h32v160H72zm336 0h32v160h-32zm-224 0h32v160h-32zm112 0h32v160h-32z"
        ></path>
      </svg>
    )
  }
  
  export function Report(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"
        ></path>
        <path
          fill="currentColor"
          d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"
        ></path>
      </svg>
    )
  }
  export function ReportAnalytics(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
          <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2m0 12v-5m3 5v-1m3 1v-3"></path>
        </g>
      </svg>
    )
  }
  export function Profile02(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          color="currentColor"
        >
          <path d="M2 12c0-4.243 0-6.364 1.464-7.682C4.93 3 7.286 3 12 3s7.071 0 8.535 1.318S22 7.758 22 12s0 6.364-1.465 7.682C19.072 21 16.714 21 12 21s-7.071 0-8.536-1.318S2 16.242 2 12"></path>
          <path d="M8.4 8h-.8c-.754 0-1.131 0-1.366.234C6 8.47 6 8.846 6 9.6v.8c0 .754 0 1.131.234 1.366C6.47 12 6.846 12 7.6 12h.8c.754 0 1.131 0 1.366-.234C10 11.53 10 11.154 10 10.4v-.8c0-.754 0-1.131-.234-1.366C9.53 8 9.154 8 8.4 8M6 16h4m4-8h4m-4 4h4m-4 4h4"></path>
        </g>
      </svg>
    )
  }
  
  
  export function DeviceSignal(
    props,
  ) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.75 7.5H.5v6h4.25m4.5-9h-4.5v9h4.5m0-13h4.25v13H9.25z"
        ></path>
      </svg>
    )
  }  
  
  export const PhoneIcon=(props)=>{
    return(
        <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z" />
      </svg>
    )
  }

  export const LockIcon = (props)=>{
    return(
        <svg
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z" />
      </svg>
    );
  }
  export function Key(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="#FFB636"
          d="M456.943 48.057c-64.075-64.075-167.962-64.075-232.038 0c-50.857 50.857-61.341 126.792-31.466 187.997l-45.691 45.691a3.6 3.6 0 0 0-1.052 2.59l.403 28.553a3.6 3.6 0 0 1-1.052 2.59l-23.879 23.879a3.59 3.59 0 0 1-3.249.981l-22.888-4.61a3.6 3.6 0 0 0-3.249.981L67.443 362.05a3.6 3.6 0 0 0-1.047 2.357l-1.458 28.668a3.59 3.59 0 0 1-3.881 3.397l-24.246-1.996a3.59 3.59 0 0 0-2.834 1.04l-22.05 22.05a3.59 3.59 0 0 0 0 5.079l10.938 10.937a3.59 3.59 0 0 1 0 5.079L14.526 447a3.6 3.6 0 0 0-1.051 2.456l-1.146 49.15a3.6 3.6 0 0 0 1.051 2.623l7.793 7.793c.72.72 1.711 1.1 2.727 1.047l47.721-2.49a3.6 3.6 0 0 0 2.352-1.047l194.973-194.973c61.205 29.875 137.14 19.391 187.997-31.466c64.076-64.074 64.076-167.961 0-232.036m-23.812 76.438c-14.532 14.532-38.094 14.532-52.626 0s-14.532-38.094 0-52.626s38.094-14.532 52.626 0s14.532 38.094 0 52.626"
        ></path>
      </svg>
    )
  }
  
  
  
  export function HomeSmile2Fill(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786zM7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z"
        ></path>
      </svg>
    )
  }

  export function DeviceHubRounded(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M3 20v-3q0-.425.288-.712T4 16h3l4-4V8.8q-.9-.325-1.45-1.088T9 6q0-1.25.875-2.125T12 3t2.125.875T15 6q0 .95-.55 1.713T13 8.8V12l4 4h3q.425 0 .713.288T21 17v3q0 .425-.288.713T20 21h-3q-.425 0-.712-.288T16 20v-2.05l-4-4l-4 4V20q0 .425-.288.713T7 21H4q-.425 0-.712-.288T3 20"
        ></path>
      </svg>
    )
  }
  
  export function AnalyticsOutlineBadged(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"
          className="clr-i-outline--badged clr-i-outline-path-1--badged"
        ></path>
        <path
          fill="currentColor"
          d="m15.62 15.222l-6.018 8.746l-4.052-3.584l1.06-1.198l2.698 2.386l6.326-9.192l6.75 10.015l6.754-8.925l1.276.966l-8.106 10.709z"
          className="clr-i-outline--badged clr-i-outline-path-2--badged"
        ></path>
        <circle
          cx="30"
          cy="6"
          r="5"
          fill="currentColor"
          className="clr-i-outline--badged clr-i-outline-path-3--badged clr-i-badge"
        ></circle>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
    )
  }
  
  export function UserProfile(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="1em"
        height="1em"
        {...props}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m252.522 469.306l3.478.028a218 218 0 0 1-14.118-.46a215 215 0 0 1-17.38-1.85a213 213 0 0 1-19.919-3.928a212 212 0 0 1-19.18-5.72l-.035-.013a212 212 0 0 1-30.135-13.28a213 213 0 0 1-19.968-12.178a214 214 0 0 1-20.709-16.2a215 215 0 0 1-6.748-6.243C67.643 370.666 42.667 316.25 42.667 256C42.667 138.18 138.18 42.667 256 42.667A213.333 213.333 0 0 1 469.334 256c0 60.252-24.978 114.67-65.144 153.464q-.002.004 0 .012a214.6 214.6 0 0 1-32.954 26.088l-.165.105a209 209 0 0 1-8.15 4.977l-.291.17a214 214 0 0 1-14.764 7.78a227 227 0 0 1-5.935 2.724a225 225 0 0 1-6.272 2.645a225 225 0 0 1-6.155 2.368a224 224 0 0 1-6.29 2.197a222 222 0 0 1-6.245 1.964a219 219 0 0 1-6.677 1.87a218 218 0 0 1-6.552 1.608a217 217 0 0 1-6.584 1.395a213 213 0 0 1-27.179 3.516a216 216 0 0 1-6.81.333l-.044.001a217 217 0 0 1-10.601.089m24.812-127.972h-42.667c-33.983 0-63.704 19.997-77.367 49.236l-1.545 3.542l1.337.989c24.316 17.32 53.367 28.425 84.834 30.994l.13.01l-.13-.01q1.409.115 2.824.207l-2.694-.197q1.375.112 2.756.201l-.062-.004q1.368.09 2.74.157l-2.678-.153q1.425.093 2.858.161l-.18-.008q1.029.05 2.058.088l6.452.12l2.675-.02a173 173 0 0 0 2.95-.07l-2.7.065q1.365-.022 2.725-.067l-.025.001q1.371-.044 2.738-.11l-2.713.11q1.41-.047 2.819-.116l-.106.006q1.424-.07 2.84-.16l-2.734.154q1.387-.067 2.77-.157l-.035.002q1.386-.09 2.766-.201l-2.732.199q1.41-.092 2.817-.206l-.085.007q1.34-.11 2.674-.238l-2.589.23q1.4-.114 2.794-.25l-.205.02c30.416-2.944 58.496-13.872 82.119-30.662l1.461-1.092l-1.522-3.538c-13.065-27.968-40.827-47.484-72.96-49.128zM256 85.334c-94.256 0-170.666 76.41-170.666 170.666c0 40.704 14.249 78.08 38.031 107.41c22.028-38.672 63.62-64.743 111.302-64.743h42.667c47.683 0 89.276 26.073 111.3 64.74c23.783-29.327 38.033-66.703 38.033-107.407c0-94.256-76.41-170.666-170.667-170.666m0 21.333c47.129 0 85.334 38.205 85.334 85.333c0 45.7-35.925 83.01-81.075 85.23l-4.259.104c-47.128 0-85.333-38.205-85.333-85.334c0-45.7 35.925-83.01 81.074-85.229zm0 42.667c-23.564 0-42.666 19.102-42.666 42.666s19.102 42.667 42.666 42.667s42.667-19.103 42.667-42.667s-19.103-42.666-42.667-42.666"
        ></path>
      </svg>
    )
  }
  