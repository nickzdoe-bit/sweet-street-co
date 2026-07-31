import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-center px-6 py-20">
      <Image
        src="/logo.png"
        alt="Sweet Street Co logo"
        width={220}
        height={220}
        priority
        className="drop-shadow-x1"
      />
      <h1 className="mt-8 text-4xl sm:text-6xl font-bold text-white leading-tight">
        Dirty Sodas. Real Coffee.
        <br />
        Meeker&apos;s Sweetest Spot.
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-xl">
        Next to PD on Carl Hubbell Blvd — every drink honors a woman who changed the world.
      </p>
      <a
        href="#menu"
        className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg transition hover:bg-zinc-100"
      >
        View Menu
      </a>
    </main>
  );
}