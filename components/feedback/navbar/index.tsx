import { NavBarBulb, NavBarContainer, NavBarHeading } from "./styles"
import Bulb from "@/assets/bulb.svg"
import Image from "next/image"
import Button from "@/components/shared/buttons"
import { SortyBy } from "./sortby"
import Link from "next/link"

type NavBarProps = {
  suggestions: number
}

export const NavBar: React.FC<NavBarProps> = ({ suggestions }) => {
  return <NavBarContainer>
    <span className={NavBarBulb()}>
      <Image src={Bulb} alt="" />
    </span>
    <NavBarHeading>{suggestions} Suggestions</NavBarHeading>
    <SortyBy />

    <Link href="/feedback/create">
      <Button as="a" css={{ padding: '0.75rem 24px' }} type="one">+ Add Feedback</Button>
    </Link>
  </NavBarContainer>
}
