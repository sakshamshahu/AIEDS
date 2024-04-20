import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarSec from "../components/global/NavbarSec";
import Footer from "../components/global/Footer";
import { useAppSelector } from "../store/store";
import { getAuth, updatePassword } from "firebase/auth";
// import { Cloudinary } from "cloudinary-core";

const host = "http://localhost:8000";

const Settings = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [refillNewPassword, setRefillNewPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [username, setUsername] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const users = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;

  // for changing the password
  const handleChangePassword = () => {
    if (user) {
      updatePassword(user, newPassword)
        .then(() => {
          console.log("Password changed successfully!");
          setNewPassword("");
          setRefillNewPassword("");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error changing password:", error);
        });
    }
  };

  // for form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // change username and image
    if(username != users.name || imageUrl != users.img)
    {
        changeDetails();
    }

    // change password
    if (newPassword !== refillNewPassword) {
      setPasswordsMatch(false);
      return;
    }
    setPasswordsMatch(true);
    console.log("New Password:", newPassword);
    handleChangePassword();
  };

  // when clicked cancel
  const handleCancel = () => {
    navigate("/");
  };

  useEffect(() => {
    console.table(users);
    if (users.userid === "") navigate("/login");
  }, [users, navigate]);

  // for change the userdetails
  const changeDetails = () => {
    fetch(`${host}/changeUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        imageUrl: imageUrl,
        userId: users.userid
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Username changed successfully!", data);
      })
      .catch((error) => {
        console.error("Error changing username:", error);
      });
  };

  // for uploading the image to cloudinary
  const handleImageUpload = () => {
    // const cloudinary = Cloudinary.new({ cloud_name: 'YOUR_CLOUD_NAME' });
    // const widget = cloudinary.createUploadWidget(
    //   {
    //     cloudName: 'YOUR_CLOUD_NAME',
    //     uploadPreset: 'YOUR_UPLOAD_PRESET'
    //   },
    //   (error, result) => {
    //     if (!error && result && result.event === "success") {
    //       setImageUrl(result.info.secure_url);
    //     }
    //   }
    // );
    // widget.open();

    setImageUrl("");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <NavbarSec />
      <div className="isolate w-[50vw] px-6 py-14">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-primary-white font-Roboto font-semibold text-[40px] titletextbackground">
            Settings
          </h1>
          <div className="text-[16px] font-normal text-tertiary-white">
            This information will be displayed publicly so be careful what you
            share.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-16">
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b w-[100vh] border-gray-900/10 pb-12">
                <h2 className="text-base text-center font-semibold leading-7 text-primary-white">
                  Profile
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600"></p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label
                      htmlFor="name"
                      className="block text-sm text-center font-medium leading-6 text-primary-white"
                    >
                      Username
                    </label>
                    <div className="mt-2 flex justify-center">
                      <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="name"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1  placeholder:text-gray-400  sm:text-sm sm:leading-6 outline-none text-primary-white"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="photo"
                      className="block text-sm text-center font-medium leading-6 text-primary-white"
                    >
                      Photo
                    </label>
                    <div className="mt-2 flex items-center justify-center gap-x-8">
                      <div className="overflow-hidden rounded-full">
                        <img
                          src="https://avatars.githubusercontent.com/u/98532264?s=400&u=0cf330740554169402dccc6d6925c21d8850cf03&v=4"
                          className="w-[5rem] "
                          alt="pfpd"
                        />
                      </div>
                      <button
                        id="upload_widget"
                        type="button"
                        className="rounded-md bg-transparent transition ease-in-out duration-150 hover:bg-[#4A9292]/80 border border-[#4A9292] border-1 px-2.5 py-1.5 text-sm font-semibold text-primary-white"
                        onClick={handleImageUpload}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-full mt-4">
                  <label
                    htmlFor="oldpassword"
                    className="block text-sm font-medium text-center leading-6 text-primary-white"
                  >
                    Password
                  </label>
                  <div className="mt-2 flex flex-col items-center justify-center gap-y-2"></div>
                </div>
                <div className="col-span-full mt-4">
                  <label
                    htmlFor="newpassword"
                    className="block text-sm font-medium text-center leading-6 text-primary-white"
                  >
                    New Password
                  </label>
                  <div className="mt-2 flex justify-center">
                    <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        name="newpassword"
                        id="newpassword"
                        autoComplete="newpassword"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-400  sm:text-sm sm:leading-6  outline-none text-primary-white w-full"
                        placeholder={showNewPassword ? "password" : "••••••••"}
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                      />
                      <button
                        type="button"
                        className="mx-2 right-3 top-[20%] text-[#fff] focus:outline-none"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? (
                          <svg
                            className="w-6 h-6 opacity-90"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 opacity-90"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 14"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                            >
                              <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                              <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                            </g>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-full mt-4">
                  <label
                    htmlFor="newpassword"
                    className="block text-sm font-medium text-center leading-6 text-primary-white"
                  >
                    Refill new Password
                  </label>
                  <div className="mt-2 flex justify-center">
                    <div className="relative flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-inset sm:max-w-md">
                      <input
                        type="text"
                        name="refillnewpassword"
                        id="refillnewpassword"
                        autoComplete="refillnewpassword"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 placeholder:text-gray-400  sm:text-sm sm:leading-6  outline-none text-primary-white w-full"
                        placeholder={showNewPassword ? "password" : "••••••••"}
                        onChange={(e) => setRefillNewPassword(e.target.value)}
                        value={refillNewPassword}
                      />
                    </div>
                  </div>
                </div>
                {!passwordsMatch && (
                  <div className="text-red-500 mt-2">
                    Passwords do not match.
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6 w-full">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-primary-white"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md  px-3 py-2 text-sm font-semibold text-primary-white bg-transparent transition ease-in-out duration-150 hover:bg-[#4A9292]/80 border border-[#4A9292] border-1"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
