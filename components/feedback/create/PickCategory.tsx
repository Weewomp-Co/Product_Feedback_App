import { UpArrow } from "@/assets/upArrow";
import { DropdownMenu } from "@/components/shared/dropdown"
import { DropdownCaret, DropdownContainer } from "@/components/shared/dropdown/styles";
import { atom, useAtom } from "jotai";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import { css, styled } from "stitches.config";
import { InputStyle } from "@/components/shared/input/InputStyle";

const items = ["Feature", "UI", "UX", "Enhancement", "Bug"]
type Items = (typeof items)[number]
export const sortBySelected = atom<Items>(items[0])

type ButtonProps = ReturnType<typeof useDropdownMenu<HTMLButtonElement>>["buttonProps"]

const SortByButton = styled('button', {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '0.8125em 1.5em 0.8125em 1.5em',
	fontFamily: '$jost', 
	fontSize: '$body2',
  backgroundColor: "$white300",
  border: "none",
  minHeight: "2.9725em",
  borderRadius: "0.3125em",
  color: "$grey600",
  '&:focus': {
    outline: "1px solid $grey900"
  },
  width: '100%',
  variants : {
    isError: {
      true: {
        border: "1px solid $red"
      },
      
      false: {
        border: "none"
      }
    }
  }
})

const SortByCaret = css(DropdownCaret, {
  color: 'white',
  zIndex: '100'    
})

const SortByInput: React.FC<{ buttonProps: ButtonProps, open: boolean }> = ({ buttonProps, open }) => {
  const [selectedValue] = useAtom(sortBySelected)
  return <SortByButton {...buttonProps}>
    <span>{selectedValue}</span>

    <UpArrow className={SortByCaret({ open })} />
  </SortByButton>
}

type DropdownProps = React.PropsWithChildren<{
  getKey?: (value: string) => string;
}>;

const SortByContainerCSS = css({
  "$dropdown-space": '42px'
})

export const PickCategory: React.FC<DropdownProps> = ({
  getKey = (value) => value as string,
}) => {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(items.length)
  return (
    <DropdownContainer>
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