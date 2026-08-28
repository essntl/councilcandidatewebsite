import Link from "next/link";

export const metadata = {
    title: "Om Mykhailo | Mykhailo Huseinov",
    description: "Bli bedre kjent med elevrådslederkandidat Mykhailo Huseinov.",
};

export default function AboutPage() {
    return (
        <main>
            <section className="bg-[#6f00ff] text-white">
                <div className="mx-auto grid min-h-[500px] w-full max-w-[1240px] grid-cols-1 content-center items-end gap-[34px] px-[19px] py-[72px] md:min-h-[440px] md:grid-cols-[1.3fr_0.55fr] md:gap-[10%] md:px-6 lg:px-9">
                    <div>
                        <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-white/70 uppercase before:h-px before:w-7 before:bg-current">
                            Om kandidaten
                        </p>
                        <h1 className="m-0 max-w-[850px] text-[48px] leading-[0.98] font-semibold tracking-[-0.05em] md:text-[clamp(50px,6vw,82px)]">
                            Engasjert i mennesker. Opptatt av handling.
                        </h1>
                    </div>
                    <p className="m-0 max-w-[370px] text-[15px] leading-[1.75] text-white/70">
                        Jeg tror ledelse starter med å lytte. Ikke bare til de som snakker høyest, men til alle som har
                        noe på hjertet.
                    </p>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-[54px] px-[19px] py-[78px] md:grid-cols-[0.82fr_1fr] md:gap-[9%] md:px-6 md:py-[120px] lg:px-9">
                <div className="relative min-h-[475px] overflow-hidden rounded-[28px] md:min-h-[620px]">
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
                <div className="md:pt-7">
                    <h2 className="mb-8 text-[clamp(40px,4.8vw,66px)] leading-[1.06] font-semibold tracking-[-0.045em]">
                        Jeg heter Mykhailo.
                    </h2>
                    <p className="mb-[30px] max-w-[580px] text-xl leading-[1.55] text-[#241533]">
                        Jeg stiller som elevrådsleder fordi jeg vil bidra til en skole der det er enkelt å engasjere
                        seg, trygt å si sin mening og mulig å få gjennomslag.
                    </p>
                    <p className="mb-[23px] max-w-[580px] text-sm leading-[1.8] text-[#746a7d]">
                        For meg handler elevrådsarbeid om mer enn møter og referater. Det handler om hverdagen vår:
                        hvordan vi blir tatt imot om morgenen, hvem vi møter i friminuttene, og om ideene våre faktisk
                        når frem til dem som kan gjøre noe med dem.
                    </p>
                    <p className="mb-[23px] max-w-[580px] text-sm leading-[1.8] text-[#746a7d]">
                        Som person er jeg nysgjerrig, målrettet og rolig når det gjelder. Jeg liker å samle ulike
                        perspektiver, finne det vi er enige om og gjøre veien fra idé til handling så kort som mulig.
                    </p>
                </div>
            </section>

            <section className="rounded-t-[30px] bg-violet-200 py-[74px] pb-[76px] md:rounded-t-[48px] md:py-[95px] md:pb-[105px]">
                <div className="mx-auto w-full max-w-[1240px] px-[19px] md:px-6 lg:px-9">
                    <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-[#746a7d] uppercase before:h-px before:w-7 before:bg-current">
                        Slik vil jeg lede
                    </p>
                    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
                        <article className="min-h-[220px] rounded-[26px] bg-white/70 p-[27px] md:min-h-[245px]">
                            <span className="text-[10px] text-[#75827d]">01</span>
                            <h3 className="mt-[65px] mb-3 text-[27px] font-semibold tracking-[-0.03em]">Lytte først</h3>
                            <p className="m-0 max-w-[270px] text-[13px] leading-[1.6] text-[#746a7d]">
                                De beste løsningene starter med at flere blir hørt.
                            </p>
                        </article>
                        <article className="min-h-[220px] rounded-[26px] bg-white/70 p-[27px] md:min-h-[245px]">
                            <span className="text-[10px] text-[#75827d]">02</span>
                            <h3 className="mt-[65px] mb-3 text-[27px] font-semibold tracking-[-0.03em]">
                                Være tydelig
                            </h3>
                            <p className="m-0 max-w-[270px] text-[13px] leading-[1.6] text-[#746a7d]">
                                Alle skal vite hva elevrådet jobber med og hvorfor.
                            </p>
                        </article>
                        <article className="min-h-[220px] rounded-[26px] bg-white/70 p-[27px] md:min-h-[245px]">
                            <span className="text-[10px] text-[#75827d]">03</span>
                            <h3 className="mt-[65px] mb-3 text-[27px] font-semibold tracking-[-0.03em]">Følge opp</h3>
                            <p className="m-0 max-w-[270px] text-[13px] leading-[1.6] text-[#746a7d]">
                                Et løfte betyr lite uten handling og synlige resultater.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-end gap-8 px-[19px] py-[76px] md:grid-cols-[1fr_auto] md:px-6 md:py-[110px] lg:px-9">
                <blockquote className="col-span-full m-0 max-w-[1020px] text-[clamp(35px,4.4vw,58px)] leading-[1.12] font-semibold tracking-[-0.04em]">
                    “Jeg lover ikke at alt blir enkelt. Jeg lover at alle gode ideer skal bli tatt på alvor.”
                </blockquote>
                <div className="flex flex-col">
                    <strong className="text-xs">Mykhailo Huseinov</strong>
                    <span className="mt-1 text-[10px] text-[#746a7d]">Kandidat til elevrådsleder</span>
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
                        Bruk stemmen din. Stem Mykhailo.
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
