import React from 'react';

interface AvatarProps {
  name: string;
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="mt-2 text-center">{name}</p>
    </div>
  );
};

export default Avatar;