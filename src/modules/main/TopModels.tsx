import models from './constants/models.json'
import ModelCard from "./components/ModelCard.tsx";

const TopModels = () => {
    return (
        <section className="py-16">
            <div className="container">
                <h3 className="mb-12 font-bold text-4xl text-center">
                    Top models
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
                    {
                        models.map(model => (
                            <ModelCard model={model}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TopModels;