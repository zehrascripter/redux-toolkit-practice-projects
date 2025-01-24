import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
  const params = useParams();
  const id = Number(params.id);

  // State for the product
  const [product, setProduct] = useState(null);

  // State for comments
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Fetch product details
  const fetchProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      const requiredProduct = data.find((product) => product.id === id);
      setProduct(requiredProduct);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    setComments((prevComments) => [...prevComments, newComment]);
    setNewComment('');
  };

  // Render loading state
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Product Details */}
        <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain mt-4 rounded-lg"
          />
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-xl font-bold text-orange-500 mt-4">${product.price}</p>
          <div className="flex items-center mt-4">
            <span className="text-yellow-500 font-medium text-lg">
              {product.rating.rate} / 5
            </span>
            <span className="ml-2 text-gray-500 text-sm">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-10 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>

          {/* Comment Input */}
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleAddComment}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Post
            </button>
          </div>

          {/* Comment List */}
          <div>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg mb-2 border border-gray-200"
                >
                  {comment}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
