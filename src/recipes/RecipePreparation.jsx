import PreparationItem from "./PreparationItem.jsx";

export default function RecipePreparation({title, children}) {
    return (
        <section className="preparation">
            <h3 className="preparation__title">{title}</h3>
            <ul className="preparation__general-information">
                {children}
            </ul>
        </section>
    );
}

RecipePreparation.Item = PreparationItem;