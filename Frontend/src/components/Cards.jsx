import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 h-[400px] bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">

          
          {/* FIXED IMAGE HEIGHT */}
          <figure className="h-[200px] w-full overflow-hidden">
  <img
    src={item.image}
    alt="book"
    className="h-full w-full object-cover"
  />
</figure>



          <div className="card-body">

            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>

            {/* FIXED DESCRIPTION HEIGHT */}
            <p className="h-[80px] overflow-y-auto pr-1">
  {item.title}
</p>


            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <a href={item.bookLink}
               //target="_blank" 
               rel="noopener noreferrer"
               className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Read Now
                </a>
                </div>
                </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
