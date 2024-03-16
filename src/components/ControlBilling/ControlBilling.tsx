"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"

export function ControlBilling() {
    return (
        <div className="p-4 py-20 md:py-64">
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-6 md:p-8">
                    <Image src="/assets/control-business.png" alt="Control Business" width="580" height={411} className="w-full h-auto" />
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            Easily control <br />
                            your billing
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">With the right credit card, you can improve your financial life 
                            by building credit, earning rewards and
                            life by building credit, earning rewards and saving money.
                            saving money. But with hundreds of credit cards on the
                            on the market.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
