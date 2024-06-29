import React from 'react';

interface AvatarProps {
  name: string;
  imageUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="w-[90%] aspect-square rounded-full overflow-hidden border-4 border-gray-300 px-10">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="mt-4 text-center text-3xl">{name}</p>
    </div>
  );
};

export default Avatar;