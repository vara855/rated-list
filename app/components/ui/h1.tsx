/* eslint-disable react/prop-types */
import { PropsWithChildren, memo } from "react";

export interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {}
const H1 = memo<PropsWithChildren<H1Props>>(({ children, ...props }) => {
  return (
    <h1
      className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      {...props}
    >
      {children}
    </h1>
  );
});

H1.displayName = "H1";

export default H1;
