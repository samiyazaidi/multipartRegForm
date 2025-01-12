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
