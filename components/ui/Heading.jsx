import { Fragment } from "react";

// Plus Jakarta Sans draws its comma with a wide left side-bearing, which at large bold
// sizes reads as "Software , Websites". Pull commas back against the previous letter.
export function TightText({ children }) {
  if (typeof children !== "string") return children;

  return children.split(/(,)/).map((part, index) =>
    part === "," ? (
      <span key={index} className="-ml-[0.09em]">
        ,
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}
