import omelette from '../assets/images/image-omelette.jpeg';

function RecipePost() {
    return (
        <article className="recipe-post">
            <header>
                <div>
                    <img src={omelette} alt="img-food"/>
                </div>
                <h1 className="recipe-post__name">Simple Omelette Recipe</h1>
                <p>An easy and quick dish, perfect for any meal. This classic omelette combines between eggs cooked to
                    perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </header>

            <main>
                <section>
                    <h3>Preparation time</h3>
                    <ul>
                        <li>
                            <p><b>Total:</b> Approximately 10 minutes</p>
                            <p><b>Preparation:</b> 5 minutes</p>
                            <p><b>Cooking:</b> 5 minutes</p>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>Ingredients</h2>
                    <ul>
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                </section>
                <hr/>
                <section>
                    <h2>Instruction</h2>
                    <ol>
                        <li>
                            <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper
                            until they
                            are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li>
                            <strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat. Add the butter
                            or oil
                        </li>
                        <li>
                            <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the
                            eggs. Tilt
                            the pan to ensure the eggs evenly coat the surface.
                        </li>
                        <li>
                            <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are
                            still slightly runny in the middle, sprinkle your chosen fillings over one half of the
                            omelette.
                        </li>
                        <li>
                            <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge
                            and fold it over the fillings. Let it cook for another minute, the slice it onto a plate.
                        </li>
                        <li>
                            <strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.
                        </li>
                    </ol>
                </section>
                <hr/>
                <section>
                    <h2>Nutrition</h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>Calories</th>
                            <th>Carbs</th>
                            <th>Protein</th>
                            <th>Fat</th>
                        </tr>
                        <tr>
                            <td>277kcal</td>
                            <td>0g</td>
                            <td>20g</td>
                            <td>22g</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </main>

        </article>
    );
}

export default RecipePost;