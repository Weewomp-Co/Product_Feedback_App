import { Dispatch, KeyboardEventHandler, ReactElement, RefObject, useCallback, useState } from "react";
import {
  DropdownButton,
  DropdownCaret,
  DropdownContainer,
  DropdownDialog,
  DropdownInput,
} from "./styles";
import { PrimitiveAtom, useAtom } from "jotai";
import { UpArrow } from "@/assets/upArrow";
import useDropdownMenu from "react-accessible-dropdown-menu-hook"

type DropdownMenuHookReturn = ReturnType<typeof useDropdownMenu<HTMLButtonElement>>
type DropdownHookItemProp = DropdownMenuHookReturn["itemProps"][number]
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
  const [selectedValue] = useAtom(selected);
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(items.length)
  return (
    <DropdownContainer>
      <DropdownInput {...buttonProps}>
        <span>{(selectedValue as string | null) ?? "No Item Selected"}</span>
        <UpArrow className={DropdownCaret({ open: isOpen })} />
      </DropdownInput>

      <DropdownMenu
        items={items}
        selected={selected}
        open={isOpen}
        setOpen={setIsOpen}
        getKey={getKey}
        itemProps={itemProps}
      />
    </DropdownContainer>
  );
};

type DropdownMenuProps<T> = DropdownProps<T> & {
  open: boolean;
  setOpen: Dispatch<boolean>;
  itemProps: DropdownHookItemProp[]
};

export const DropdownMenu = <T,>({
  items,
  selected,
  open,
  setOpen,
  getKey,
  itemProps
}: DropdownMenuProps<T>): ReactElement | null => {
  return (
    <>
      {open && (
        <DropdownDialog role="menu">
          {items.map((value, index) => (
            <DropdownItem
              key={index}
              value={value}
              setOpen={setOpen}
              selected={selected}
              itemProp={itemProps[index]}
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
  itemProp: DropdownHookItemProp
}>;

export const DropdownItem = <T,>({
  children,
  selected,
  value,
  setOpen,
  itemProp
}: DropdownItemProps<T>): ReactElement | null => {
  const [selectedValue, setSelected] = useAtom(selected);
  const onClick = useCallback(() => {
    setSelected(value);
    setOpen(false);
  }, [setSelected, value, setOpen]);

  return (
      <DropdownButton 
        role={itemProp.role} 
        onKeyDown={itemProp.onKeyDown as unknown as KeyboardEventHandler} 
        ref={itemProp.ref as unknown as RefObject<HTMLButtonElement>} 
        selected={value === selectedValue} 
        onClick={onClick}
      >
      {children}
    </DropdownButton>
  );
};
