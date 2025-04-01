import Heading from "../Heading/Heading";
import Image from "next/image";

function Cards() {
    const cards = [
        {
            'title': 'Lorem ipsum',
            'description': 'Cras sagittis. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Fusce ac felis sit amet ligula pharetra condimentum.',
            'imagePath': '/bridge-lake.jpeg'
        },
        {
            'title': 'Dolor sit amet',
            'description': 'Vivamus quis mi. Phasellus magna.',
            'imagePath': '/dears.gif'
        },
        {
            'title': 'Hello world',
            'description': 'Fusce ac felis sit amet ligula pharetra condimentum. Morbi ac felis. Morbi vestibulum volutpat enim. Donec venenatis vulputate lorem.',
            'imagePath': '/nature.jpeg'
        },
    ];

    return (
        <section className="cards">
            <div className="container mx-auto px-regular">
                <Heading
                    tag="h2"
                    customTagClass="h1"
                    text="Lorem ipsum"
                    font="caveat"
                />
                <div className="grid md:grid-cols-12 gap-4 gap-x-4 my-regular justify-between">
                    {
                        cards.map((card, index) => (
                            <div className="card lg:col-span-4 md:col-span-6 w-full relative" key={index}>
                                <div key={index} className="card-inner h-full border-1 rounded-2xl after:absolute after:w-5 after:h-5 after:bg-amber-300 after:top-5 after:right-5 after:rounded-3xl">
                                    <div className="image bg-blue-400 rounded-t-2xl w-full h-50">
                                        <Image className="w-full h-full rounded-t-2xl object-cover" src={card.imagePath} width={100} height={100} alt="" />
                                    </div>
                                    <div className="p-10 wysiwyg">
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Cards;
