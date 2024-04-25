import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { addFileStore } from "../../store/features/fileStoreSlice";
import { UserContext } from './../../context/userContext';
import { appendToConversation } from "../../store/features/sessionSlice";


const host = "http://localhost:8000"

const Textbox = () => {
  const context = useContext(UserContext);
  const { queryExecution, saveSession } = context!;
  const [menuOption, setMenuOption] = useState<number>(0);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [content, setContent] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user);
  const session = useAppSelector((state) => state.session);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
      console.log("Selected files:", selectedFiles);
    }
  };

  const fileStore = useAppSelector(state => state.fileStore);

  useEffect(() => {
    if (session.session_id !== "")
      saveSession(session.session_id, session.userid, session.time_started, session.title, session.conversation, session.deleted);
  }, [session])


  useEffect(() => {
    if (selectedFiles) {
      const newFiles = new Set(selectedFiles.map((file) => file.name));
      dispatch(addFileStore({ files: [...newFiles] }));
    } else {
      console.log("No files selected");
    }
  }, [selectedFiles]);


  const handleFileUpload = async (files: File[]) => {
    try {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i]);
      }

      formData.append('userId', users.userid.toString());
      formData.append('lastModified', new Date().toISOString())

      const response = await fetch(`${host}/uploadFile`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Files uploaded successfully");
        const content = await response.text();
        setContent(content);
      } else {
        console.error("Failed to upload files");
      }
    }
    catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }
  const handleQuery = async () => {
    setLoading(true);
    dispatch(appendToConversation("--U-" + query));
    // await saveSession(session.session_id, session.userid, session.time_started, session.title, session.conversation, session.deleted);
    setQuery("");
    let res: any = await queryExecution(query, fileStore.files);
    if(res.sucess === false) {
      dispatch(appendToConversation("[ server error ]"));
      setLoading(false);
    }
    if (res && res.flaskData.message) {
      dispatch(appendToConversation(res.flaskData.message));
    } else {
      dispatch(appendToConversation("[ server error ]"));
    }
    // await saveSession(session.session_id, session.userid, session.time_started, session.title, session.conversation, session.deleted);
    setLoading(false);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleQuery();
    }
  };


  return (
    <div className="my-[5rem] flex justify-center items-center gap-8 w-full h-fit">
      <div className="w-[90%] h-fit flex flex-col justify-start items-center z-5 ">
        <div className="w-full h-full flex gap-4 justify-between items-start mb-12">
          <div className="w-[180rem] h-full flex flex-col justify-start items-start">
            <div className="border border-textbox-border border-1 rounded-[1rem] w-full 2xl:h-[55rem] h-[50rem] bg-tertiary-background z-0 mb-6 flex flex-col justify-between items-start ">
              <div className="z-20 w-full h-full my-2 flex flex-col justify-end items-end overflow-y-auto">
                {session.conversation.map((message, index) => (
                  <div key={index} className={`${message.substring(0,4) == "--U-" ? "text-gray-300/80 w-full h-fit flex justify-start items-start" : "bg-tertiary-background-dark/20 text-gray-300/80 w-full h-fit flex justify-start items-start"}`}>
                    <div className={`w-[3rem] h-[3rem] ${message.substring(0,4) !== "--U-" && "bg-orange-400"} mx-4 my-4 rounded-md flex items-center justify-center overflow-hidden`}>
                      {message.substring(0,4) == "--U-" ?
                        <img className="object-contain " src={users.img ? users.img : "https://avatars.githubusercontent.com/u/98532264?s=400&u=0cf330740554169402dccc6d6925c21d8850cf03&v=4"} alt="" />
                        :
                        <svg viewBox="0 0 24 24" width="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      }
                    </div>
                    <p className="w-full h-fit px-3 py-3 font-natosans font-medium">
                      {message.substring(0,4) == "--U-" ? message.substring(4) : message}
                    </p>
                  </div>
                ))}
                {loading && 
                  <div className="bg-tertiary-background-dark/20 text-gray-300/80 w-full h-fit flex justify-start items-start">
                    <div className={`w-[3rem] h-[3rem] bg-orange-400 mx-4 my-4 rounded-md flex items-center justify-center`}>
                      <svg viewBox="0 0 24 24" width="25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                    <p className="w-full h-fit px-3 py-3 font-natosans font-medium">
                      <div className="relative mt-2">
                        <span className="absolute animate-ping inline-flex rounded-full h-3 w-3 bg-white"></span>
                        <span className="absolute inline-flex rounded-full h-3 w-3 bg-tertiary-white"></span>
                      </div>
                    </p>
                  </div>
                }
              </div>
              <div className=" px-2 w-full h-[3.5rem] my-2">
                <div className="w-full  h-[3.5rem] border border-textbox-border border-1 rounded-[10px] flex justify-between items-center px-2 bg-textbox-background/10">
                  <div className="w-full  h-[3.5rem] px-2 overflow-y-auto">
                    <input
                      type="text"
                      className="w-full  h-[3.5rem] px-1 bg-transparent outline-none text-primary-white text-[1.1rem] placeholder:opacity-60"
                      placeholder="Hey! This is good!!"
                      id="query"
                      value={query}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                  </div>
                  <button className={`bg-white disabled rounded-lg w-[2.5rem] h-[2.5rem] ${loading && "opacity-20"} flex justify-center items-center text-black`} onClick={handleQuery}>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[2rem] text-black"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.00003 14.9968C5.41424 14.9968 5.75003 15.3326 5.75003 15.7468V18C5.75003 18.1381 5.86196 18.25 6.00003 18.25H18C18.1381 18.25 18.25 18.1381 18.25 18V15.7468C18.25 15.3326 18.5858 14.9968 19 14.9968C19.4142 14.9968 19.75 15.3326 19.75 15.7468V18C19.75 18.9665 18.9665 19.75 18 19.75H6.00003C5.03353 19.75 4.25003 18.9665 4.25003 18V15.7468C4.25003 15.3326 4.58582 14.9968 5.00003 14.9968Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.2023 5.58088C12.6165 5.58088 12.9523 5.91667 12.9523 6.33088V14.4165C12.9523 14.8307 12.6165 15.1665 12.2023 15.1665C11.7881 15.1665 11.4523 14.8307 11.4523 14.4165V6.33088C11.4523 5.91667 11.7881 5.58088 12.2023 5.58088Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M11.678 4.46356C11.9694 4.17885 12.4348 4.17885 12.7262 4.46356L16.0701 7.73038C16.3663 8.01984 16.3719 8.49468 16.0824 8.79097C15.7929 9.08725 15.3181 9.09278 15.0218 8.80332L12.2021 6.04855L9.38239 8.80332C9.08611 9.09278 8.61127 9.08725 8.32181 8.79097C8.03234 8.49468 8.03787 8.01984 8.33416 7.73038L11.678 4.46356Z"
                          fill="currentColor"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-textbox-border border-1 rounded-[1rem]  w-[90rem] 2xl:h-[55rem] h-[50rem] bg-tertiary-background z-0 mb-6 flex flex-col justify-between items-start">
            {menuOption === 0 ? (
              <div className="w-full h-full flex flex-col justify-start items-start gap-3 px-3 pt-3">
                <div className="bg-textbox-border text-primary-white flex justify-start items-center w-fit h-[2.5rem] py-1 px-3 rounded-[1rem] gap-2">
                  <p className="font-natosans font-bold text-[1.25rem]">
                    UPLOAD YOUR CONTENT
                  </p>
                </div>
                <div className="w-full h-fit flex flex-col justify-center items-center">
                  {/* for uploading file */}
                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <button
                    className="w-full border border-white border-dashed border-1 rounded-[10px] h-[13rem] flex justify-center items-center"
                    onClick={() =>
                      document.getElementById("fileInput")?.click()
                    }
                  >
                    <svg
                      width="50"
                      height="53"
                      viewBox="0 0 50 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="25" cy="28" r="25" fill="#EDEDED" />
                      <path
                        d="M23.604 38.076H27.564V30.408H34.836V26.664H27.564V18.996H23.604V26.664H16.368V30.408H23.604V38.076Z"
                        fill="#454545"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-primary-button-background flex justify-center items-center gap-[0.5rem] h-[2.7  rem] px-[1.5rem] w-[16rem] py-1 rounded-[0.9rem] mt-5"
                    onClick={() => handleFileUpload(selectedFiles)}
                  >
                    <p className="text-black text-[1.5rem] font-natosans font-semibold ">
                      Upload File
                    </p>
                  </button>
                </div>
                <div className="w-full h-full z-0 mb-6 mt-2 flex flex-col justify-between items-start px-2">
                  <div className="w-full h-[31rem] my-2 flex flex-col justify-start items-start overflow-y-auto gap-3">
                    {selectedFiles &&
                      selectedFiles.map((file: File, index: number) => (
                        <div className="w-full h-fit flex justify-between items-center px-2">
                          <div className="w-fit h-fit flex justify-end items-center gap-3">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="Group 2">
                                <circle
                                  id="Ellipse 2"
                                  cx="6"
                                  cy="6"
                                  r="6"
                                  fill="#CFCFCF"
                                />
                              </g>
                            </svg>
                            <p className="text-primary-white font-natosans">
                              {file.name.length > 8
                                ? `${file.name.substring(0, 8)}...`
                                : file.name}
                            </p>
                          </div>
                          <div className="w-fit h-fit flex justify-start items-center gap-8">
                            <p className="text-primary-white opacity-50 font-natosans">
                              {file.type}
                            </p>
                            <p className="text-primary-white font-natosans">
                              {file.size} KiB
                            </p>
                            <div className="bg-[#2EBDBD] rounded-[2px] w-[5.6rem] h-[2rem] flex justify-center items-center">
                              <p className="font-extrabold text-black">READY</p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col justify-start items-start gap-3 px-3 pt-3">
                <div className="bg-textbox-border text-primary-white flex justify-start items-center w-[7rem] h-[2.5rem] py-1 px-3 rounded-[1rem] gap-2">
                  <p className="font-natosans font-bold text-[1.25rem]">CHAT</p>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textbox;
