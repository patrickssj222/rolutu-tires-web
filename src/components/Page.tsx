import React, { ReactNode } from 'react';

type PageProps = {
  children: ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <section className="h-screen bg-gray-100 flex flex-1 justify-center items-center">
      {children}
    </section>
  );
};

export default Page;