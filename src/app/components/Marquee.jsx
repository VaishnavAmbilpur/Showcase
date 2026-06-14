
export default function Marquee({ children, duration = "15s" }) {
  return (
    <div className="overflow-hidden flex w-full select-none mt-4">
      <div
        className="flex shrink-0 animate-(--animate-marquee) gap-8 pr-8"
        style={{ animationDuration: duration }}
      >
        {children}
      </div>
      <div
        className="flex shrink-0 animate-(--animate-marquee) gap-8 pr-8"
        style={{ animationDuration: duration }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
