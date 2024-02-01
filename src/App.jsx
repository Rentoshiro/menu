import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import menu from "./data";
import Categories from "./Categories";

const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ["all", ...tempSet];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(tempItems);

  function filterItems(category) {
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
    if (category === "all") {
      setMenuItems(menu);
    }
  }

  return (
    <main>
      <section className="menu">
        <Title text={"our menu"} />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
