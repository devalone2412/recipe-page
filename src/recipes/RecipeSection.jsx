export default function RecipeSection({
                                          title,
                                          isOrderedList,
                                          additionalSectionHeaderContent,
                                          children,
                                          isSkipDefaultContent = false,
                                          ...rest
                                      }) {

    if (isSkipDefaultContent) {
        return (
            <section className="recipe-section">
                <h2 className="recipe-section__tile">{title}</h2>
                {children}
            </section>
        )
    }

    return (
        (
            <section className="recipe-section">
                <h2 className="recipe-section__tile">{title}</h2>
                {additionalSectionHeaderContent ? additionalSectionHeaderContent : null}
                {isOrderedList ? (
                    <ol {...rest}>
                        {children}
                    </ol>
                ) : (
                    <ul {...rest}>
                        {children}
                    </ul>
                )}
            </section>
        )


    );
}