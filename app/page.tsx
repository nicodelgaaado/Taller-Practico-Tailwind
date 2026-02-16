import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBox,
  faClock,
  faFlag,
  faGem,
  faPaperPlane,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const cards = [
    {
      name: "Liam O'Connor",
      role: "Visual Artist",
      tool: "Things",
      toolIcon: faBox,
      toolIconColor: "text-[#60a5fa]",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      price: "$99",
      months: "12",
      dark: true,
    },
    {
      name: "Alex Turner",
      role: "Creative Director",
      tool: "Sketch",
      toolIcon: faGem,
      toolIconColor: "text-[#fbbf24]",
      avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      price: "$150",
      months: "24",
      dark: false,
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#cbcbcb] px-6">
      <main className="flex flex-wrap items-start justify-center gap-12 py-14">
        {cards.map((card) => (
          <article
            key={card.name}
            className={[
              "relative flex h-[490px] w-[330px] flex-col overflow-hidden rounded-[40px] px-4 pb-4 pt-4 shadow-[0_24px_30px_rgba(0,0,0,0.15)]",
              card.dark ? "bg-[#111214] text-white" : "bg-[#f5f5f5] text-[#222]",
            ].join(" ")}
          >
            <div
              className={[
                "relative h-[132px] overflow-visible rounded-[26px]",
                card.dark
                  ? "bg-[radial-gradient(circle_at_15%_20%,#34559f,transparent_45%),radial-gradient(circle_at_75%_-20%,#ffb235,transparent_50%),linear-gradient(130deg,#1a2b55_25%,#2f3f8d_45%,#5d2ea5_70%,#15395f_100%)]"
                  : "bg-[radial-gradient(circle_at_20%_85%,#21366c,transparent_35%),radial-gradient(circle_at_52%_10%,#ffec7f,transparent_30%),radial-gradient(circle_at_75%_45%,#ff9f2a,transparent_45%),linear-gradient(120deg,#001a55_6%,#de5f28_52%,#f5d46b_95%)]",
              ].join(" ")}
            >
              <div
                className={[
                  "absolute -bottom-4 right-4 flex items-center gap-2 rounded-full px-5 py-2 text-[14px] font-semibold",
                  card.dark
                    ? "bg-[#2a2d39]/95 text-[#f2f3f5]"
                    : "bg-[#fff5e6] text-[#444]",
                ].join(" ")}
              >
                <FontAwesomeIcon
                  icon={card.toolIcon}
                  className={["text-[13px]", card.toolIconColor].join(" ")}
                />
                <span>{card.tool}</span>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col px-2 pt-10">
              <div
                className={[
                  "absolute -top-9 left-2 h-14 w-14 overflow-hidden rounded-full border-2",
                  card.dark ? "border-[#111214]" : "border-[#f5f5f5]",
                ].join(" ")}
              >
                <img
                  src={card.avatarUrl}
                  alt={`${card.name} profile`}
                  className="h-full w-full object-cover"
                />
              </div>

              <button
                type="button"
                className={[
                  "absolute right-2 top-11 grid h-10 w-10 place-items-center rounded-full text-sm",
                  card.dark
                    ? "border border-white/10 bg-white/5 text-white/80"
                    : "border border-black/10 bg-black/5 text-black/40",
                ].join(" ")}
                aria-label="Bookmark profile"
              >
                <FontAwesomeIcon icon={faBookmarkRegular} className="text-[16px]" />
              </button>

              <h2 className="min-h-[40px] pr-14 whitespace-nowrap text-[28px] leading-7 font-semibold tracking-[-0.01em]">
                {card.name}
              </h2>
              <p
                className={[
                  "mt-1.5 text-[15px] font-medium",
                  card.dark ? "text-white/45" : "text-black/35",
                ].join(" ")}
              >
                {card.role}
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="text-[20px] font-semibold">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mr-1 text-[16px] text-[#ffcf33]"
                    />
                    5.0
                  </p>
                  <p
                    className={[
                      "text-[14px] font-semibold",
                      card.dark ? "text-white/75" : "text-black/55",
                    ].join(" ")}
                  >
                    Rating
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[20px] font-semibold">
                    <FontAwesomeIcon
                      icon={faFlag}
                      className="mr-1 text-[16px] text-[#3b82f6]"
                    />
                    {card.price}
                  </p>
                  <p
                    className={[
                      "text-[14px] font-semibold",
                      card.dark ? "text-white/75" : "text-black/55",
                    ].join(" ")}
                  >
                    hours
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[20px] font-semibold">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-1 text-[16px] text-[#8b5cf6]"
                    />
                    {card.months}
                  </p>
                  <p
                    className={[
                      "text-[14px] font-semibold",
                      card.dark ? "text-white/75" : "text-black/55",
                    ].join(" ")}
                  >
                    Month
                  </p>
                </div>
              </div>

              <button
                type="button"
                className={[
                  "mt-auto flex h-14 w-full items-center justify-center gap-2 rounded-full text-[20px] font-semibold",
                  card.dark
                    ? "bg-[#3987f5] text-white"
                    : "border border-black/10 bg-transparent text-black/75",
                ].join(" ")}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="text-[16px]" />
                Get In Touch
              </button>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
