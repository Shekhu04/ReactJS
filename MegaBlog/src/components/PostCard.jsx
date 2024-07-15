import React from 'react'; // Import React library
import appwriteService from "../appwrite/config"; // Import appwriteService for fetching file previews
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom for navigation

/**
 * PostCard component definition.
 * It takes props such as $id (post ID), title (post title), and featuredImage (image ID or URL).
 */
function PostCard({ $id, title, featuredImage }) {
  return (
    // Link component to navigate to the post's page when the card is clicked
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'> {/* Card container with styling */}
            <div className='w-full justify-center mb-4'> {/* Container for the image with styling */}
                {/* Image element with src fetched using appwriteService and alt text set to the post title */}
                <img 
                    src={appwriteService.getFilePreview(featuredImage)} 
                    alt={title}
                    className='rounded-xl' // Styling for rounded corners
                />
            </div>
            {/* Title element with styling */}
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  );
}

// Export the PostCard component as the default export of the module
export default PostCard;
