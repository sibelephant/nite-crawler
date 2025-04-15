

export const Herobottom = () => {

        // Desktop images (6 images)
  const desktopImages = [
    '/concertwithraisedhands.jpeg', // Concert with raised hand
    '/dinnerwithredbooths.jpeg', // Diner with red booths
    '/purplelights.jpeg', // Concert with purple lights
    '/lights.jpeg', // Carousel with lights
    '/friendscolorful.jpeg', // Friends with colorful wall
    '/concerthands.jpeg', // Concert with audience
  ];
  
  // Mobile images (3 images)
  const mobileImages = [
    '/concertwithraisedhands.jpeg', // Concert with raised hand
    '/dinnerwithredbooths.jpeg', // Diner with red booths
    '/concerthands.jpeg', // Concert with purple lights
  ];


  return (
    <div className="container mx-auto p-4  bg-[#eeeefc]  md:bg-inherit mt-[25px]">
      {/* Mobile layout - shows only on small screens */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-4">
          {mobileImages.map((image, index) => (
            <div 
              key={`mobile-${index}`} 
              className="overflow-hidden rounded-lg shadow-lg w-[360px] h-[162px]"
              style ={{animationDelay :`${index * 200}ms`}}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-[360px ] h-fit   object-fit"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Desktop layout - hidden on small screens */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {desktopImages.map((image, index) => (
            <div 
              key={`desktop-${index}`} 
              className="overflow-hidden rounded-lg shadow-lg animate-slideUp transition-all duration-300 ease-in-expo"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover  ransition-transform duration-500 ease-out-expo hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
