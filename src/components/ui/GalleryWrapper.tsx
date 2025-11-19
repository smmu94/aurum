import { useMemo, useState } from "react";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "../../lib/constants/gallery";
import Card from "./Card";
import Tabs from "./Tabs";

export default function GalleryWrapper() {
  const [active, setActive] = useState(GALLERY_CATEGORIES[0].id);
  
  const filteredItems = useMemo(() => {
    if (active === "all") {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter(item => item.category === active);
  }, [active]);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Tabs tabs={GALLERY_CATEGORIES} activeTab={active} onChange={setActive} />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card 
            key={item.id}
            name={item.name}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}