import Link from "next/link";

export const metadata = {
  title: "Kontakt | Mykhailo Huseinov",
  description: "Ta kontakt med Mykhailo og del det du ønsker å endre på skolen.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto grid min-h-120 w-full max-w-310 grid-cols-1 items-start gap-11.25 px-4.75 py-18 md:grid-cols-[1.2fr_0.55fr] md:items-end md:gap-[12%] md:px-6 md:py-20.5 lg:px-9">
        <div>
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-[#746a7d] uppercase before:h-px before:w-7 before:bg-current">Ta kontakt</p>
          <h1 className="m-0 max-w-200 text-[54px] leading-[0.98] font-semibold tracking-tighter md:text-[clamp(54px,7vw,94px)]">Hva vil du gjøre bedre?</h1>
          <p className="mt-7 max-w-147.5 text-[15px] leading-[1.7] text-[#746a7d]">
              Kom med innspill om hvordan ting bør være. Send meg en
              idé, et spørsmål eller noe du mener elevrådet bør vite om.
          </p>
        </div>

        <div className="rounded-[26px] bg-violet-200 p-7">
          <p className="mb-4.5 text-[9px] font-bold tracking-[0.15em] text-[#746a7d] uppercase">Direkte kontakt</p>
          <a className="mb-5.5 inline-block border-b border-[#241533] pb-0.75 text-lg font-semibold" href="mailto:myhua001@osloskolen.no">myhua001@osloskolen.no</a>
          <p className="m-0 text-xs leading-[1.65] text-[#746a7d]">Du finner meg også på skolen. Kom gjerne bort og si hei.</p>
        </div>
      </section>

      <section className="rounded-t-[30px] bg-violet-200 py-18.5 pb-19 md:rounded-t-[48px] md:py-25 md:pb-28.75">
        <div className="mx-auto grid w-full max-w-310 grid-cols-1 gap-12.5 px-4.75 md:grid-cols-[0.62fr_1.38fr] md:gap-[11%] md:px-6 lg:px-9">
          <div>
            <h2 className="mb-6.5 text-[clamp(38px,4vw,55px)] leading-[1.06] font-semibold tracking-[-0.045em]">Del det du har på hjertet.</h2>
            <p className="text-[13px] leading-[1.65] text-[#746a7d]">
              Alle henvendelser blir lest. Du velger selv om du vil skrive
              navnet ditt.
            </p>
          </div>

          <form className="flex flex-col gap-6.75">
            <div className="grid grid-cols-1 gap-5.5 md:grid-cols-2">
              <label className="flex flex-col">
                <span className="mb-2.25 text-[10px] font-bold tracking-[0.08em] uppercase">Navn <small className="text-[8px] font-medium text-[#8795a0]">(valgfritt)</small></span>
                <input className="rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#6f00ff] focus:bg-white" type="text" name="name" placeholder="Ditt navn" />
              </label>
              <label className="flex flex-col">
                <span className="mb-2.25 text-[10px] font-bold tracking-[0.08em] uppercase">E-post</span>
                <input className="rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#6f00ff] focus:bg-white" type="email" name="email" placeholder="navn@epost.no" required />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="mb-2.25 text-[10px] font-bold tracking-[0.08em] uppercase">Hva gjelder det?</span>
              <select className="rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#6f00ff] focus:bg-white" name="topic" defaultValue="">
                <option value="" disabled>Velg tema</option>
                <option>En idé til skolen</option>
                <option>Spørsmål om kampanjen</option>
                <option>Skolemiljø og trivsel</option>
                <option>Noe annet</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className="mb-2.25 text-[10px] font-bold tracking-[0.08em] uppercase">Melding</span>
              <textarea
                className="min-h-37.5 resize-y rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#6f00ff] focus:bg-white"
                name="message"
                placeholder="Fortell meg hva du tenker ..."
                rows={6}
                required
              />
            </label>
            <div className="flex flex-col items-start justify-between gap-5.5 md:flex-row md:items-center">
              <button className="inline-flex min-h-12 items-center justify-center gap-4.5 rounded-full border-0 bg-[#6f00ff] px-5.25 text-xs font-bold text-white transition hover:-translate-y-0.5" type="submit">
                Send melding <span>→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

    </main>
  );
}
