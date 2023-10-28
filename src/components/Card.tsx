import React, { ReactNode } from 'react';

type CardProps = {
  children: ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white w-96 p-8 drop-shadow-sm rounded">
      {children}
    </div>
  );
};

export default Card;