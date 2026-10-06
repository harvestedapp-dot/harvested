/** Current payment status. Card-network marks must not imply an active checkout. */
export function PaymentMarks({
  label,
  align = "start",
  className = "",
}: {
  label: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <p data-payment-status="not-connected" className={`text-[14px] leading-relaxed text-muted-foreground ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {label}
    </p>
  );
}
