import { Search } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full px-2 lg:w-4/5 2xl:w-3/5 max-w-4xl">
      <section className="relative select-none mt-8 sm:mt-16 h-full w-full flex items-center justify-center sm:gap-x-3">
        <Image
          src="/images/logo/yt.svg"
          width={155}
          height={170}
          className="object-contain -rotate-12 h-[8rem] sm:h-full "
          alt="ytb logo"
        />
        <h1 className="text-6xl sm:text-8xl">yt-mp3</h1>
      </section>
      <Search />
    </main>
  );
}
