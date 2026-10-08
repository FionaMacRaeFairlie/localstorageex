import { useLocalStorage } from "../useLocalStorage";

const Form = () => {
  const [name, setName] = useLocalStorage("name", "");

  const [ingredients, setIngredients] = useLocalStorage("ingredients", {
    apple: false,
    sweetcorn: false,
    mushroom: false,
    tomato: false,
    dressing: false,
    rice: false,
    aubergine: false,
    watermelon: false,
  });

  const ingredientOptions = [
    { key: "apple", label: "Apple" },
    { key: "sweetcorn", label: "Sweetcorn" },
    { key: "mushroom", label: "Mushroom" },
    { key: "tomato", label: "Tomato" },
    { key: "dressing", label: "Red Wine Dressing" },
    { key: "rice", label: "Seasoned Rice" },
    { key: "aubergine", label: "Aubergine" },
    { key: "watermelon", label: "Watermelon" },
  ];

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setIngredients({
      ...ingredients,
      [name]: checked,
    });
  };

  return (
    <form className="form-card">
      <div className="form-group">
        <label className="form-label" htmlFor="fullname">
          Full Name
        </label>

        <input
          id="fullname"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
        />
      </div>

      <div className="form-group">
        <p>Select your favourite items here</p>

        <div className="checkbox-group">
          {ingredientOptions.map((ingredient) => (
            <div key={ingredient.key} className="checkbox-item">
              <input
                id={ingredient.key}
                type="checkbox"
                name={ingredient.key}
                checked={ingredients[ingredient.key]}
                onChange={handleCheckboxChange}
              />

              <label htmlFor={ingredient.key}>{ingredient.label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="form-group">
        <h3>Current Selection</h3>

        <ul>
          {Object.keys(ingredients)
            .filter((ingredient) => ingredients[ingredient])
            .map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
        </ul>
      </div> */}
    </form>
  );
};

export default Form;
