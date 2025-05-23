import frameworkData from "./framework.json";

export default function FrameworkList() {
  const tagColor = "bg-blue-200 text-blue-800";

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      {frameworkData.map((item) => (
        <div
          key={item.id}
          className="border border-blue-300 p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-blue-800">{item.name}</h2>
          <p className="text-blue-700">{item.description}</p>
          <p className="text-blue-700">
            Developed by: <strong className="text-blue-900">{item.details.developer}</strong>
          </p>
          <p className="text-blue-600 underline">
            <a href={item.details.officialWebsite} target="_blank">visit website</a>
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