export default function Home() {
  const cards = [
    {
      name: "Liam O'Connor",
      role: "Visual Artist",
      tool: "Things",
      price: "$99",
      months: "12",
      dark: true,
    },
    {
      name: "Alex Turner",
      role: "Creative Director",
      tool: "Sketch",
      price: "$150",
      months: "24",
      dark: false,
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#cbcbcb] px-6">
      <main className="flex flex-wrap items-start justify-center gap-10 py-12">
        {cards.map((card) => (
          <article
            key={card.name}
            className={[
              "relative flex h-[430px] w-[258px] flex-col overflow-hidden rounded-[34px] p-4 pb-4 shadow-[0_24px_30px_rgba(0,0,0,0.15)]",
              card.dark ? "bg-[#111214] text-white" : "bg-[#f5f5f5] text-[#222]",
            ].join(" ")}
          >
            <div
              className={[
                "relative h-[98px] overflow-hidden rounded-[22px]",
                card.dark
                  ? "bg-[radial-gradient(circle_at_15%_20%,#34559f,transparent_45%),radial-gradient(circle_at_75%_-20%,#ffb235,transparent_50%),linear-gradient(130deg,#1a2b55_25%,#2f3f8d_45%,#5d2ea5_70%,#15395f_100%)]"
                  : "bg-[radial-gradient(circle_at_20%_85%,#21366c,transparent_35%),radial-gradient(circle_at_52%_10%,#ffec7f,transparent_30%),radial-gradient(circle_at_75%_45%,#ff9f2a,transparent_45%),linear-gradient(120deg,#001a55_6%,#de5f28_52%,#f5d46b_95%)]",
              ].join(" ")}
            >
              <div
                className={[
                  "absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13px] font-semibold",
                  card.dark
                    ? "bg-[#2a2d39]/95 text-[#f2f3f5]"
                    : "bg-[#fff5e6] text-[#444]",
                ].join(" ")}
              >
                <span>{card.dark ? "[x]" : "<>"}</span>
                <span>{card.tool}</span>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col px-2 pt-7">
              <div
                className={[
                  "absolute -top-8 left-2 h-12 w-12 rounded-full border-2",
                  card.dark
                    ? "border-[#111214] bg-[linear-gradient(180deg,#7d8a95,#c8d2db)]"
                    : "border-[#f5f5f5] bg-[linear-gradient(180deg,#e2a564,#f2d3b2)]",
                ].join(" ")}
              />

              <button
                type="button"
                className={[
                  "absolute right-1 top-0 grid h-10 w-10 place-items-center rounded-full text-sm",
                  card.dark
                    ? "border border-white/10 bg-white/5 text-white/80"
                    : "border border-black/10 bg-black/5 text-black/40",
                ].join(" ")}
                aria-label="Bookmark profile"
              >
                [*]
              </button>

              <h2 className="min-h-[64px] text-[32px] leading-8 font-semibold tracking-[-0.01em]">
                {card.name}
              </h2>
              <p
                className={[
                  "mt-1 text-[14px] font-medium",
                  card.dark ? "text-white/45" : "text-black/35",
                ].join(" ")}
              >
                {card.role}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="text-center">
                  <p className="text-[18px] font-semibold">
                    <span className="mr-1 text-[#ffcf33]">*</span>5.0
                  </p>
                  <p
                    className={[
                      "text-[13px] font-semibold",
                      card.dark ? "text-white/75" : "text-black/55",
                    ].join(" ")}
                  >
                    Rating
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[18px] font-semibold">
                    <span className="mr-1 text-[#3b82f6]">P</span>
                    {card.price}
                  </p>
                  <p
                    className={[
                      "text-[13px] font-semibold",
                      card.dark ? "text-white/75" : "text-black/55",
                    ].join(" ")}
                  >
                    hours
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[18px] font-semibold">
                    <span className="mr-1 text-[#8b5cf6]">O</span>
                    {card.months}
                  </p>
                  <p
                    className={[
                      "text-[13px] font-semibold",
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
                  "mt-auto h-12 w-full rounded-full text-[18px] font-semibold",
                  card.dark
                    ? "bg-[#3987f5] text-white"
                    : "border border-black/10 bg-transparent text-black/75",
                ].join(" ")}
              >
                Get In Touch
              </button>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
