
type PlusProps = {
  className?: string
}

export const Plus: React.FC<PlusProps> = ({ className="" }) => {
  return <>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_2018)"/>
    <defs>
    <radialGradient id="paint0_radial_0_2018" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
    <stop stop-color="#E84D70"/>
    <stop offset="0.530886" stop-color="#A337F6"/>
    <stop offset="1" stop-color="#28A7ED"/>
    </radialGradient>
    </defs>
    </svg>

  </>
}