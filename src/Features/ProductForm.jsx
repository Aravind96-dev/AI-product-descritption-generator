function ProductForm() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md">
  
        <h2 className="text-2xl font-bold mb-6">
          Product Information
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Name
            </label>
  
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
  
          {/* Brand */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Brand
            </label>
  
            <input
              type="text"
              placeholder="Enter brand name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
  
          {/* Category */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Category
            </label>
  
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            >
              <option>Fashion</option>
              <option>Electronics</option>
              <option>Beauty</option>
              <option>Home</option>
              <option>Fitness</option>
            </select>
          </div>
  
          {/* Target Audience */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Target Audience
            </label>
  
            <input
              type="text"
              placeholder="Men, Women, Kids..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>
  
        </div>
  
        {/* Features */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">
            Key Features
          </label>
  
          <textarea
            rows="4"
            placeholder="Enter product features..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>
  
        {/* Tone */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">
            Description Tone
          </label>
  
          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          >
            <option>Professional</option>
            <option>Luxury</option>
            <option>Friendly</option>
            <option>Minimal</option>
            <option>Marketing</option>
          </select>
        </div>
  
        {/* Button */}
        <button
          className="mt-6 w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Generate Description
        </button>
  
      </div>
    );
  }
  
  export default ProductForm;