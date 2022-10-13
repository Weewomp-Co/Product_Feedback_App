import { styled } from "stitches.config";

export const DropdownContainer = styled("div", {
  position: "relative",
  width: "100%",
});

export const DropdownDialog = styled("div", {
  position: "absolute",
  top: "calc(100% + var(--dropdown-space, 1rem))",
  left: "0",
  width: "100%",
  minWidth: "255px",
  background: "$white900",
  borderRadius: "10px",
  boxShadow: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
});

export const DropdownButton = styled("button", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  padding: "12px 24px",
  border: "none",
  fontFamily: "$jost",
  color: "$grey300",
  fontSize: "$body1",
  borderBottom: "1px solid #3A43740F",
  background: "transparent",
  textAlign: "start",
  transition: "color 120ms ease-in-out",
  cursor: "pointer",
  "&:focus, &:hover": {
    color: "$purple",
    outline: "none",
  },
  "&::after": {
    content: 'url(/check.svg)',
    opacity: '0',
    transition: 'opacity 120ms ease-in-out',
  },

  variants: {
    selected: {
      true: {
        color: "$purple",
        "&::after": {
          opacity: '1' 
        },
        "&:focus": {
          color: "$grey900"
        }
      },
    },
  },
});
