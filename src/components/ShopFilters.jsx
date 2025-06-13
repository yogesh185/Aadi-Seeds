export default function ShopFilters({ search, setSearch, categories, cat, setCat }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <input
        className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/3"
        placeholder="Search plants..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex gap-2 flex-wrap">
        {categories.map(c => (
          <button
            key={c}
            className={`px-3 py-1 rounded ${cat === c ? "bg-primary-600 text-white" : "bg-gray-100 text-gray-700"}`}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
