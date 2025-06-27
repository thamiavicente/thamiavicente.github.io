'use client'
import Script from "next/script"
import { useEffect } from "react";

declare global {
    interface Window {
        VLibras: {
            Widget: new (url: string) => object | unknown;
        };
    }
}

export default function VLibras() {
    useEffect(() => {
        if (typeof window !== "undefined" && window.VLibras) {
            new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
    }, []);

    return (
        <>
            {/* @ts-expect-error code from third-party - VLibras Widget */}
            <div vw="true" className="enabled">
                <div vw-access-button="true" className="active"></div>
                <div vw-plugin-wrapper="true">
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>
            <Script
                src="https://vlibras.gov.br/app/vlibras-plugin.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.VLibras) {
                        new window.VLibras.Widget("https://vlibras.gov.br/app");
                    }
                }}
            />
        </>
    )
}
