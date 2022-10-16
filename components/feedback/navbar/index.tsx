import {
  NavBarBulb,
  NavBarFeedback,
  NavBarOuterContainer,
  NavBarHeading,
  NavBarMobileHead,
  NavBarMobileH2,
  NavBarMobileSubtitle,
  NavBarMobileBurger,
  NavBarAside,
  NavBarAsideContainer,
  NavBarAddFeedback,
} from "./styles";
import Bulb from "@/assets/bulb.svg";
import Image from "next/image";
import { SortyBy } from "./sortby";
import Link from "next/link";
import Hamburger from "@/assets/hamburger.svg";
import Close from "@/assets/hamburger-close.svg";
import { useCallback, useEffect, useState } from "react";
import Roadmap from "../roadmap-card";
import useFocusTrap from "@charlietango/use-focus-trap";
import useClickOutside from "react-cool-onclickoutside"
import { useAtom } from "jotai";
import { roadmapAtom } from "@/lib/stores";

type NavBarProps = {
  suggestions: number;
};

export const NavBar: React.FC<NavBarProps> = ({ suggestions }) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const ref = useFocusTrap(isAsideOpen, {
    disableAriaHider: true
  })

  const [roadmapAtomResult] = useAtom(roadmapAtom)

  const outsideRef = useClickOutside(() => {
      if (!isAsideOpen) return
      setIsAsideOpen(false)
  }, {
    ignoreClass: [NavBarMobileHead.className]
  })

  const onClick = useCallback(
    () => setIsAsideOpen(!isAsideOpen),
    [setIsAsideOpen, isAsideOpen]
  );

  useEffect(() => {
      const onResize = () => {
        if (window.innerWidth > 450) setIsAsideOpen(false)
      }

      window.addEventListener('resize', onResize)
      return () => {
        window.removeEventListener('resize', onResize)
      }
  }, [isAsideOpen, setIsAsideOpen])

  return (
    <NavBarOuterContainer ref={ref}>
      <NavBarMobileHead>
        <h2 className={NavBarMobileH2()}>Frontend Mentor</h2>
        <p className={NavBarMobileSubtitle()}>Feedback Board</p>

        <NavBarMobileBurger onClick={onClick}>
          <Image src={isAsideOpen ? Close : Hamburger} alt="" />
        </NavBarMobileBurger>
      </NavBarMobileHead>

      <NavBarFeedback>
        <span className={NavBarBulb()}>
          <Image src={Bulb} alt="" />
        </span>
        <NavBarHeading>{suggestions} Suggestions</NavBarHeading>
        <SortyBy disabled={isAsideOpen} />

        <Link href="/feedback/create">
          <NavBarAddFeedback tabIndex={isAsideOpen ? -1 : 0} href="" as="a" type="one" />
        </Link>
      </NavBarFeedback>

      {isAsideOpen && (
        <NavBarAsideContainer>
          <NavBarAside ref={outsideRef}>
            <Roadmap {...roadmapAtomResult} />
          </NavBarAside>
        </NavBarAsideContainer>
      )}
    </NavBarOuterContainer>
  );
};
