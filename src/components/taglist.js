'use client';

const TagList = ({ tags, onTagClick }) => {

  return (
    <div className="flex flex-wrap justify-center items-center">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="px-3 py-1 mr-2 my-2 bg-gray-300 text-gray-700 rounded-full cursor-pointer"
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default TagList;