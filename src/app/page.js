export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <header className="wrapper"></header>
      <main>
        <div className="min-w-[320px] max-w-[320px] w-full mx-auto border-2 border-black rounded-3xl">
          {/* Screen */}
          <div className="flex flex-col border-2 border-black rounded-lg font-bitmap text-base mx-10 mt-7 aspect-[5/4]">
            <ul className="flex justify-between items-center border-b border-black px-2 overflow-visible">
              <li>►</li>
              <li className="truncate">Now Playing</li>
              <li>🔋</li>
            </ul>
            <div className="px-2 pt-1">
              <p
                className="text-xs font-black"
                style={{ letterSpacing: "-0.05em" }}
              >
                6 of 157
              </p>
            </div>
            <div className="flex-grow flex flex-col text-center px-2 pt-1">
              {/* TODO: marquee if overflowing */}
              <p className="text-nowrap">Can&apos;t Stop</p>
              <p className="text-nowrap">Red Hot Chili Peppers</p>
              <p className="text-nowrap">By The Way</p>
            </div>
            <div className="px-3 pb-1 text-center">
              <progress className="w-full" value="6" max="100" />
              <div className="flex justify-between">
                <span>0:13</span>
                <span>-4:16</span>
              </div>
            </div>
          </div>
          {/* Click-wheel */}
          <div className="rounded-full border-black border-2 grid grid-cols-3 grid-rows-3 aspect-square m-10 p-2">
            <div className="row-[1] col-[2] justify-self-center font-semibold uppercase leading-none">
              Menu
            </div>
            <div className="row-[2] col-[1] self-center leading-none">⏮</div>
            <div className="row-[2] col-[2]">
              <div className="rounded-full w-full h-full border-2 border-black"></div>
            </div>
            <div className="row-[2] col-[3] self-center justify-self-end leading-none">
              ⏭
            </div>
            <div className="row-[3] col-[2] self-end justify-self-center leading-none">
              ⏯
            </div>
          </div>
        </div>
      </main>
      <footer className="wrapper"></footer>
    </div>
  );
}
