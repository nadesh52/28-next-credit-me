import React, { FC } from "react";

interface TextTitleProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: React.ReactNode;
}

const TextTitle: FC<TextTitleProps> = ({ children, ...props }) => {
  return (
    <div className="my-4 flex items-center gap-2" {...props}>
      <div className="h-[20px] w-[3px] bg-indigo-600"></div>
      <h3 className="text-lg font-medium">{children}</h3>
    </div>
  );
};

export default TextTitle;
