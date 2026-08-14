/**
 * Card scheme marks for the networks our Armenian acquirer accepts: Visa,
 * Mastercard and ArCa. Acquirers require the accepted schemes to be visible
 * on the site itself, so this row appears in the footer, next to the price
 * and on the course enrolment card.
 *
 * The artwork is inlined rather than loaded from /public so it stays crisp at
 * any size, costs no extra request and never flashes in late. Each mark keeps
 * its official colours and proportions; only the surrounding tile is ours.
 */

/** Tight viewBoxes — the official files pad the marks inside a card frame. */
function VisaMark() {
  return (
    <svg
      role="img"
      aria-label="Visa"
      viewBox="60 143 660 214"
      width="40"
      height="13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M489.823 143.111C442.988 143.111 401.134 167.393 401.134 212.256C401.134 263.706 475.364 267.259 475.364 293.106C475.364 303.989 462.895 313.731 441.6 313.731C411.377 313.731 388.789 300.119 388.789 300.119L379.123 345.391C379.123 345.391 405.145 356.889 439.692 356.889C490.898 356.889 531.19 331.415 531.19 285.784C531.19 231.419 456.652 227.971 456.652 203.981C456.652 195.455 466.887 186.114 488.122 186.114C512.081 186.114 531.628 196.014 531.628 196.014L541.087 152.289C541.087 152.289 519.818 143.111 489.823 143.111ZM61.3294 146.411L60.1953 153.011C60.1953 153.011 79.8988 156.618 97.645 163.814C120.495 172.064 122.122 176.868 125.971 191.786L167.905 353.486H224.118L310.719 146.411H254.635L198.989 287.202L176.282 167.861C174.199 154.203 163.651 146.411 150.74 146.411H61.3294ZM333.271 146.411L289.275 353.486H342.756L386.598 146.411H333.271ZM631.554 146.411C618.658 146.411 611.825 153.318 606.811 165.386L528.458 353.486H584.542L595.393 322.136H663.72L670.318 353.486H719.805L676.633 146.411H631.554ZM638.848 202.356L655.473 280.061H610.935L638.848 202.356Z"
        fill="#1434CB"
      />
    </svg>
  );
}

function MastercardMark() {
  return (
    <svg
      role="img"
      aria-label="Mastercard"
      viewBox="109 76 562 348"
      width="31"
      height="19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M465.738 113.525H313.812V386.475H465.738V113.525Z" fill="#FF5A00" />
      <path
        d="M323.926 250C323.926 194.545 349.996 145.326 390 113.525C360.559 90.3769 323.42 76.3867 282.91 76.3867C186.945 76.3867 109.297 154.035 109.297 250C109.297 345.965 186.945 423.614 282.91 423.614C323.42 423.614 360.559 409.623 390 386.475C349.94 355.123 323.926 305.455 323.926 250Z"
        fill="#EB001B"
      />
      <path
        d="M670.711 250C670.711 345.965 593.062 423.614 497.098 423.614C456.588 423.614 419.449 409.623 390.008 386.475C430.518 354.618 456.082 305.455 456.082 250C456.082 194.545 430.012 145.326 390.008 113.525C419.393 90.3769 456.532 76.3867 497.041 76.3867C593.062 76.3867 670.711 154.541 670.711 250Z"
        fill="#F79E1B"
      />
    </svg>
  );
}

function ArcaMark() {
  return (
    <svg
      role="img"
      aria-label="ArCa"
      viewBox="0 0 119 30"
      width="44"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.956505 0.0987031V9.74558H18.7238C15.5803 10.0658 14.6703 10.2579 11.927 10.9224C11.6868 10.9811 9.7948 11.5309 9.5653 11.6029C-0.61261 14.8719 0.0171841 20.7214 0.0038413 22.0023C-0.00683297 23.1231 1.16735 29.8105 8.7274 30C12.909 29.8372 14.8784 27.3261 15.8231 25.7169C12.9891 27.2674 10.2832 25.4207 9.50393 23.8223C7.79338 20.3211 10.3259 16.7452 13.6269 14.6371C17.4723 12.1766 20.2182 12.1393 20.2449 12.1393V29.1114H29.8918V9.37731C29.8918 4.28569 25.7688 0.152084 20.6745 0.141409L0.951195 0.101374L0.956505 0.0987031Z"
        fill="#243BE2"
      />
      <path
        d="M47.4136 2.93806C45.9939 4.83274 45.132 7.73347 44.8304 11.6429H44.5075V0.0987031H34.842V28.9779H44.5075V17.2576C44.5075 12.681 46.7438 9.65484 51.219 9.65484H59.0886V0.0987031H53.1537C50.744 0.0987031 48.8306 1.04605 47.4109 2.93806"
        fill="#243BE2"
      />
      <path
        d="M70.4513 14.5197C70.4513 17.2043 72.6288 19.3818 75.3134 19.3818H84.8749V29.0367H75.0759C67.1903 29.0367 60.7964 22.6428 60.7964 14.7572V14.2795C60.7964 6.39389 67.1903 0 75.0759 0H84.8749V9.65487H75.3134C72.6288 9.65487 70.4513 11.8324 70.4513 14.517"
        fill="#243BE2"
      />
      <path
        d="M89.2114 0.0987031V9.74558H106.979C103.835 10.0658 102.925 10.2579 100.182 10.9224C99.9417 10.9811 98.0497 11.5309 97.8202 11.6029C87.6423 14.8719 88.2721 20.7214 88.2614 22.0023C88.2507 23.1231 89.4249 29.8105 96.985 30C101.167 29.8372 103.136 27.3261 104.081 25.7169C101.249 27.2674 98.5407 25.4207 97.7615 23.8223C96.0509 20.3211 98.5834 16.7452 101.884 14.6371C105.73 12.1766 108.476 12.1393 108.502 12.1393V29.1114H118.149V9.37731C118.149 4.28569 114.026 0.152084 108.932 0.141409L89.2088 0.101374L89.2114 0.0987031Z"
        fill="#ADF233"
      />
    </svg>
  );
}

const MARKS = [VisaMark, MastercardMark, ArcaMark];

export function PaymentMarks({
  label,
  align = "start",
  className = "",
}: {
  /** Short caption above the row, e.g. "Payments accepted". */
  label: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-2.5 ${
        align === "center" ? "items-center" : "items-start"
      } ${className}`}
    >
      <p className="text-[13px] tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <ul className="flex flex-wrap items-center gap-2">
        {MARKS.map((Mark, index) => (
          <li
            key={index}
            className="flex h-9 w-14 items-center justify-center rounded-md border border-black/10 bg-white"
          >
            <Mark />
          </li>
        ))}
      </ul>
    </div>
  );
}
