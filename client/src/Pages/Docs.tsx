import Footer from "../components/global/Footer";
import NavbarSec from "../components/global/NavbarSec";
import doc1 from "./../assets/doc1.jpeg";
import doc2 from "./../assets/doc2.png";
import doc3 from "./../assets/doc3.png";
import doc4 from "./../assets/doc4.png";
const Docs = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <NavbarSec />
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
                  Our project aims to revolutionize the educational landscape by introducing a transformative learning website that leverages technology to streamline access to educational resources and enhance learning outcomes. Through innovative deep learning techniques and advanced language models, we seek to distil complex PDF materials into concise summaries, making them more accessible and comprehensible to users.
                </div>
                <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  Central to our endeavour is the utilization of a vectorized database, which serves as the backbone for organizing and storing summarized learning content, enabling seamless navigation and exploration of vast repositories of knowledge. Through these efforts, we aspire to empower learners and shape the future of education.
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
                Whether pursuing formal education or engaging in self-directed learning, students stand to benefit significantly from our platform.
              </div>

              <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 text-sm leading-6 sm:grid-cols-2 lg:grid-cols-2">
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    <img className="w-full h-full object-cover" src={doc1} alt=""/>
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 1
                    </span>{" "}
                    – go to the application's  <a href="/playground">"Playground"</a> & start
                    exploring. This will serve as the starting point for your
                    interactive experience.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    <img className="w-full h-full object-cover" src={doc2} alt=""/>
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 2
                    </span>{" "}
                    – Users upload PDF documents to the platform, which serve as the primary source of input data. These documents contain textual information on various topics and subjects.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    <img className="w-full h-full object-cover" src={doc3} alt=""/>
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 3
                    </span>{" "}
                    – PDF documents are processed and transformed into vectorized representations using techniques such as word embeddings or document embeddings.
                  </p>
                </div>
                <div>
                  <div className="relative aspect-[3/2] object-contain overflow-hidden rounded-xl shadow-lg shadow-cyan-700/30">
                    <img className="w-full h-full object-cover" src={doc4} alt=""/>
                    <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
                  </div>
                  <p className="mt-6 text-[13px] font-inter text-tertiary-white text-left">
                    <span className="font-inter font-medium font-normnl text-primary-white text-[1.2rem] ">
                      Step 4
                    </span>{" "}
                    – The LLM generates summaries by stitching together the selected sentences from the PDF documents. These summaries represent condensed versions of the original content, providing users with concise and digestible insights.
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
                  Our reference algorithm leverages an embeddings database, known as Chroma DB, to store representations of PDF inputs. The process begins with users uploading PDF documents to the platform, which are then vectorized and stored in the Chroma DB for efficient retrieval.
                </div>

                <div className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  Upon receiving a query, the algorithm utilizes a similarity search technique, currently implemented as cosine similarity, to identify the top K most relevant sentences from the stored documents. This step aims to extract key information from the PDFs based on the user's input.
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
                    An intuitive and user-friendly interface allows users to interact with the platform, upload documents, input queries, and access summarized content
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Question-Answering System
                  </span>{" "}
                  —{" "}
                  <span>
                    Users can input queries, and the platform utilizes the identified sentences to generate accurate responses through a question-answering system.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Large Language Model (LLM) Integration
                  </span>{" "}
                  —{" "}
                  <span>
                    The selected sentences are fed into a Large Language Model (LLM), which generates coherent and concise summaries of the PDF
                    content
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    PDF Upload
                  </span>{" "}
                  —{" "}
                  <span>
                    Users upload PDF documents to the platform, which serve as the primary source of input data. These documents contain textual information on various topics and subjects
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Data Availability and Quality
                  </span>{" "}
                  —{" "}
                  <span>
                  The project assumes the availability of diverse and high-quality datasets for training and evaluating machine learning models.
                  </span>
                </p>

                <p className="text-[1.2rem] font-normal text-tertiary-white text-left">
                  <span className="font-inter font-normal text-primary-white text-[1.2rem] ">
                    Educational Purpose
                  </span>{" "}
                  —{" "}
                  <span>
                    The tool could be designed with an educational focus,
                    helping users learn on your context through hands-on
                    exploration rather than relying solely on theoretical
                    explanations.
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
