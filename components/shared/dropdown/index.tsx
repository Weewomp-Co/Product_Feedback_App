import { Dispatch, ReactElement, useCallback, useState } from "react";
import {
  DropdownButton,
  DropdownCaret,
  DropdownContainer,
  DropdownDialog,
  DropdownInput,
} from "./styles";
import { PrimitiveAtom, useAtom } from "jotai";
import { UpArrow } from "@/assets/upArrow";

type DropdownProps<T> = React.PropsWithChildren<{
  items: T[];
  selected: PrimitiveAtom<T>;
  getKey?: (value: T) => string;
}>;

export const Dropdown = <T,>({
  items,
  selected,
  getKey = (value) => value as string,
}: DropdownProps<T>): ReactElement | null => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue] = useAtom(selected);
  return (
    <DropdownContainer>
      <DropdownInput onClick={() => setIsOpen(!isOpen)}>
        <span>{(selectedValue as string | null) ?? "No Item Selected"}</span>

        <UpArrow className={DropdownCaret({ open: isOpen })} />
      </DropdownInput>

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
  getKey,
}: DropdownMenuProps<T>): ReactElement | null => {
  return (
    <>
      {open && (
        <DropdownDialog>
          {items.map((value, index) => (
            <DropdownItem
              key={index}
              value={value}
              setOpen={setOpen}
              selected={selected}
            >
              <>{getKey ? getKey(value) : value}</>
            </DropdownItem>
          ))}
        </DropdownDialog>
      )}
    </>
  );
};

type DropdownItemProps<T> = React.PropsWithChildren<{
  value: T;
  selected: PrimitiveAtom<T>;
  setOpen: Dispatch<boolean>;
}>;

export const DropdownItem = <T,>({
  children,
  selected,
  value,
  setOpen,
}: DropdownItemProps<T>): ReactElement | null => {
  const [selectedValue, setSelected] = useAtom(selected);
  const onClick = useCallback(() => {
    setSelected(value);
    setOpen(false);
  }, [setSelected, value, setOpen]);

  return (
    <DropdownButton selected={value === selectedValue} onClick={onClick}>
      {children}
    </DropdownButton>
  );
};
