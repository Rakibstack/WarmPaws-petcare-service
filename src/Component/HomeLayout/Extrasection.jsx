import React from "react";

const Extrasection = () => {
    const products = [
        {
            id: 1,
            name: "Warm Dog Sweater",
            desc: "Soft wool sweater for small to medium dogs.",
            price: "$24.99",
            image: "https://i.ibb.co.com/Y4Jf9hct/Screenshot-2025-10-22-222420.png",
        },
        {
            id: 2,
            name: "Cat Cozy Blanket",
            desc: "Fleece blanket perfect for naps on cold days.",
            price: "$18.50",
            image: "https://i.ibb.co.com/kVM19W4X/Screenshot-2025-10-22-222622.png",
        },
        {
            id: 3,
            name: "Paw-Proof Winter Boots",
            desc: "Keep your pet’s paws dry and safe from snow.",
            price: "$29.99",
            image: "https://i.ibb.co.com/TMskx8mY/Screenshot-2025-10-22-222831.png",
        },
        {
            id: 4,
            name: "Heated Pet Bed",
            desc: "Electric heating pad bed for cozy winter nights.",
            price: "$49.99",
            image: "https://i.ibb.co.com/zV78pcdq/Screenshot-2025-10-22-223014.png",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-14 text-center">
            <h2 className="text-3xl font-bold text-white mb-10">
                🛍️ Shop Cozy Winter Gear
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5 text-center hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-44 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-slate-300 text-sm mt-1 mb-3">{item.desc}</p>
                        <p className="text-cyan-400 font-semibold mb-3">{item.price}</p>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm px-4 py-2 rounded-full transition">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Extrasection;
