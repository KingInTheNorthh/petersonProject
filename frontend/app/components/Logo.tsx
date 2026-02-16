export default function Logo() {
  return (
    <div className="relative px-7 py-4 inline-block">
      {/* Animated border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="200"
          strokeDashoffset="0"
          className="text-zinc-500"
          style={{
            animation: 'borderDash 8s linear infinite'
          }}
        />
      </svg>
      
      <div className="grid grid-cols-[auto_auto_1fr] grid-rows-2 gap-x-1 items-start relative font-[family-name:var(--font-jersey)]">
        {/* Row 1: "the" */}
        <span className="text-[1.8rem] font-normal self-end leading-tight">the</span>
        {/* Row 1: Large "P" spans both rows */}
        <span className="text-[5.4rem] font-normal leading-none row-span-2">P</span>
        {/* Row 1: "eterson" */}
        <span className="text-[1.8rem] font-normal self-end leading-tight">eterson</span>
        {/* Row 2: empty space under "the" */}
        <span></span>
        {/* Row 2: "roject" in the third column */}
        <span className="text-[1.8rem] font-normal self-start leading-tight -ml-2.5">roject</span>
      </div>
    </div>
  );
}
