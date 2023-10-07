'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
    BanknotesIcon,
    RocketLaunchIcon,
    PuzzlePieceIcon,
    SpeakerWaveIcon,
} from '@heroicons/react/24/outline';
import { Logo } from '@/components/icons/logo';

function Home() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="bg-white text-black">
            <header className="navbar fixed top-0 left-0 z-50 w-full border-stroke bg-white duration-300">
                <div className="container relative lg:max-w-[1305px] lg:px-10">
                    <div className="flex items-center justify-between">
                        <div className="block py-4 lg:py-0">
                            <a
                                href="index.html"
                                className="block max-w-[145px] sm:max-w-[180px]"
                            >
                                <Logo />
                            </a>
                        </div>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-[6px] font-bold lg:hidden"
                            aria-label="navbarOpen"
                            name="navbarOpen"
                        >
                            <span className="block h-[2px] w-7 bg-black "></span>
                            <span className="block h-[2px] w-7 bg-black "></span>
                            <span className="block h-[2px] w-7 bg-black "></span>
                        </button>

                        <div
                            className={`menu-wrapper relative ${
                                isOpen ? '' : 'hidden'
                            } justify-between lg:flex`}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="navbarClose fixed top-10 right-10 z-[9999] flex h-10 w-10 flex-col items-center justify-center font-bold lg:hidden"
                                name="navbarClose"
                                aria-label="navbarClose"
                            >
                                <span className="block h-[2px] w-7 rotate-45 bg-black "></span>
                                <span className="-mt-[2px] block h-[2px] w-7 -rotate-45 bg-black "></span>
                            </button>

                            <nav className="fixed top-0 left-0 z-[999] flex h-screen w-full items-center justify-center bg-white bg-opacity-95 text-center backdrop-blur-sm lg:static lg:h-auto lg:w-max lg:bg-transparent lg:backdrop-blur-none ">
                                <ul className="items-center space-y-3 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-10">
                                    <li className="menu-item">
                                        <a
                                            onClick={() => setIsOpen(false)}
                                            href="#features"
                                            className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            onClick={() => setIsOpen(false)}
                                            href="#about"
                                            className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            onClick={() => setIsOpen(false)}
                                            href="#work-process"
                                            className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7"
                                        >
                                            How It Works
                                        </a>
                                    </li>
                                    <li className="menu-item">
                                        <a
                                            onClick={() => setIsOpen(false)}
                                            href="#faq"
                                            className="menu-scroll inline-flex items-center text-base font-medium text-black hover:text-redpraha   lg:py-7"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="mr-[60px] flex items-center justify-end lg:mr-0">
                            <a
                                href="/dashboard"
                                className="rounded-md bg-redpraha py-[6px] px-[12px] xl:py-[10px] xl:px-[30px] text-base font-medium text-black hover:bg-opacity-90"
                            >
                                Use The App
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section
                    id="home"
                    className="pt-[165px]"
                >
                    <div className="container lg:max-w-[1305px] lg:px-10">
                        <div className="-mx-4 flex flex-wrap items-center">
                            <div className="w-full px-4 lg:w-7/12">
                                <div
                                    className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                                    data-wow-delay=".2s"
                                >
                                    <span className="mb-5 block text-2xl font-medium leading-tight text-black sm:text-[40px] md:text-[30px] lg:text-[30px] xl:text-[30px]">
                                        Engage
                                    </span>
                                    <h1 className="mb-6 text-5xl font-bold leading-tight text-black  sm:text-[50px] md:text-[70px] lg:text-[52px] xl:text-[60px]">
                                        your community <br />
                                        <span className="inline bg-redpraha bg-clip-text text-transparent">
                                            Quo-Roma <br />
                                        </span>
                                        The Social DAO
                                        <span className="inline bg-redpraha bg-clip-text text-transparent mx-2">
                                            Management
                                        </span>
                                    </h1>
                                    <p className="mb-10 max-w-[475px] text-base leading-relaxed text-body">
                                        ETH Rome - 2023
                                    </p>

                                    <div className="flex flex-wrap items-center">
                                        <a
                                            target="_blank"
                                            href="https://github.com/orgs/Witness-Market/repositories"
                                            className="mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-black py-[14px] px-[30px] text-white hover:bg-opacity-90"
                                        >
                                            <span className="mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed ">
                                                View on Github
                                            </span>
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                        <a
                                            target="_blank"
                                            href="https://github.com/martorian/quo-roma"
                                            className="mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-redpraha py-[14px] px-[30px] text-white hover:bg-opacity-90"
                                        >
                                            Use the App
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-4 lg:w-5/12">
                                <div
                                    className="wow fadeInUp relative z-10 mx-auto w-full max-w-[530px] pt-8 lg:mr-0"
                                    data-wow-delay=".3s"
                                >
                                    <img
                                        src="/images/9.png"
                                        alt="hero image"
                                        className="mx-auto max-w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    className="relative z-10 pt-[110px]"
                >
                    <div className="container flex">
                        <div
                            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
                            data-wow-delay=".2s"
                        >
                            <Logo />

                            <h2 className="mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight">
                                An amazing Social DAO
                            </h2>
                            <p className="text-base text-body">
                                Quo-Roma is a revolutionary Social DAO
                                Management platform that empowers entities to
                                create and manage various charity causes, all
                                with the shared goal of driving positive change.
                                Our platform offers a unique and engaging
                                community-driven experience where your
                                contributions matter.
                            </p>
                        </div>
                    </div>

                    <div className="container max-w-[1390px]">
                        <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".4s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <PuzzlePieceIcon
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            Empowerment Through DAOs
                                        </h3>
                                        <p className="text-base text-body">
                                            At Quo-Roma, we believe in the power
                                            of decentralized autonomous
                                            organizations (DAOs). We provide the
                                            tools for entities, big and small,
                                            to establish their DAOs dedicated to
                                            charitable causes. This democratized
                                            approach ensures that the community
                                            has a say in where resources are
                                            directed
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".3s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <RocketLaunchIcon
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            Transparency and Accountability
                                        </h3>
                                        <p className="text-base text-body">
                                            We prioritize transparency and
                                            accountability. With blockchain
                                            technology, all transactions and
                                            contributions are recorded on an
                                            immutable ledger, providing donors
                                            and supporters with full
                                            transparency into how their
                                            contributions are making a
                                            difference.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <SpeakerWaveIcon
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            Community-Driven Impact:
                                        </h3>
                                        <p className="text-base text-body">
                                            Quo-Roma fosters a vibrant community
                                            of like-minded individuals and
                                            organizations. Together, we amplify
                                            the impact of charitable causes by
                                            pooling resources, sharing ideas,
                                            and collaborating on projects that
                                            truly matter.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 -z-10">
                        <svg
                            width="602"
                            height="1154"
                            viewBox="0 0 602 1154"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                opacity="0.25"
                                filter="url(#filter0_f_26_84)"
                            >
                                <circle
                                    cx="577"
                                    cy="577"
                                    r="317"
                                    fill="url(#paint0_linear_26_84)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_26_84"
                                    x="0"
                                    y="0"
                                    width="1154"
                                    height="1154"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="130"
                                        result="effect1_foregroundBlur_26_84"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_26_84"
                                    x1="183.787"
                                    y1="894"
                                    x2="970.173"
                                    y2="346.491"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#8EA5FE" />
                                    <stop
                                        offset="0.541667"
                                        stopColor="#BEB3FD"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#90D1FF"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="absolute left-0 -bottom-1/2 -z-10 hidden md:block">
                        <svg
                            width="622"
                            height="1236"
                            viewBox="0 0 622 1236"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                opacity="0.2"
                                filter="url(#filter0_f_26_85)"
                            >
                                <circle
                                    cx="4"
                                    cy="618"
                                    r="368"
                                    fill="url(#paint0_linear_26_85)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_26_85"
                                    x="-614"
                                    y="0"
                                    width="1236"
                                    height="1236"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="125"
                                        result="effect1_foregroundBlur_26_85"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_26_85"
                                    x1="-364"
                                    y1="250"
                                    x2="506.12"
                                    y2="754.835"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FF8FE8" />
                                    <stop
                                        offset="1"
                                        stopColor="#FFC960"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </section>

                <section
                    id="about"
                    className="relative pt-[150px]"
                >
                    <div className="container lg:max-w-[1120px]">
                        <div>
                            <div className="-mx-4 flex flex-wrap items-center justify-between">
                                <div className="w-full px-4 lg:w-1/2">
                                    <div
                                        className="wow fadeInUp relative z-10 mx-auto mb-14 w-full max-w-[470px] pb-6 lg:mx-0 lg:mb-0"
                                        data-wow-delay=".2s"
                                    >
                                        <img
                                            src="/images/17.png"
                                            alt="about image"
                                            className="mx-auto max-w-full"
                                        />
                                    </div>
                                </div>

                                <div className="w-full px-4 lg:w-1/2">
                                    <div
                                        className="wow fadeInUp lg:ml-auto lg:max-w-[510px]"
                                        data-wow-delay=".3s"
                                    >
                                        <h2 className="mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight">
                                            Two Reasons Why Our Dapp is Powerful
                                            for the Community
                                        </h2>
                                        <div className="mb-[30px] flex items-center">
                                            <div className="shrink-0 mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black text-center ">
                                                01
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-medium text-black ">
                                                    Our Dapp streamlines the
                                                    entire process of creating
                                                    and managing charity causes
                                                </h5>
                                                <p className="text-base text-body">
                                                    significantly reducing
                                                    administrative overhead and
                                                    costs. This efficiency
                                                    ensures that more of the
                                                    resources you contribute go
                                                    directly to the causes you
                                                    care about.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="shrink-0 mr-3 flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke text-xl font-semibold text-black  ">
                                                02
                                            </div>
                                            <div>
                                                <h5 className="text-xl font-medium text-black ">
                                                    Inclusivity and Global Reach
                                                </h5>
                                                <p className="text-base text-body">
                                                    Quo-Roma is accessible to
                                                    anyone, anywhere. By
                                                    harnessing the power of
                                                    blockchain and Web3
                                                    technology, we break down
                                                    geographical barriers and
                                                    enable people from all
                                                    corners of the world to join
                                                    hands in creating a better
                                                    future for our global
                                                    community.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute right-0 top-36 -z-10">
                        <svg
                            width="95"
                            height="190"
                            viewBox="0 0 95 190"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="95"
                                cy="95"
                                r="77"
                                stroke="url(#paint0_linear_47_27)"
                                strokeWidth="36"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_47_27"
                                    x1="0"
                                    y1="0"
                                    x2="224.623"
                                    y2="130.324"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FF8FE8" />
                                    <stop
                                        offset="1"
                                        stopColor="#FFC960"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </section>

                <section
                    id="work-process"
                    className="relative z-10 pt-[110px]"
                >
                    <div className="container">
                        <div
                            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
                            data-wow-delay=".2s"
                        >
                            <h2 className="mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight">
                                Quo-Roma to the moon 🚀 with our partner
                            </h2>
                        </div>
                    </div>

                    <div className="container max-w-[1390px]">
                        <div className="rounded-2xl bg-white px-5 pt-14 pb-14 shadow-md md:pb-1 lg:pt-20 lg:pb-5 xl:px-10">
                            <div className="-mx-4 flex flex-wrap justify-center">
                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <img
                                                src="/bounties/waku.png"
                                                alt="author"
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            WAKU
                                        </h3>
                                        <p className="text-base text-body">
                                            A family of robust,
                                            censorship-resistant communication
                                            protocols designed to enable
                                            privacy-focused messaging for web3
                                            apps.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".3s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <img
                                                src="/bounties/sismo.png"
                                                alt="author"
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            SISMO
                                        </h3>
                                        <p className="text-base text-body">
                                            Sismo Connect is a single sign-on
                                            (SSO) enabling applications to
                                            request any data aggregated in a
                                            user's Data Vault
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".4s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <img
                                                src="/bounties/railgun.png"
                                                alt="author"
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            Railgun
                                        </h3>
                                        <p className="text-base text-body">
                                            A community project for peer-to-peer
                                            privacy in DeFi.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".4s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <img
                                                src="/bounties/the-graph.png"
                                                alt="author"
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            The Graph
                                        </h3>
                                        <p className="text-base text-body">
                                            The Graph is an indexing protocol
                                            for organizing blockchain data and
                                            making it easily accessible with
                                            GraphQL
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                    <div
                                        className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                                        data-wow-delay=".4s"
                                    >
                                        <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-redpraha bg-opacity-20 text-redpraha duration-300 group-hover:bg-redpraha group-hover:text-white   ">
                                            <img
                                                src="/bounties/peanuts.ico"
                                                alt="author"
                                                className="h-full w-full object-contain"
                                            />
                                        </div>
                                        <h3 className="mb-4 text-xl font-semibold text-black  sm:text-[22px] xl:text-[26px]">
                                            Peanuts Protocol
                                        </h3>
                                        <p className="text-base text-body">
                                            Send tokens with a trustless payment
                                            link
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-28 left-0 -z-10 hidden md:block">
                        <svg
                            width="632"
                            height="1179"
                            viewBox="0 0 632 1179"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                opacity="0.25"
                                filter="url(#filter0_f_38_24)"
                            >
                                <circle
                                    cx="42.5"
                                    cy="589.5"
                                    r="329.5"
                                    fill="url(#paint0_linear_38_24)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_38_24"
                                    x="-547"
                                    y="0"
                                    width="1179"
                                    height="1179"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="130"
                                        result="effect1_foregroundBlur_38_24"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_38_24"
                                    x1="-366.218"
                                    y1="919"
                                    x2="451.176"
                                    y2="349.901"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#8EA5FE" />
                                    <stop
                                        offset="0.541667"
                                        stopColor="#BEB3FD"
                                    />
                                    <stop
                                        offset="1"
                                        stopColor="#90D1FF"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="absolute right-0 top-20 -z-10">
                        <svg
                            width="637"
                            height="1277"
                            viewBox="0 0 637 1277"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                opacity="0.2"
                                filter="url(#filter0_f_38_23)"
                            >
                                <circle
                                    cx="638.5"
                                    cy="638.5"
                                    r="388.5"
                                    fill="url(#paint0_linear_38_23)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_38_23"
                                    x="0"
                                    y="0"
                                    width="1277"
                                    height="1277"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="125"
                                        result="effect1_foregroundBlur_38_23"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_38_23"
                                    x1="250"
                                    y1="250"
                                    x2="1168.59"
                                    y2="782.957"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FF8FE8" />
                                    <stop
                                        offset="1"
                                        stopColor="#FFC960"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </section>

                <section
                    id="testimonials"
                    className="relative z-10 pt-[110px] pb-[60px]"
                >
                    <div className="container">
                        <div
                            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
                            data-wow-delay=".2s"
                        >
                            <h1 className="mb-6 text-5xl font-bold leading-tight text-black  sm:text-[50px] md:text-[70px] lg:text-[52px] xl:text-[60px]">
                                Let's change the way to support charities{' '}
                                <span className="inline bg-redpraha bg-clip-text text-transparent">
                                    WITH {''} <br />{' '}
                                </span>
                                a transparent and private Dapp
                                <br />{' '}
                                <span className="inline bg-redpraha bg-clip-text text-transparent mx-2">
                                    woooooooo
                                    <br />{' '}
                                </span>
                                QUO-ROMA
                            </h1>
                            <div
                                className="wow fadeInUp relative mx-auto mb-5 w-full max-w-[530px]"
                                data-wow-delay=".3s"
                            >
                                <img
                                    src="/images/28.png"
                                    alt="hero image"
                                    className="mx-auto max-w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="support"
                    className="pt-[20px] pb-[20px]"
                >
                    <div className="container bg-[#F8FAFB] pt-10 pb-4">
                        <div
                            className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
                            data-wow-delay=".2s"
                        >
                            <h2 className="mb-4 text-3xl font-bold text-black  sm:text-4xl md:text-[44px] md:leading-tight">
                                get started with QUO-ROMA right now
                            </h2>
                            <p className="text-base text-body mb-10">
                                view the code on Github or use the demo
                                applicaiton now
                            </p>
                            <a
                                target="_blank"
                                href="https://github.com/martorian/quo-roma"
                                className="mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-black py-[14px] px-[30px] text-white hover:bg-opacity-90"
                            >
                                <span className="mr-[18px] border-r border-stroke border-opacity-40 pr-[18px] leading-relaxed ">
                                    View on Github
                                </span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#FFF"
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <a
                                target="_blank"
                                href="/dashboard"
                                className="mr-6 mb-6 inline-flex h-[60px] items-center rounded-lg bg-redpraha py-[14px] px-[30px] text-white hover:bg-opacity-90"
                            >
                                Use the App
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div
                    className="wow fadeInUp bg-redpraha py-7"
                    data-wow-delay=".2s"
                >
                    <div className="container max-w-[1390px]">
                        <div className="-mx-3 flex flex-wrap">
                            <div className="order-last w-full px-3 lg:order-first lg:w-1/3">
                                <p className="mt-4 text-center text-base text-white lg:mt-0 lg:text-left">
                                    &copy; 2023 Quo-Roma - ETH Rome Hackathon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
