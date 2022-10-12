import { Dispatch, ReactElement, useCallback, useState } from "react";
import { DropdownButton, DropdownContainer, DropdownDialog } from "./styles";
import { PrimitiveAtom, useAtom } from "jotai";

type DropdownProps<T> = React.PropsWithChildren<{
  items: T[];
  selected: PrimitiveAtom<T>;
}>;
export const Dropdown = <T,>({
  children,
  items,
  selected,
}: DropdownProps<T>): ReactElement | null => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
      <DropdownMenu
        items={items}
        selected={selected}
        open={isOpen}
        setOpen={setIsOpen}
      />
    </DropdownContainer>
  );
};

type DropdownMenuProps<T> = DropdownProps<T> & {
  open: boolean;
  setOpen: Dispatch<boolean>;
};

export const DropdownMenu = <T,>({
  children,
  items,
  selected,
  setOpen,
}: DropdownMenuProps<T>): ReactElement | null => {
  return <DropdownDialog>{children}</DropdownDialog>;
};

type DropdownItemProps<T> = React.PropsWithChildren<{
  value: T;
  selected: PrimitiveAtom<T>;
}>;
export const DropdownItem = <T,>({
  children,
  selected,
  value,
}: DropdownItemProps<T>): ReactElement | null => {
  const [_, setSelected] = useAtom(selected);
  const onClick = useCallback(() => setSelected(value), [setSelected, value]);
  return <DropdownButton onClick={onClick}>{children}</DropdownButton>;
};
