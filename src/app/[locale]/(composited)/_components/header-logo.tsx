"use client";

import Link from "@/app/[locale]/_components/link";
import {usePathname} from "next-intl/client";
import {localeConfig} from "@/i18n";
import {Fragment} from "react";

export default function HeaderLogo() {
    const path = usePathname();

    return (
        <div className="flex gap-16">
            <div className="flex items-center gap-4">
                {localeConfig.locales.map((locale, i) => {
                    return (
                        <Fragment key={locale}>
                            <Link
                                href={path || "/"}
                                locale={locale}
                                className="uppercase"
                            >
                                {locale}
                            </Link>
                            {i < localeConfig.locales.length - 1 &&
                                <div className="bg-neutral-300 rounded h-8 w-1"/>
                            }
                        </Fragment>
                    )
                })}
            </div>
        </div>
    )
}