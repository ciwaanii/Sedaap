import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const tagColor = "bg-gray-200 text-black-800";

  // Ambil semua tag unik dari data
  const allTags = [...new Set(frameworkData.flatMap((fw) => fw.tags))];

  // Filter data berdasarkan pencarian dan tag
  const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Input Search */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Dropdown Tag */}
      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

    

      {/* Render hasil filter */}
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border border-gray-300 p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-700">{item.description}</p>
          <p className="text-gray-700">
            Developed by:{" "}
            <strong className="text-gray-900">
              {item.details.developer}
            </strong>
          </p>
          <p className="text-blue-600 underline">
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noreferrer"
            >
              Visit website
            </a>
          </p>

          {item.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-full mr-2 mb-2 ${tagColor}`}
            >
              {tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}