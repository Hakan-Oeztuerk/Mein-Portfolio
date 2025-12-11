import React from "react";
import * as Icons from "lucide-react";
import skills from "../data/MeinProfil.json";

export default function SkillsPremium() {
  const renderSection = (title, items) => (
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white mt-12 ml-40 mr-40">
        {title}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ml-40 mr-40 gap-4">
        {items.map((item, index) => {
          const Icon = Icons[item.icon];
          return (
            <div
              key={index}
              className="p-4 border border-cyan-400 rounded-xl hover:border-white 
                         hover:scale-105 transition cursor-default space-y-2"
            >
              <div className="flex items-center gap-3">
                <Icon size={26} className="text-cyan-400" />
                <p className="text-white text-sm font-semibold">{item.name}</p>
              </div>

              {item.description && (
                <p className="text-gray-300 text-xs leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <div className="text-white space-y-16">
      {renderSection("Core Skills", skills.coreSkills)}
      {renderSection("Tools I Use Daily", skills.toolsDaily)}
      {renderSection("Currently Learning", skills.currentlyLearning)}
    </div>
  );
}
