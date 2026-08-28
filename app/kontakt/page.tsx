import Link from "next/link";

export const metadata = {
  title: "Kontakt | Mykhailo Huseinov",
  description: "Ta kontakt med Mykhailo og del det du ønsker å endre på skolen.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto grid min-h-[480px] w-full max-w-[1240px] grid-cols-1 items-start gap-[45px] px-[19px] py-[72px] md:grid-cols-[1.2fr_0.55fr] md:items-end md:gap-[12%] md:px-6 md:py-[82px] lg:px-9">
        <div>
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-[#60778a] uppercase before:h-px before:w-7 before:bg-current">Ta kontakt</p>
          <h1 className="m-0 max-w-[800px] text-[54px] leading-[0.98] font-semibold tracking-[-0.05em] md:text-[clamp(54px,7vw,94px)]">Hva vil du gjøre bedre?</h1>
          <p className="mt-7 max-w-[590px] text-[15px] leading-[1.7] text-[#60778a]">
            En liten observasjon kan bli starten på en stor endring. Send meg en
            idé, et spørsmål eller noe du mener elevrådet bør vite om.
          </p>
        </div>

        <div className="rounded-[26px] bg-[#e5f1f8] p-7">
          <p className="mb-[18px] text-[9px] font-bold tracking-[0.15em] text-[#60778a] uppercase">Direkte kontakt</p>
          <a className="mb-[22px] inline-block border-b border-[#142b3d] pb-[3px] text-lg font-semibold" href="mailto:mykhailo@elevraad.no">mykhailo@elevraad.no</a>
          <p className="m-0 text-xs leading-[1.65] text-[#60778a]">Du finner meg også på skolen. Kom gjerne bort og si hei.</p>
        </div>
      </section>

      <section className="rounded-t-[30px] bg-[#e5f1f8] py-[74px] pb-[76px] md:rounded-t-[48px] md:py-[100px] md:pb-[115px]">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-[50px] px-[19px] md:grid-cols-[0.62fr_1.38fr] md:gap-[11%] md:px-6 lg:px-9">
          <div>
            <span className="mb-8 block text-[10px] text-[#75827d]">03</span>
            <h2 className="mb-[26px] text-[clamp(38px,4vw,55px)] leading-[1.06] font-semibold tracking-[-0.045em]">Del det du har på hjertet.</h2>
            <p className="text-[13px] leading-[1.65] text-[#60778a]">
              Alle henvendelser blir lest. Du velger selv om du vil skrive
              navnet ditt.
            </p>
          </div>

          <form className="flex flex-col gap-[27px]">
            <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
              <label className="flex flex-col">
                <span className="mb-[9px] text-[10px] font-bold tracking-[0.08em] uppercase">Navn <small className="text-[8px] font-medium text-[#8795a0]">(valgfritt)</small></span>
                <input className="rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#2b82b5] focus:bg-white" type="text" name="name" placeholder="Ditt navn" />
              </label>
              <label className="flex flex-col">
                <span className="mb-[9px] text-[10px] font-bold tracking-[0.08em] uppercase">E-post</span>
                <input className="rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#2b82b5] focus:bg-white" type="email" name="email" placeholder="navn@epost.no" required />
              </label>
            </div>
            <label className="flex flex-col">
              <span className="mb-[9px] text-[10px] font-bold tracking-[0.08em] uppercase">Hva gjelder det?</span>
              <select className="rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#2b82b5] focus:bg-white" name="topic" defaultValue="">
                <option value="" disabled>Velg tema</option>
                <option>En idé til skolen</option>
                <option>Spørsmål om kampanjen</option>
                <option>Skolemiljø og trivsel</option>
                <option>Noe annet</option>
              </select>
            </label>
            <label className="flex flex-col">
              <span className="mb-[9px] text-[10px] font-bold tracking-[0.08em] uppercase">Melding</span>
              <textarea
                className="min-h-[150px] resize-y rounded-2xl border border-transparent bg-white/60 px-4 py-3.5 outline-none transition focus:border-[#2b82b5] focus:bg-white"
                name="message"
                placeholder="Fortell meg hva du tenker ..."
                rows={6}
                required
              />
            </label>
            <div className="flex flex-col items-start justify-between gap-[22px] md:flex-row md:items-center">
              <p className="m-0 max-w-[300px] text-[9px] leading-[1.5] text-[#748391]">Ved å sende inn godtar du at meldingen brukes til å følge opp henvendelsen.</p>
              <button className="inline-flex min-h-12 items-center justify-center gap-[18px] rounded-full border-0 bg-[#18577f] px-[21px] text-xs font-bold text-white transition hover:-translate-y-0.5" type="submit">
                Send melding <span>→</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-[19px] py-[76px] md:px-6 md:py-[110px] lg:px-9">
        <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-[#60778a] uppercase before:h-px before:w-7 before:bg-current">Elevrådsvalget 2026</p>
        <h2 className="mb-[30px] max-w-[700px] text-[clamp(40px,4.8vw,66px)] leading-[1.06] font-semibold tracking-[-0.045em]">Husk å stemme på fredag.</h2>
        <Link className="inline-flex items-center gap-2 border-b border-current pb-1 text-xs font-bold" href="/#stem">Les mer om valget <span>→</span></Link>
      </section>
    </main>
  );
}
