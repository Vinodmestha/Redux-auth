// import { noop } from "../utils"

export const PrimaryBtn = ({ children, className = "", small = false, }) => {
  return (
    <button className={`${small ? '' : 'py-3'} px-5 bg-primary text-white font-medium hover:bg-secondary rounded ${className}`} >
      {children}
    </button>
  )
}

export const TransparentBtn = ({ children, className, }) => {
  return (
    <button className={`py-3 px-5 font-medium hover:bg-primary hover:bg-opacity-10 rounded ${className}`} >
      {children}
    </button>
  )
}
