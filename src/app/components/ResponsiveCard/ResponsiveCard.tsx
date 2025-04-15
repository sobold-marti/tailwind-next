// ResponsiveCard.tsx
import React from 'react';

const ResponsiveCard = () => {
  return (
    <>
        <div className="container mx-auto p-regular">
            <div className="@container">
                <p className="@[1200px]:text-4xl pb-regular">🥳 This text grows when container > 1200px</p>
            </div>
            <div>
                <p className="@[400px]:text-xl">👎 Won't grow even if container is large</p>
            </div>
        </div>
    </>
  );
};

export default ResponsiveCard;
