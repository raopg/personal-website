export const Emoji = ({
  label,
  symbol,
  classes = "",
}: {
  label?: string;
  symbol: string;
  classes?: string;
}) => (
  <span
    className={`emoji ${classes}`}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
