import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      x: -100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full font-urbanist">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
        {/* Left side image and stats */}
        <motion.div 
          className="md:w-1/2 relative mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-80 md:h-full rounded-lg overflow-hidden relative" 
               style={{
                 backgroundImage: "url('/kanyeesq.jpeg')",
                 backgroundSize: "cover",
                 backgroundPosition: "center"
               }}>
            <motion.div 
              className="absolute bottom-8 right-4 bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">10x Sales Growth</p>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold">$84573</div>
              <div className="text-green-500 text-sm font-medium">+15.6% <span className="inline-block transform rotate-45">↑</span></div>
              <div className="text-gray-500 text-xs">Compared to ($3400 last year)</div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right side content */}
        <div className="md:w-1/2 md:pl-8">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              With Our Customer's There Is Never a <span className="text-blue-500">
                <span className="inline-block mx-1">✦</span> Dull Moment
              </span>
            </h2>
          </motion.div>
          
          {/* Features list */}
          <motion.div 
            className="space-y-6 md:space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Feature 1 */}
            <motion.div 
              className="border border-red-100 rounded-lg p-4 flex items-start"
              variants={featureVariants}
            >
              <div className="mr-4 bg-blue-100 rounded-full p-2 ">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Navigate With Ease</h3>
                <p className="text-gray-700">
                  With NiteCrawlers you can view the interest, reviews and attendance of like-minded people.
                </p>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="border border-red-100 rounded-lg p-4 flex items-start"
              variants={featureVariants}
            >
              <div className="mr-4 bg-blue-100 rounded-full p-2 ">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Never Miss Trendy Spots</h3>
                <p className="text-gray-700">
                  "KNOW WHAT'S HAPPENING INSIDE" Customers can click to attend, add events and specials to their calendar, view pictures and promo flyers all in one place in real time
                </p>
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="border border-red-100 rounded-lg p-4 flex items-start"
              variants={featureVariants}
            >
              <div className="mr-4 bg-blue-100 rounded-full p-2  ">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                
                <h3 className="font-bold text-lg">Filter System</h3>
                <p className="text-gray-700">
                  Whether you're a food truck fanatic, a food connoisseur, looking for a great party, or attending local events NiteCrawlers allows you to filter by category, time, radius, rating, age, ect. Get into exactly what you like.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;