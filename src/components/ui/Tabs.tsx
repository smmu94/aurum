import clsx from "clsx";

type Tab = {
  id: string;
  label: string;
};

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="w-full bg-gunmetal rounded-xl p-1 flex items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={clsx(
                "py-2 rounded-lg transition-all cursor-pointer text-center t-button",
                "whitespace-nowrap t-body",
                "hover:bg-lion hover:text-gunmetal",
                isActive
                  ? "bg-lion text-gunmetal"
                  : "text-light"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
