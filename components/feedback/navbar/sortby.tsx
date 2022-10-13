import { UpArrow } from "@/assets/upArrow";
import { DropdownMenu } from "@/components/shared/dropdown"
import { DropdownCaret, DropdownContainer } from "@/components/shared/dropdown/styles";
import { atom, useAtom } from "jotai";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { css, styled } from "stitches.config";

const items = ["Most Upvotes", "Least Upvotes", "Most Comments", "Least Comments"]
type Items = (typeof items)[number]
export const sortBySelected = atom<Items>(items[0])

type ButtonProps = ReturnType<typeof useDropdownMenu<HTMLButtonElement>>["buttonProps"]

const SortByButton = styled('button', {
  display: 'flex',
  gap: '8px',
  textAlign: 'start', 
  border: 'none',
  fontFamily: '$jost',
  fontSize: '$h4',
  background: 'transparent',
  color: '#F2F4FE',
  cursor: 'pointer',
  alignItems: 'center',
  '& span': {
    fontWeight: '$bold' 
  }
})

const SortByCaret = css(DropdownCaret, {
  color: 'white'    
})

const SortByInput: React.FC<{ buttonProps: ButtonProps, open: boolean }> = ({ buttonProps, open }) => {
  const [selectedValue] = useAtom(sortBySelected)
  return <SortByButton {...buttonProps}>
    Sort by : <span>{selectedValue}</span>

    <UpArrow className={SortByCaret({ open })} />
  </SortByButton>
}

type DropdownProps = React.PropsWithChildren<{
  getKey?: (value: string) => string;
}>;

const SortByContainerCSS = css({
  "$dropdown-space": '42px'
})

export const SortyBy: React.FC<DropdownProps> = ({
  getKey = (value) => value as string,
}) => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(items.length)
  return (
    <DropdownContainer className={SortByContainerCSS()}>
      <SortByInput open={isOpen} buttonProps={buttonProps} />
      <DropdownMenu
        items={items}
        selected={sortBySelected}
        open={isOpen}
        setOpen={setIsOpen}
        getKey={getKey}
        itemProps={itemProps}
      />
    </DropdownContainer>
  );
};

