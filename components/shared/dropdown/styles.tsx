import { styled } from "stitches.config";

export const DropdownContainer = styled('div', {
  position: 'relative',
  width: "100%"
})

export const DropdownDialog = styled('div', {
  position: 'absolute',
  top: 'calc(100% + var(--dropdown-space, 1rem))',
  left: '0',
  width: '100%',
  minWidth: '255px',
  minHeight: "250px",
  background: '$white900',
  borderRadius: "10px",
})
 
export const DropdownButton = styled('button', {
  width: '100%',
  padding: '12px 24px',
  borderBottom: '1px solid $grey600'
})
