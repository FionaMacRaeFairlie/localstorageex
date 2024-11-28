import { useLocalStorage } from "../useLocalStorage";


const Form = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [apple, setApple] = useLocalStorage("apple", false);
  const [sweetcorn, setSweetcorn] = useLocalStorage("sweetcorn", false);
  const [mushroom, setMushroom] = useLocalStorage("mushroom", false);
  const [tomato, setTomato] = useLocalStorage("tomato", false);
  const [dressing, setDressing] = useLocalStorage("dressing", false);
  const [rice, setRice] = useLocalStorage("rice", false);
  const [aubergine, setAubergine] = useLocalStorage("aubergine", false);
  const [watermelon, setWatermelon] = useLocalStorage("watermelon", false);


  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          aria-label="fullname"
        />
        <p> Select your fovourite items here</p>

        <label>
          Apple
          <input
            type="checkbox"
            checked={apple}
            onChange={(e) => setApple(e.target.checked)}
          />
        </label>
        <label>
          Sweetcorn
          <input
            type="checkbox"
            checked={sweetcorn}
            onChange={(e) => setSweetcorn(e.target.checked)}
          />
        </label>
        <label>
          Mushroom
          <input
            type="checkbox"
            checked={mushroom}
            onChange={(e) => setMushroom(e.target.checked)}
          />
        </label>
        <label>
          Tomato
          <input
            type="checkbox"
            checked={tomato}
            onChange={(e) => setTomato(e.target.checked)}
          />
        </label>
        <label>
          Red Wine Dressing
          <input
            type="checkbox"
            checked={dressing}
            onChange={(e) => setDressing(e.target.checked)}
          />
        </label>
        <label>
          Seasoned rice
          <input
            type="checkbox"
            checked={rice}
            onChange={(e) => setRice(e.target.checked)}
          />
        </label>
        <label>
          Aubergine
          <input
            type="checkbox"
            checked={aubergine}
            onChange={(e) => setAubergine(e.target.checked)}
          />
        </label>
        <label>
          Watermelon
          <input
            type="checkbox"
            checked={watermelon}
            onChange={(e) => setWatermelon(e.target.checked)}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
