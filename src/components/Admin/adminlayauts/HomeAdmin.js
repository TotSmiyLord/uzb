import React from "react";
import { Link } from "react-router-dom";

export default function HomeAdmin() {
  return (
    <div>
      <div className="" style={{ paddingTop: "20%", paddingBottom: "20%" }}>
        <div
          style={{ zIndex: 1 }}
          className="container overflow-hidden mx-auto   fixed bg-white flex justify-center"
        >
          <div className="flex  justify-around blur-contents rounded  md:w-[500px] w-[300px]">
            <div className="md:flex justify-center m-6 text-center">
              <div>
                Spravka uchun qaysi firmani tanlaysiz
                <div className="md:flex justify-center mt-4">
                  <Link to="/yangiobod" className="px-4    ">
                    <div
                      className={`px-4 py-2 text-white font-semibold rounded bg-blue-700 
                `}
                    >
                      Yangiobod Vostok Turizm
                    </div>
                  </Link>
                  <br />
                  <Link to="/angren" className="px-4 ">
                    <div
                      className={`px-4 py-2 text-white font-semibold rounded bg-blue-700 
                `}
                    >
                      Angren Etyud Sharq
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
