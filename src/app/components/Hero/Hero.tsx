import Heading from "../Heading/Heading";
import Image from "next/image";

function Hero() {
    return (
        <section className="hero py-large container mx-auto px-regular">
            <div className="grid lg:grid-cols-12 lg:gap-10 justify-items-between">
                <div className="lg:col-span-7 mb-large lg:mb-0">
                    <Heading
                        tag="h1"
                        text="Lorem ipsum heading"
                    />
                    <p className="text-2xl text-gray-700 mb-regular">Phasellus ullamcorper ipsum rutrum nunc. Nulla consequat massa quis enim. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Aenean imperdiet.</p>
                    <button className="rounded-3xl border-2 px-4 py-2 bg-blue-100 hover:bg-blue-400 hover:text-white transition duration-200 ease-in-out cursor-pointer">Learn more</button>
                </div>
                <div className="lg:col-span-5">
                    <Image className="w-full h-100 mb-regular rounded-2xl" src="/bridge-lake.jpeg" width={100} height={100} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
