export const Display1 = ({ children }) => {
  return (
    <h1 className="text-8xl font-bold">{children}</h1>
  )
}
export const Display2 = ({ children }) => {
  return (
    <h1 className="font-bold text-4xl md:text-5xl 2xl:text-7.5xl 2xl:leading-20">{children}</h1>
  )
}

export const H1 = ({ children }) => {
  return (
    <h1 className="text-5.5xl font-bold">{children}</h1>
  )
}

export const H2 = ({ children }) => {
  return (
    <h1 className="text-5xl font-bold">{children}</h1>
  )
}

export const H3 = ({ children, className = '' }) => {
  return (
    <h1 className={`text-4.5xl font-bold ${className}`}>{children}</h1>
  )
}

export const H4 = ({ children }) => {
  return (
    <h1 className="text-lg md:text-2xl lg:text-3.5xl font-semibold">{children}</h1>
  )
}

export const H5 = ({ children,className = ''  }) => {
  return (
    <h1 className={`text-2xl font-bold ${className}`}>{children}</h1>
  )
}
