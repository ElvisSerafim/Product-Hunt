import { capitalize } from "@/utils/functions";

interface TabsProps {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
  tabs: string[];
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="bg-white md:pt-4">
      <nav
        className="flex gap-1 relative after:absolute after:bottom-0 after:inset-x-0 after:border-b-2 after:border-stone-200"
        aria-label="Tabs"
        role="tablist"
        aria-orientation="horizontal"
      >
        {tabs?.map((tab, index) => (
          <button
            onClick={() => setActiveTab(tab)}
            key={`tab-item-${index}-tab`}
            className={`
            flex-1 relative inline-flex cursor-pointer justify-center items-center gap-x-2
            px-2.5 py-1.5 mb-2 text-[14px] rounded-lg
              hover:bg-stone-100
            focus:outline-none 
            transition-all duration-300 ease-in-out
            after:absolute after:inset-x-0 after:-bottom-2 after:h-[3px] after:z-10
            after:transition-all after:duration-300 after:ease-in-out
            ${
              activeTab === tab
                ? "text-amber-600 after:bg-amber-600 font-bold"
                : "after:bg-transparent text-stone-500"
            }
            `}
            type="button"
            id={`hs-pro-tabs-dut-item-${tab}`}
            aria-selected="false"
            data-hs-tab={`#hs-pro-tabs-dut-${tab}`}
            aria-controls={`hs-pro-tabs-dut-${tab}`}
            role="tab"
          >
            {capitalize(tab)}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Tabs;
