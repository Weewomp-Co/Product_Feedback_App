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
  fontSize: '13px',
  background: 'transparent',
  color: '#F2F4FE',
  cursor: 'pointer',
  alignItems: 'center',
  padding: '0',
  '& span': {
    fontWeight: '$bold' 
  },
  "@xs": {
    fontSize: '$h4'
  }
})

const SortByCaret = css(DropdownCaret, {
  color: 'white'    
})

type SortByInputProps = { buttonProps: ButtonProps, open: boolean, disabled: boolean }
const SortByInput: React.FC<SortByInputProps> = ({ buttonProps, open, disabled }) => {
  const [selectedValue] = useAtom(sortBySelected)
  return <SortByButton {...buttonProps} disabled={disabled}>
    Sort by : <span>{selectedValue}</span>

    <UpArrow className={SortByCaret({ open })} />
  </SortByButton>
}

type DropdownProps = React.PropsWithChildren<{
  getKey?: (value: string) => string;
  disabled?: boolean
}>;

const SortByContainerCSS = css({
  "$dropdown-space": '42px'
})

export const SortyBy: React.FC<DropdownProps> = ({
  getKey = (value) => value as string,
  disabled = false
}) => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(items.length)
  return (
    <DropdownContainer className={SortByContainerCSS()}>
      <SortByInput disabled={disabled} open={isOpen} buttonProps={buttonProps} />
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

