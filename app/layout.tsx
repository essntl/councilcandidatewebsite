import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "Gympartiet | Mykhailo Huseinov",
    description: "Stem Gympartiet for en mer aktiv og engasjerende skolehverdag.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="nb" className={cn("scroll-smooth", "font-sans", geist.variable)}>
            <body className="bg-white text-[#241533] [font-family:var(--font-sans)]" suppressHydrationWarning>
                <header className="sticky top-0 z-20 border-b border-[#241533]/15 bg-white/90 backdrop-blur-lg">
                    <div className="mx-auto grid min-h-[66px] w-full max-w-[1240px] grid-cols-[1fr_auto] items-center px-[19px] md:min-h-[76px] md:grid-cols-[1fr_auto_1fr] md:px-6 lg:px-9">
                        <Link
                            className="flex w-fit items-center gap-3"
                            href="/"
                            aria-label="Mykhailo Huseinov, forside"
                        >
                            <div className="hidden flex-col leading-[1.15] sm:flex">
                                <strong className="text-md">Mykhailo Huseinov</strong>
                                <small className="mt-1 text-[9px] tracking-[0.1em] text-[#746a7d] uppercase">
                                    Kandidat til elevrådsrepresentant
                                </small>
                            </div>
                        </Link>
                        <nav className="flex items-center gap-[17px] md:gap-[34px]" aria-label="Hovedmeny">
                            <Link
                                className="text-[11px] font-semibold transition-colors hover:text-[#6f00ff] md:text-[13px]"
                                href="/"
                            >
                                Forside
                            </Link>
                            <Link
                                className="text-[11px] font-semibold transition-colors hover:text-[#6f00ff] md:text-[13px]"
                                href="/om-meg"
                            >
                                Om meg
                            </Link>
                            <Link
                                className="text-[11px] font-semibold transition-colors hover:text-[#6f00ff] md:text-[13px]"
                                href="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </nav>
                        <Link
                            className="hidden min-h-[42px] items-center justify-self-end rounded-md bg-[#6f00ff] px-[21px] text-xs font-bold text-white transition-transform hover:-translate-y-0.5 md:inline-flex"
                            href="/#stem"
                        >
                            Stem Gympartiet <span className="ml-[18px]">↗</span>
                        </Link>
                    </div>
                </header>

                {children}

                <footer className="bg-[#240052] text-white">
                    <div className="mx-auto grid w-full max-w-[1240px] grid-cols-2 gap-x-5 gap-y-12 px-[19px] py-14 md:grid-cols-[1.35fr_0.65fr_0.9fr] md:px-6 md:py-[72px] lg:grid-cols-[1.8fr_0.65fr_0.8fr] lg:px-9">
                        <div className="col-span-2 flex items-center gap-[22px] md:col-span-1">
                            <span className="flex size-10 items-center justify-center rounded-full bg-[#6f00ff] text-[13px] font-bold tracking-[-0.02em]">
                                MH
                            </span>
                            <p className="m-0 text-xl leading-[1.3] font-medium tracking-[-0.025em]">
                                Mer aktivitet. Mer energi. Stem Gympartiet.
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-[11px]">
                            <p className="mb-[5px] text-[9px] font-bold tracking-[0.15em] text-[#8c99a4] uppercase">
                                Navigasjon
                            </p>
                            <Link className="text-xs text-white/70" href="/">
                                Forside
                            </Link>
                            <Link className="text-xs text-white/70" href="/om-meg">
                                Om meg
                            </Link>
                            <Link className="text-xs text-white/70" href="/kontakt">
                                Kontakt
                            </Link>
                        </div>
                        <div className="flex flex-col items-start gap-[11px] md:justify-self-end">
                            <p className="mb-[7px] text-[9px] font-bold tracking-[0.15em] text-[#8c99a4] uppercase">
                                Ta kontakt
                            </p>
                            <a className="text-[10px] text-white/70 sm:text-xs" href="mailto:myhua001@osloskolen.no">
                                myhua001@osloskolen.no
                            </a>
                            <Link className="mt-2 border-b border-white/40 pb-1 text-xs text-white/70" href="/#stem">
                                Stem Gympartiet ↗
                            </Link>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
