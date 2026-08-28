import Link from "next/link";

const priorities = [
    {
        number: "01",
        title: "En skolehverdag som fungerer",
        text: "Bedre informasjonsflyt, tydeligere elevmedvirkning og praktiske løsninger på det vi møter hver dag.",
    },
    {
        number: "02",
        title: "Mer plass til fellesskapet",
        text: "Flere inkluderende arrangementer og møteplasser der alle kan finne sin plass, på tvers av trinn og interesser.",
    },
    {
        number: "03",
        title: "Elevenes stemme, hele året",
        text: "Elevrådet skal være synlig, tilgjengelig og åpent om hva vi jobber med og hva vi faktisk får gjennomført.",
    },
];

function ArrowIcon() {
    return (
        <svg className="size-[17px] fill-none stroke-current stroke-[1.5]" aria-hidden="true" viewBox="0 0 20 20">
            <path d="M4 10h11M11 6l4 4-4 4" />
        </svg>
    );
}

export default function Home() {
    return (
        <main>
            <section className="relative min-h-[800px] overflow-hidden text-white md:min-h-[calc(100svh-76px)]">
                <div
                    className="absolute inset-0 scale-[1.01] bg-[url('/hero.avif')] bg-cover bg-center"
                    aria-hidden="true"
                />
                <div
                    className="absolute inset-0 bg-linear-to-r from-black/95 via-black/75 to-black/45"
                    aria-hidden="true"
                />
                <div className="relative z-10 mx-auto flex min-h-[800px] w-full max-w-[1240px] flex-col px-[19px] pt-16 md:grid md:min-h-[calc(100svh-76px)] md:grid-cols-[1.1fr_0.75fr] md:items-center md:gap-[35px] md:px-6 md:py-[54px] lg:grid-cols-[1.15fr_0.72fr] lg:gap-[clamp(30px,6vw,90px)] lg:px-9">
                    <div className="relative z-10 max-w-[700px]">
                        <p className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-white/70 uppercase before:h-px before:w-7 before:bg-current">
                            Mykhailo Huseinov
                        </p>
                        <h1 className="m-0 text-[48px] leading-[0.98] font-semibold tracking-[-0.05em] md:text-[clamp(52px,6.6vw,94px)]">
                            En tydelig stemme.
                            <span className="block text-[#dec7ff]">Et sterkere fellesskap.</span>
                        </h1>
                        <p className="my-[30px] max-w-[560px] text-sm leading-[1.6] text-white/80 md:text-base md:leading-[1.7]">
                            Jeg heter Mykhailo Huseinov, og jeg stiller til valg fordi gode ideer fortjener mer enn bare
                            å bli hørt. De fortjener å bli gjort.
                        </p>
                        <div className="flex items-center gap-5 md:gap-7">
                            <a
                                className="inline-flex min-h-12 items-center justify-center gap-[18px] rounded-md bg-white px-[21px] text-xs font-bold text-[#241533] transition hover:-translate-y-0.5 hover:bg-violet-100"
                                href="#stem"
                            >
                                Stem på fredag <ArrowIcon />
                            </a>
                            <Link
                                className="border-b border-current pb-1 text-xs font-bold text-white/90"
                                href="/om-meg"
                            >
                                Møt Mykhailo
                            </Link>
                        </div>
                    </div>

                    <div
                        className="relative mt-12 aspect-[2/3] w-[min(73vw,273px)] shrink-0 self-center overflow-hidden md:mt-0 md:aspect-auto md:h-[min(66vh,610px)] md:min-h-[430px] md:w-full md:self-auto md:rounded-2xl lg:min-h-[480px]"
                        aria-label="Portrett av Mykhailo Huseinov"
                    >
                        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-bottom bg-no-repeat saturate-[0.62] contrast-[1.03] after:absolute after:inset-0 after:bg-linear-to-b after:from-transparent after:from-65% after:to-[#310070]/60 md:bg-top" />
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-[1240px] px-[19px] py-[76px] md:px-6 md:py-[110px] lg:px-9">
                <p className="mb-[34px] text-[9px] font-bold tracking-[0.15em] text-[#87908c] uppercase">
                    Hvorfor jeg stiller
                </p>
                <div className="grid gap-7 md:grid-cols-[1.25fr_0.65fr] md:gap-[11%]">
                    <h2 className="m-0 text-[clamp(40px,4.8vw,66px)] leading-[1.06] font-semibold tracking-[-0.045em]">
                        Skolen blir bedre når vi bygger den sammen.
                    </h2>
                    <div className="flex flex-col items-start justify-between">
                        <p className="my-1 max-w-xl text-[15px] leading-[1.75] text-[#746a7d] md:mb-8">
                            Et godt elevråd handler ikke om én person med alle svarene. Det handler om å lytte, samle
                            folk og følge opp det vi blir enige om.
                        </p>
                        <Link
                            className="mt-7 inline-flex items-center gap-2 border-b border-current pb-1 text-xs font-bold md:mt-0"
                            href="/om-meg"
                        >
                            Les mer om meg <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </section>

            <section
                className="rounded-t-[30px] bg-violet-200 py-[74px] md:rounded-t-[48px] md:py-[100px] md:pb-[110px]"
                id="hjertesaker"
            >
                <div className="mx-auto w-full max-w-[1240px] px-[19px] md:px-6 lg:px-9">
                    <div className="mb-[38px] flex items-start justify-between md:mb-[52px] md:items-end">
                        <div>
                            <h2 className="m-0 text-[clamp(40px,4.8vw,66px)] leading-[1.06] font-semibold tracking-[-0.045em]">
                                Tre klare prioriteringer
                            </h2>
                        </div>
                        <p className="hidden text-right text-[10px] leading-[1.6] tracking-[0.08em] text-[#746a7d] uppercase md:block">
                            Kom med innspill
                            <br />
                            Send forslag til{" "}
                            <a href="mailto:myhua001@osloskolen.no" className="underline">
                                myhua001@osloskolen.no
                            </a>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
                        {priorities.map(priority => (
                            <article
                                className="flex min-h-[245px] flex-col rounded-[28px] bg-white/50 p-6 transition hover:-translate-y-1 hover:bg-white/80 md:min-h-[310px] lg:p-[30px]"
                                key={priority.number}
                            >
                                <span className="text-[10px] text-[#75827d]">{priority.number}</span>
                                <h3 className="mt-auto mb-3.5 max-w-[250px] text-[26px] font-semibold tracking-[-0.03em]">
                                    {priority.title}
                                </h3>
                                <p className="m-0 text-[13px] leading-[1.65] text-[#746a7d]">{priority.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#6f00ff] text-white" id="stem">
                <div className="mx-auto grid min-h-[410px] w-full max-w-[1240px] grid-cols-1 content-center items-end gap-[42px] px-[19px] py-[70px] md:min-h-[350px] md:grid-cols-[1.25fr_0.55fr] md:gap-[12%] md:px-6 lg:px-9">
                    <div>
                        <p className="mb-[22px] flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-white/70 uppercase before:h-px before:w-7 before:bg-current">
                            Valget er fredag
                        </p>
                        <h2 className="m-0 text-[clamp(44px,5.5vw,76px)] leading-[1.06] font-semibold tracking-[-0.045em]">
                            Stem Mykhailo Huseinov.
                        </h2>
                    </div>
                    <div className="max-w-[330px] border-l border-white/30 pl-7">
                        <p className="mb-[22px] text-[15px] leading-[1.65] text-white/75">
                            Gå inn på skolens valgside på fredag og bruk stemmen din.
                        </p>
                        <span className="text-[9px] tracking-[0.14em] uppercase">Elevrådsvalget 2026</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
