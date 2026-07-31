import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-500 to-red-600 text-center px-6 py-20">
      <Image
        src="/logo.png"
        alt="Sweet Street Co logo"
        width={220}
        height={220}
        priority
        className="drop-shadow-xl"
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
    <section id="menu" className="bg-white py-20 px-6">
      <h2 className="text-center text-4xl font-bold text-zinc-900 mb-12">
        Our Menu
      </h2>
      <div className="grid max-w-5xl mx-auto gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Build Your Own</h3>
          <p className="mt-2 text-zinc-600">$3.50 - $6.00</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Moonlight Mallow</h3>
          <p className="mt-2 text-zinc-600">$4.00 - $6.50</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Vanilla Dream</h3>
          <p className="mt-2 text-zinc-600">$4.00 - $6.50</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Island Breeze</h3>
          <p className="mt-2 text-zinc-600">$6.00 - $9.00</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Blue Lagoon</h3>
          <p className="mt-2 text-zinc-600">$6.00 - $9.00</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">The Healer</h3>
          <p className="mt-2 text-zinc-600">$6.00 - $9.00</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Firecracker</h3>
          <p className="mt-2 text-zinc-600">$6.00 - $9.00</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Build Your Own Croffle</h3>
          <p className="mt-2 text-zinc-600">$5.00</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-zinc-900">Cookies &amp; Cream Croffle</h3>
          <p className="mt-2 text-zinc-600">$6.00</p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm bg-orange-50">
          <h3 className="text-xl font-semibold text-zinc-900">The Hustler – BEC Burrito</h3>
          <p className="mt-2 text-zinc-600">$4.50</p>
          <p className="mt-1 text-sm text-orange-600 font-medium">Tuesdays &amp; Thursdays only</p>
        </div>
      </div>
    </section>

    <section id="story" className="bg-zinc-900 py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        More Than a Drink
      </h2>
      <p className="max-w-2xl mx-auto text-lg text-zinc-300 leading-relaxed">
        Every dirty soda, every coffee, every croffle on this menu carries a name - 
        because every drink at Sweet Street Co honors a woman who changed the world.
        It&apos;s a small way of saying her story mattered, one cup at a time.
      </p>
    </section>

    <section className="bg-orange-50 py-20 px-6">
      <h2 className="text-center text-4xl font-bold text-zinc-900 mb-12">
        Community Discounts
      </h2>
      <div className="grid max-w-4xl mx-auto gap-6 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">Students</h3>
          <p className="mt-3 text-3xl font-bold text-red-600">$1 Off</p>
        </div>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">Teachers</h3>
          <p className="mt-3 text-3xl font-bold text-red-600">Free Delivery</p>
        </div>
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-900">First Responders &amp; Military</h3>
          <p className="mt-3 text-3xl font-bold text-red-600">15% Off</p>
        </div>
      </div>
      </section>

    <section id="visit" className="bg-white py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-zinc-900 mb-6">
        Visit Us
      </h2>
      <p className="text-lg text-zinc-600">
        Next to PD on Carl Hubbell Blvd, Meeker, OK
      </p>
      <p className="mt-2 text-lg text-zinc-600">
        Open daily — check our socials for hours
      </p>
      <div className="mt-8 flex justify-center gap-6 text-red-600 font-semibold">
          <a
          href="https://www.facebook.com/SweetStreetCoLLC"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline">
          Facebook
        </a>
        <a
        href="https://www.instagram.com/sweetstreetco.ok"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline">

          Instagram
        </a>

      </div>
    </section>

    <footer className="bg-zinc-900 py-8 px-6 text-center text-sm text-zinc-400">
      <p>© 2026 Sweet Street Co. All rights reserved.</p>
      <p className="mt-2">
        Site designed by Nick Doe, Elevated Admin Pro LLC
      </p>
    </footer>
    </>
  );
}