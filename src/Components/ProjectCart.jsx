

const ProjectCart = () => {
  return (
    <div>
        <h2 className='text-2xl md:text-4xl font-semibold text-center mb-10'>My Project</h2>
        <div className="flex flex-col md:flex-row gap-5">
           <div className="card bg-zinc-900 w-96 shadow-xl">
             <figure>
               <img
                 className="h-[220px]"
                 src="https://i.ibb.co/h2MxfMT/YumHub.jpg"
                 alt="YumHub"
               />
             </figure>
             <div className="card-body text-white">
               <h2 className="card-title text-2xl">YumHub</h2>
               <p>YumHub is a food bar website. I added a user authentication system using Firebase. Users can add food items and manage their added food, including deleting and updating them. Also users can request food and manage their requested food. The client side is built using React, and the server side is built using Express.js and MongoDB.</p>
               <div className="card-actions justify-end">
                  <a href="https://yumhub-c06d7.web.app/" className='btn bg-yellow-700 text-white flex items-center gap-1'> Visit Here</a>
               </div>
             </div>
           </div> 

           <div className="card bg-zinc-900 w-96 shadow-xl">
             <figure>
               <img
                 className="h-[220px]"
                 src="https://i.ibb.co/7KT3zG6/EcoTimes.jpg"
                 alt="EcoTimes"
               />
             </figure>
             <div className="card-body text-white">
               <h2 className="card-title text-2xl">Eco times</h2>
               <p>Eco Times is an article-based website. I added a user authentication system using Firebase. I also implemented a subscription system using Stripe.js. Users can add articles and manage their own articles. Premium users can explore premium content, but normal users cannot. Admins can manage all articles and users. The client side is built using React, and the server side is built using Express.js and MongoDB.</p>
               <div className="card-actions justify-end">
                  <a href="https://eco-times.web.app/" className='btn bg-yellow-700 text-white flex items-center gap-1'> Visit Here</a>
               </div>
             </div>
           </div> 

           <div className="card bg-zinc-900 w-96 shadow-xl">
             <figure>
               <img
                 className="h-[220px]"
                 src="https://i.ibb.co/SBwJNGw/Art-And-Craft.jpg"
                 alt="ArtAndCraft"
               />
             </figure>
             <div className="card-body text-white">
               <h2 className="card-title text-2xl">Art and Craft</h2>
               <p>Art and Craft is a craft related website. I added a user authentication system using Firebase. Users can add craft items and manage their added craft, including deleting and updating them.And users can see all craft and category wise craft. The client side is built using React, and the server side is built using Express.js and MongoDB.</p>
               <div className="card-actions justify-end">
                  <a href="https://sparkling-dolphin-403728.netlify.app/" className='btn bg-yellow-700 text-white flex items-center gap-1'> Visit Here</a>
               </div>
             </div>
           </div> 
         </div>
    </div>
  );
};

export default ProjectCart;

