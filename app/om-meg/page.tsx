import Link from "next/link";
import Stack from "@/components/Stack";

export const metadata = {
  title: "Om Mykhailo | Mykhailo Huseinov",
  description:
    "Bli kjent med Mykhailo Huseinov og Gympartiet, for en mer aktiv og engasjerende skolehverdag.",
};

const images = [
  "/hero.jpg",
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#6f00ff] text-white">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-12 px-[19px] py-14 md:grid-cols-[0.72fr_1.28fr] md:gap-[8%] md:px-6 md:py-20 lg:px-9">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[28px] md:mx-0">
            <video
              className="absolute inset-0 h-full w-full object-cover object-top saturate-[0.58]"
              autoPlay
              loop
              muted
              controls
              playsInline
              aria-label="Portrett av Mykhailo Huseinov"
            >
              <source src="/candidatevideo.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-b from-transparent from-70% to-[#310070]/40" />
          </div>
          <div className="max-w-[760px]">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-white/70 uppercase before:h-px before:w-7 before:bg-current">
              Om kandidaten
            </p>
            <h1 className="m-0 max-w-[850px] text-[48px] leading-[0.98] font-semibold tracking-[-0.05em] md:text-[clamp(50px,6vw,82px)]">
              Glad i trening. Klar for handling.
            </h1>
            <p className="mt-7 max-w-[520px] text-[15px] leading-[1.75] text-white/70">
              Jeg tror aktivitet skaper energi, samhold og en skolehverdag som
              flere gleder seg til.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-[54px] px-[19px] py-[78px] md:grid-cols-[0.82fr_1fr] md:gap-[9%] md:px-6 md:py-[120px] lg:px-9">
        <div className="mx-auto aspect-[5/6] w-[min(78vw,380px)] md:mx-0 md:w-full md:max-w-[380px]">
          <Stack
            randomRotation={false}
            sensitivity={200}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`card-${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>
        <div className="md:pt-7">
          <h2 className="mb-8 text-[clamp(40px,4.8vw,66px)] leading-[1.06] font-semibold tracking-[-0.045em]">
            Jeg heter Mykhailo.
          </h2>
          <p className="mb-[30px] max-w-[580px] text-xl leading-[1.55] text-[#241533]">
            Jeg stiller som elevrådsrepresentant for Gympartiet fordi jeg vil
            gjøre skolehverdagen mer aktiv, sosial og engasjerende.
          </p>
          <p className="mb-[23px] max-w-[580px] text-sm leading-[1.8] text-[#746a7d]">
            Trening og aktivitet betyr mye for meg. Jeg vil bruke den interessen
            til å skape flere lavterskelaktiviteter, turneringer og
            arrangementer som gjør det lett for alle å delta.
          </p>
          <p className="mb-[23px] max-w-[580px] text-sm leading-[1.8] text-[#746a7d]">
            Du trenger ikke være den som trener mest for å bli med. Målet er å
            skape mer energi og bedre samhold, samtidig som elevenes ideer blir
            hørt og fulgt opp.
          </p>
        </div>
      </section>

      <section className="rounded-t-[30px] bg-violet-200 py-[74px] pb-[76px] md:rounded-t-[48px] md:py-[95px] md:pb-[105px]">
        <div className="mx-auto w-full max-w-[1240px] px-[19px] md:px-6 lg:px-9">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-[#746a7d] uppercase before:h-px before:w-7 before:bg-current">
            Dette står Gympartiet for
          </p>
          <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
            <article className="min-h-[220px] rounded-[26px] bg-white/70 p-[27px] md:min-h-[245px]">
              <span className="text-[10px] text-[#75827d]">01</span>
              <h3 className="mt-[65px] mb-3 text-[27px] font-semibold tracking-[-0.03em]">
                Mer aktivitet
              </h3>
              <p className="m-0 max-w-[270px] text-[13px] leading-[1.6] text-[#746a7d]">
                Flere inkluderende aktiviteter som gir energi i skoledagen.
              </p>
            </article>
            <article className="min-h-[220px] rounded-[26px] bg-white/70 p-[27px] md:min-h-[245px]">
              <span className="text-[10px] text-[#75827d]">02</span>
              <h3 className="mt-[65px] mb-3 text-[27px] font-semibold tracking-[-0.03em]">
                Skape engasjement
              </h3>
              <p className="m-0 max-w-[270px] text-[13px] leading-[1.6] text-[#746a7d]">
                Arrangementer og utfordringer som flere har lyst til å delta på.
              </p>
            </article>
            <article className="min-h-[220px] rounded-[26px] bg-white/70 p-[27px] md:min-h-[245px]">
              <span className="text-[10px] text-[#75827d]">03</span>
              <h3 className="mt-[65px] mb-3 text-[27px] font-semibold tracking-[-0.03em]">
                Få ideer gjennom
              </h3>
              <p className="m-0 max-w-[270px] text-[13px] leading-[1.6] text-[#746a7d]">
                Lytte til elevene og gjøre gode forslag om til handling.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-end gap-8 px-[19px] py-[76px] md:grid-cols-[1fr_auto] md:px-6 md:py-[110px] lg:px-9">
        <blockquote className="col-span-full m-0 max-w-[1020px] text-[clamp(35px,4.4vw,58px)] leading-[1.12] font-semibold tracking-[-0.04em]">
          “Jeg vil gjøre det enklere å være aktiv, bli med og skape noe sammen.”
        </blockquote>
        <div className="flex flex-col">
          <strong className="text-xs">Mykhailo Huseinov</strong>
          <span className="mt-1 text-[10px] text-[#746a7d]">
            Kandidat til elevrådsrepresentant
          </span>
        </div>
        <Link
          className="inline-flex min-h-12 w-fit items-center justify-center gap-[18px] rounded-full bg-[#6f00ff] px-[21px] text-xs font-bold text-white transition hover:-translate-y-0.5"
          href="/kontakt"
        >
          Del det du mener <span>→</span>
        </Link>
      </section>

      <section className="bg-[#6f00ff] text-white">
        <div className="mx-auto grid min-h-[350px] w-full max-w-[1240px] grid-cols-1 content-center items-center gap-7 px-[19px] md:min-h-[290px] md:grid-cols-[0.55fr_1.5fr_auto] md:px-6 lg:px-9">
          <p className="m-0 text-[10px] tracking-[0.13em] text-white/70 uppercase">
            Elevrådsvalget er fredag
          </p>
          <h2 className="m-0 text-[clamp(36px,4vw,56px)] leading-[1.06] font-semibold tracking-[-0.045em]">
            Bruk stemmen din. Stem Gympartiet.
          </h2>
          <Link
            className="inline-flex min-h-12 w-fit items-center justify-center gap-[18px] rounded-full bg-white px-[21px] text-xs font-bold text-[#241533] transition hover:-translate-y-0.5 hover:bg-violet-100"
            href="/#stem"
          >
            Les om valget <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
