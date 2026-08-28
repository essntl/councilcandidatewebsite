"use client";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import AnimatedContent from "@/components/AnimatedContent";

const priorities = [
    {
        number: "01",
        title: "Mer aktivitet i skolehverdagen",
        text: "Flere enkle og inkluderende aktiviteter som gir energi, bevegelse og gode pauser i skoledagen.",
    },
    {
        number: "02",
        title: "Arrangementer som engasjerer",
        text: "Turneringer, utfordringer og sosiale arrangementer som er morsomme å delta på og enkle å bli med på.",
    },
    {
        number: "03",
        title: "Et fellesskap med energi",
        text: "Det skal være lett å komme med ideer og skape aktiviteter som samler flere på tvers av klasser og interesser.",
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
                <AnimatedContent className="relative z-10 mx-auto flex min-h-[800px] w-full max-w-[1240px] flex-col px-[19px] pt-16 md:grid md:min-h-[calc(100svh-76px)] md:grid-cols-[1.1fr_0.75fr] md:items-center md:gap-[35px] md:px-6 md:py-[54px] lg:grid-cols-[1.15fr_0.72fr] lg:gap-[clamp(30px,6vw,90px)] lg:px-9">
                    <div className="relative z-10 max-w-[700px]">
                        <SplitText
                            className="mb-6 flex items-center gap-3 text-[10px] font-bold tracking-[0.15em] text-white/70 uppercase before:h-px before:w-7 before:bg-current"
                            delay={35}
                            duration={0.8}
                            from={{ opacity: 0, y: 16 }}
                            rootMargin="0px"
                            splitType="chars"
                            text="Mykhailo Huseinov · Gympartiet"
                            textAlign="left"
                        />
                        <h1 className="m-0 text-[48px] leading-[0.98] font-semibold tracking-[-0.05em] md:text-[clamp(52px,6.6vw,94px)]">
                            Stem Gympartiet.
                            <span className="block text-[#dec7ff]">Mer aktivitet. Mer energi.</span>
                        </h1>
                        <SplitText
                            className="my-[30px] max-w-[560px] text-sm leading-[1.6] text-white/80 md:text-base md:leading-[1.7]"
                            delay={24}
                            duration={0.9}
                            from={{ opacity: 0, y: 22 }}
                            rootMargin="0px"
                            splitType="words"
                            text="Jeg brenner for trening, aktivitet og arrangementer som får flere med. Med Gympartiet vil jeg gjøre skolehverdagen mer engasjerende."
                            textAlign="left"
                        />
                        <div className="flex items-center gap-5 md:gap-7">
                            <a
                                className="inline-flex min-h-12 items-center justify-center gap-[18px] rounded-md bg-white px-[21px] text-xs font-bold text-[#241533] transition hover:-translate-y-0.5 hover:bg-violet-100"
                                href="#stem"
                            >
                                Stem Gympartiet <ArrowIcon />
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
                </AnimatedContent>
            </section>

            <section className="mx-auto w-full max-w-[1240px] px-[19px] py-[76px] md:px-6 md:py-[110px] lg:px-9">
                <p className="mb-[34px] text-[9px] font-bold tracking-[0.15em] text-[#87908c] uppercase">
                    Hvorfor jeg stiller
                </p>
                <div className="grid gap-7 md:grid-cols-[1.25fr_0.65fr] md:gap-[11%]">
                    <h2 className="m-0 text-[clamp(40px,4.8vw,66px)] leading-[1.06] font-semibold tracking-[-0.045em]">
                        Mer aktivitet gir en skolehverdag med mer energi.
                    </h2>
                    <div className="flex flex-col items-start justify-between">
                        <p className="my-1 max-w-xl text-[15px] leading-[1.75] text-[#746a7d] md:mb-8">
                            Gympartiet vil skape flere aktiviteter og arrangementer som er åpne, morsomme og enkle å
                            delta på, enten du trener mye eller bare vil være med.
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
                            Stem Gympartiet.
                        </h2>
                    </div>
                    <div className="max-w-[330px] border-l border-white/30 pl-7">
                        <p className="mb-[22px] text-[15px] leading-[1.65] text-white/75">
                            Stem på Mykhailo og Gympartiet for en mer aktiv og engasjerende skolehverdag.
                        </p>
                        <span className="text-[9px] tracking-[0.14em] uppercase">Elevrådsvalget 2026</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
