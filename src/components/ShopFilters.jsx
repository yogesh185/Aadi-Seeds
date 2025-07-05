export default function ShopFilters({
  search,
  setSearch,
  categories,
  cat,
  setCat,
  price,
  setPrice,
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white shadow-sm rounded-xl p-4 flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
        {/* Category */}
        <div className="flex-1">
          <label className="block text-xs font-semibold text-gray-600 mb-2" htmlFor="category">
            Category
          </label>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                className={`px-6 py-2 rounded-xl font-semibold border text-base transition
                  ${cat === c
                    ? "bg-green-600 text-white border-green-600 shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-green-50 hover:border-green-400"}
                `}
                onClick={() => setCat(c)}
                type="button"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        {/* Price */}
        <div className="flex flex-col md:w-56 w-full">
          <label className="block text-xs font-semibold text-gray-600 mb-1" htmlFor="price">
            Price
          </label>
          <select
            id="price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-500 transition bg-white"
          >
            <option value="All">All Prices</option>
            <option value="under250">Under ₹250</option>
            <option value="250to500">₹250 – ₹500</option>
            <option value="500to1000">₹500 – ₹1000</option>
            <option value="1000to2500">₹1000 – ₹2500</option>
            <option value="2500to5000">₹2500 – ₹5000</option>
            <option value="above5000">Above ₹5000</option>
          </select>
        </div>
        {/* Search */}
        <div className="flex flex-col md:w-72 w-full">
          <label className="block text-xs font-semibold text-gray-600 mb-1" htmlFor="search">
            Search
          </label>
          <input
            id="search"
            className="border border-gray-200 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-200 focus:border-green-500 transition"
            placeholder="Search plants..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
