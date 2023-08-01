import clsx from "clsx";
import React from "react";

export const GlassPane: React.FC<{
  className: string;
  children: React.ReactNode;
}> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        className
      )}
    >
      {children}
    </div>
  );
};
