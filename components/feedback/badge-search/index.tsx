import { atom, useAtom } from "jotai";
import { BadgeSearchCategory, BadgeSearchContainer } from "./styles";

const choices = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"] as const;
export const badgeSearchAtom = atom<typeof choices[number]>(choices[0]);
export const BadgeSearch = () => {
  const [selected, setSelected] = useAtom(badgeSearchAtom);
  return (
    <BadgeSearchContainer>
      {choices.map((category) => {
        return (
          <BadgeSearchCategory
            key={category}
            onClick={() => setSelected(category)}
            active={category === selected}
          >
            {category}
          </BadgeSearchCategory>
        );
      })}
    </BadgeSearchContainer>
  );
};
