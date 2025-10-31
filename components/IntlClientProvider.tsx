"use client";

import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

interface Props {
    locale: string;
    messages: Record<string, string>;
    children: ReactNode;
}

export default function IntlClientProvider({ locale, messages, children }: Props) {
    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
