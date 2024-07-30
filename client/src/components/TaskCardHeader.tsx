import React from "react";
import { X, Share2, Star, Maximize2 } from "lucide-react";

export const TaskCardHeader = ({ onClose }: any) => {
  return (
    <div className="flex justify-between items-center border-gray-200 bg-white">
      <div className="flex space-x-3">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <button
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Share"
        >
          <Maximize2 size={20} />
        </button>
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
          <Share2 size={20} />
          <span className="ml-2">Share</span>
        </button>
        <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center justify-center">
          <Star size={20} />
          <span className="ml-2">Favorite</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCardHeader;
