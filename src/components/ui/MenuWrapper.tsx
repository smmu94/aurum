import { useState } from "react";
import { CATEGORIES, DISHES_BY_CATEGORY } from "../../lib/constants/menu";
import Card from "./Card";
import Tabs from "./Tabs";

export default function MenuWrapper() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Tabs tabs={CATEGORIES} activeTab={active} onChange={setActive} />
       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DISHES_BY_CATEGORY[active]?.map((dish) => (
          <Card key={dish.id} {...dish} />
        ))}
      </div>
    </div>
  );
}