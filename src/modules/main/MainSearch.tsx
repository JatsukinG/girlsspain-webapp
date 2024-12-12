import {FaCity, FaSearch} from "react-icons/fa";
import {TbGenderFemale} from "react-icons/tb";

const MainSearch = () => {
    return (
        <section className="py-16 container flex flex-col items-center">
            <h2 className="text-5xl font-mono">
                Bienvenidos a Girls España
            </h2>
            <p className="mt-8 text-center max-w-3xl text-base font-mono">
                Esta es una comunidad donde cada chica comparte su esencia de manera única, cuidadosamente verificados
                para garantizar autenticidad y confianza.
            </p>
            <div className="mt-8 mx-auto w-full rounded-full flex gap-2 bg-neutral-700 p-2">
                <div className="flex-grow grid grid-cols-4 gap-2">
                    <div className="p-4 text-xl font-semibold flex items-center gap-2 bg-neutral-800 rounded-l-full">
                        <TbGenderFemale/>
                        <span>
                            Mujer
                        </span>
                    </div>
                    <div className="p-4 text-xl font-semibold flex items-center gap-2 bg-neutral-800">
                        <FaCity/>
                        <span>
                            Madrid
                        </span>
                    </div>
                    <div className="p-4 text-xl font-semibold flex items-center gap-2 bg-neutral-800">
                        <FaCity/>
                        <span>
                            Bernulia
                        </span>
                    </div>
                    <div className="p-4 text-xl font-semibold flex items-center gap-2 bg-neutral-800">
                        <FaCity/>
                        <span>
                            Madrid
                        </span>
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-fuchsia-500 px-8 py-4 rounded-r-full font-bold text-xl">
                    <span>
                        Buscar
                    </span>
                    <FaSearch/>
                </button>
            </div>
        </section>
    );
};

export default MainSearch;