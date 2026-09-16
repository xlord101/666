import React from "react";

export function SectionDivider({
  className = "my-12",
  symbol = "&",
  width = "max-w-xs",
}: {
  className?: string;
  symbol?: string;
  width?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 mx-auto ${width} ${className}`} aria-hidden="true">
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-[1px] bg-gold/50 w-full" />
        <div className="h-[1px] bg-gold/25 w-4/5 mx-auto" />
      </div>
      <span className="font-heading italic text-gold text-lg md:text-xl select-none px-2">
        {symbol}
      </span>
      <div className="flex-1 flex flex-col gap-1">
        <div className="h-[1px] bg-gold/50 w-full" />
        <div className="h-[1px] bg-gold/25 w-4/5 mx-auto" />
      </div>
    </div>
  );
}
