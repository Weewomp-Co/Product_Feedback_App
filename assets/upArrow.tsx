type UpArrowProps = {
  className?: string
}

export const UpArrow: React.FC<UpArrowProps> = ({ className="" }) => {
  return <>
    <svg width="11" height="7" viewBox="0 0 11 7" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33398 6L5.33398 2L9.33398 6" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </>
}