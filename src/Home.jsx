import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State untuk nilai pencarian

  const fetchArticles = async () => {
    try {
      const response = await fetch("https://dev.to/api/articles");

      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();
      setArticles(data);
      setFilteredArticles(data); // Menyimpan artikel yang diambil ke filteredArticles
      setLoading(false);
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Fungsi untuk menangani pencarian
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query === "") {
      setFilteredArticles(articles); // Jika tidak ada pencarian, tampilkan semua artikel
    } else {
      const filtered = articles.filter((article) =>
        article.title.toLowerCase().includes(query)
      );
      setFilteredArticles(filtered); // Menampilkan artikel yang sesuai dengan pencarian
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Blog Articles
      </h1>

      {/* Form Pencarian */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for an article..."
          className="p-3 w-full sm:w-1/2 lg:w-1/3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
      </div>

      {/* Grid of Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredArticles.map((article) => (
          <Link to={`/blog/${article.id}`} key={article.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img
                src={article.social_image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {article.description || "No description available"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
