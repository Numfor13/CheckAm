import type React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Vendor } from "../types/vendor";

const VendorProfile: React.FC = () => {
  const { phoneNumber } = useParams<{ phoneNumber: string}>();

  const [vendor, setVendor] = useState<Vendor|null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(()=> {
    const fetchVendor = async () => {
      try {
        setLoading(true);
        setError("");

        const mockVendor: Vendor = {
          id: "1",
          name: "Numfor's surprises",
          phoneNumber: phoneNumber || "",
          category: "Business",
          averageRating: 4.2,
          reviews: [
            {
              id: "r1",
              rating: 5,
              comment: "Very reliable!",
              createdAt: "2026-02-16",
            },
            {
              id: "r2",
              rating: 3,
              comment: "Delivery was late but packaging was good.",
              createdAt: "2026-02-14",
            },
          ],
        };

        setVendor(mockVendor);
      }catch (err){
        setError("Something went wrong, please try again.");
      } finally {
        setLoading (false);
      }
    };

    fetchVendor();
  }, [phoneNumber]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (error)
    return (
     <p className="text-center text-red-500 mt-10">{error}</p>
    );

  if (!vendor)
    return (  
    <p className="text-center mt-10">
      Business not found.
    </p>
  );


  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-md mx-auto bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold text-green-600">
          {vendor.name}
        </h2>

        <p className="text-gray-600">Category: {vendor.category}
        </p>
        
        <p className="mt-2 font-semibold">
          ⭐ {vendor.averageRating} / 5
        </p>

        <hr className="my-4" />

        <h3 className="font-semibold mb-3">
          Reviews ({vendor.reviews.length})
        </h3>

        <div className="space-y-3">
          {vendor.reviews.map((review) => (
            <div
            key={review.id}
            className="border p-3 rounded bg-gray-50">
              <p className="font-medium">
                ⭐ {review.rating}
              </p>
              <p className="text-sm text-gray-700">
                {review.comment}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;