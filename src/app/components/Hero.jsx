import Button from "./Button";
import Image from "next/image";
import Headshot from "../assets/headshot.jpg";
import Links from "./Links";

export default function Hero() {
    return (
        <section className="h-block bg-base-white">
            <div className="md:max-w-7xl mx-auto  min-h-block grid md:grid-cols-2 grid-cols-1 place-items-center p-4 md:p-0 text-center">
                <div className="max-w-prose  md:h-96 pt-12">
                    <h2 className="md:text-4xl text-2xl text-base-dark opacity-50 font-medium">
                        Janus Bardrum
                    </h2>
                    <h1 className="text-main-base md:text-6xl/18 text-3xl font-extrabold uppercase">
                        Multimediadesigner & Frontend Developer
                    </h1>
                    {/*Insert SoMe links here */}
                    <h3 className="text-base-dark-lighter text-sm md:text-base opacity-50 mb-4 md:mb-6">
                        <a
                            href="mailto:janusbardrum@gmail.com"
                            className="underline hover:text-main-base "
                        >
                            janusbardrum@gmail.com
                        </a>{" "}
                        | 6114 9336
                    </h3>
                    <Links className="place-self-center justify-center" />
                </div>
                <Image
                    src={Headshot}
                    alt="headshot"
                    height={384}
                    width={384}
                    className="md:size-96 size-50 object-cover rounded-full shadow-2xl md:self-center self-start"
                />
            </div>
        </section>
    );
}
