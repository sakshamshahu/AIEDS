import Footer from "../components/global/Footer";
import NavbarSec from "../components/global/NavbarSec";

const Docs = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <NavbarSec/>
      <div className=" text-secondary-white bg-primary-background py-10 flex flex-col justify-center items-center w-[80vw]">
        <div className="absolute left-[-30vh] top-[20vh] w-[17rem] h-[35rem] transform -rotate-98.5 flex-shrink-0 sphere1 opacity-10 animate-pulse-slow"></div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-primary-white font-Roboto font-semibold text-[56px] titletextbackground">
            Documentation
          </h1>
          <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
            Know our project further with the diverse documentation over various
            aspects
          </div>
        </div>

        {/* <div className="gap-[1rem] contextboxbackground rounded-[1.5rem] w-[90%] border-[0.06px] border-gray-100 py-[0.8rem] bg-opacity-10 border-opacity-30"> */}
        <div className="flex justify-center items-center mt-14">
          <section className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 xl:grid-cols-4">
            <div className="w-fit font-plusjakarta font-bold text-primary-white text-[1.8rem]">
              Start Looking into it!
            </div>
            <div className="col-span-3">
              <div className="max-w-[54rem] text-lg leading-8 text-slate-600">
                <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  Graphpathguru is a user-friendly application meticulously
                  crafted to offer individuals an accessible platform for
                  in-depth exploration and understanding of algorithmic
                  operations, all presented in a visually intuitive manner. The
                  platform boasts a diverse array of algorithms, providing users
                  with the flexibility to choose and engage with various
                  computational processes.
                </div>
                <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  Additionally, Graphpathguru includes a host of convenient
                  features, including the ability to save generated graphs for
                  future reference and a streamlined sharing function for
                  uniform graph distribution. This comprehensive tool aims to
                  empower users with a seamless and enriching experience in
                  algorithmic analysis, combining ease of use with robust
                  functionality.
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <div
        className="absolute inset-x-0 top-[10vh] -z-10 transform-gpu overflow-hidden blur-3xl "
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div> */}

        <div className="divide-y divide-slate-700/10 border-t border-slate-700/10 flex justify-center items-center">
          <section
            id="start"
            className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4 max-w-[80%] justify-center  "
          >
            <div className="w-fit font-plusjakarta font-bold text-primary-white text-[1.8rem]">
              How to Start?
            </div>
            <div className="col-span-3">
              <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
                Graphpathguru is a application focused on making graph
                algorithms more accessible and understandable for users. By
                providing a visually intuitive platform, users can explore and
                comprehend the operations of various algorithms.
              </div>

              <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    {/* <img className="w-full h-full object-cover" src={} alt=""/> */}
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 1
                    </span>{" "}
                    – Launch the application in the "Playground" state to start
                    exploring. This will serve as the starting point for your
                    interactive experience.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    {/* <img className="w-full h-full object-cover" src={} alt=""/> */}
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 2
                    </span>{" "}
                    – Launch the application in the "Playground" state to start
                    exploring. This will serve as the starting point for your
                    interactive experience.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    {/* <img className="w-full h-full object-cover" src={} alt=""/> */}
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 3
                    </span>{" "}
                    – Launch the application in the "Playground" state to start
                    exploring. This will serve as the starting point for your
                    interactive experience.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    {/* <img className="w-full h-full object-cover" src={} alt=""/> */}
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 4
                    </span>{" "}
                    – Launch the application in the "Playground" state to start
                    exploring. This will serve as the starting point for your
                    interactive experience.
                  </p>
                </div>
              </div>
              {/* <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-y-10">
              <div>
                <p className="text-base leading-7 text-slate-700">
                  <strong className="font-semibold text-slate-900">
                    Universal Sharing
                  </strong>{" "}
                  —{" "}
                  <span>
                    Every graph created comes with a shareable link, enabling
                    users to effortlessly share their work universally with
                    others.
                  </span>
                </p>
              </div>
              <div>
                <p className="text-base leading-7 text-slate-700">
                  <strong className="font-semibold text-slate-900">
                    Lively Graph Visualization
                  </strong>{" "}
                  —{" "}
                  <span>
                    Graphs come to life with vibrant visualizations, enhancing
                    the overall user experience by making the application not
                    just functional but also enjoyable and dynamic.
                  </span>
                </p>
              </div>
            </div> */}
            </div>
          </section>
        </div>

        <div className="divide-y divide-slate-700/10 border-t border-slate-700/10 flex justify-center items-center">
          <section
            id="start"
            className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4 max-w-[80%] justify-center  "
          >
            <div className="w-fit font-plusjakarta font-bold text-primary-white text-[1.8rem]">
              Overview
            </div>
            <div className="col-span-3">
              <div className=" text-lg leading-8 text-slate-600">
                <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  Graphpathguru is a user-friendly application meticulously
                  crafted to offer individuals an accessible platform for
                  in-depth exploration and understanding of algorithmic
                  operations, all presented in a visually intuitive manner. The
                  platform boasts a diverse array of algorithms, providing users
                  with the flexibility to choose and engage with various
                  computational processes.
                </div>

                <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  Additionally, Graphpathguru includes a host of convenient
                  features, including the ability to save generated graphs for
                  future reference and a streamlined sharing function for
                  uniform graph distribution. This comprehensive tool aims to
                  empower users with a seamless and enriching experience in
                  algorithmic analysis, combining ease of use with robust
                  functionality.
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="divide-y divide-slate-700/10 border-t border-slate-700/10 flex justify-center items-center mt-9">
          <section
            id="start"
            className="grid grid-cols-1 gap-x-8 gap-y-6 pb-20 pt-10 xl:grid-cols-4 max-w-[80%] justify-center  "
          >
            <div className="w-fit font-plusjakarta font-bold text-primary-white text-[1.8rem]">
              Features
            </div>
            <div className="col-span-3">
              <div className=" grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-y-10">
                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    User-Friendly Interface
                  </span>{" "}
                  —{" "}
                  <span>
                    The application likely has a user-friendly interface that
                    makes it easy for users, even those without a deep
                    understanding of graph algorithms, to navigate and interact
                    with the tool.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Algorithm Variety
                  </span>{" "}
                  —{" "}
                  <span>
                    Graphpathguru offers a range of graph algorithms for users
                    to choose from. This could include well-known algorithms
                    like Dijkstra's algorithm, breadth-first search, depth-first
                    search, and more.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Visualization
                  </span>{" "}
                  —{" "}
                  <span>
                    The tool likely provides graphical representations of graphs
                    and the outcomes of algorithms. Visualizations can help
                    users better understand how algorithms traverse and
                    manipulate graph structures.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Options for Saving Graphs
                  </span>{" "}
                  —{" "}
                  <span>
                    Users may have the ability to save the graphs they create or
                    the results of algorithm executions. This feature is
                    valuable for future reference or for sharing with others.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Sharing Functionality
                  </span>{" "}
                  —{" "}
                  <span>
                    Graphpath guru might have options for users to easily share
                    their graphs or algorithm results with others. This could
                    involve generating shareable links or exporting files in
                    common formats.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Educational Purpose
                  </span>{" "}
                  —{" "}
                  <span>
                    The tool could be designed with an educational focus,
                    helping users learn about graph algorithms through hands-on
                    exploration rather than relying solely on theoretical
                    explanations.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Algorithm Parameters
                  </span>{" "}
                  —{" "}
                  <span>
                    Users may have the ability to adjust parameters for each
                    algorithm, allowing them to see how changes impact the
                    algorithm's behavior and results.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Real-Time Updates
                  </span>{" "}
                  —{" "}
                  <span>
                    As users interact with the application, they may see
                    real-time updates to the graph and algorithm outcomes,
                    providing instant feedback.
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="absolute right-[-30vh] top-[20vh] w-[17rem] h-[35rem] transform -rotate-98.5 flex-shrink-0 sphere1 opacity-10 animate-pulse-slow"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
