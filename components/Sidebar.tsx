"use client";

import { LearningModule, LearningSection } from "@/types/learning";

interface SidebarProps {
  modules: LearningModule[];
  activeModuleId: string;
  onSelectModule: (id: string) => void;
}

const SECTION_ORDER: LearningSection[] = [
  "Glucose Metabolism",
  "Redox Protection",
  "Hormonal Regulation",
];

export default function Sidebar({ modules, activeModuleId, onSelectModule }: SidebarProps) {
  const grouped = SECTION_ORDER.map((section) => ({
    section,
    modules: modules.filter((m) => m.section === section),
  }));

  return (
    <nav className="hidden md:flex w-56 flex-shrink-0 bg-white border-r border-gray-200 flex-col overflow-y-auto">
      <div className="px-4 pt-4 pb-3 border-b border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          Metabolism Catalogue
        </p>
      </div>

      <div className="flex-1 py-3">
        {grouped.map(({ section, modules: sectionModules }) => (
          <div key={section} className="mb-4">
            <p className="px-4 pb-1 text-xs font-medium text-gray-400 uppercase tracking-wider">
              {section}
            </p>
            {sectionModules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => onSelectModule(mod.id)}
                className={`w-full text-left px-4 py-2 text-sm leading-snug transition-colors cursor-pointer ${
                  mod.id === activeModuleId
                    ? "bg-blue-50 text-blue-800 font-medium border-r-2 border-blue-500"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {mod.title}
              </button>
            ))}
          </div>
        ))}
      </div>
    </nav>
  );
}
