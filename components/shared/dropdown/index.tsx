import { Dispatch, ReactElement, useCallback, useState } from "react";
import { DropdownButton, DropdownContainer, DropdownDialog } from "./styles";
import { PrimitiveAtom, useAtom } from "jotai";

type DropdownProps<T> = React.PropsWithChildren<{
  items: T[];
  selected: PrimitiveAtom<T>;
  getKey?: (value: T) => string
}>;
export const Dropdown = <T,>({
  items,
  selected,
  getKey=(value) => value as string
}: DropdownProps<T>): ReactElement | null => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContainer>
      <DropdownMenu
        items={items}
        selected={selected}
        open={isOpen}
        setOpen={setIsOpen}
        getKey={getKey}
      />
    </DropdownContainer>
  );
};

type DropdownMenuProps<T> = DropdownProps<T> & {
  open: boolean;
  setOpen: Dispatch<boolean>;
};

export const DropdownMenu = <T,>({
  items,
  selected,
  open,
  setOpen,
  getKey
}: DropdownMenuProps<T>): ReactElement | null => {
  return <DropdownDialog>
    {items.map((value, index) => <>
        <DropdownItem key={index} value={value} selected={selected}>
          <>
            {getKey ? getKey(value) : value}
          </>
        </DropdownItem>
    </>)}
  </DropdownDialog>;
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
  const [selectedValue, setSelected] = useAtom(selected);
  const onClick = useCallback(() => setSelected(value), [setSelected, value]);
  return <DropdownButton selected={value === selectedValue} onClick={onClick}>{children}</DropdownButton>;
};
