import clsx from "clsx"
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import auth from "../../firebase";
import { signOut } from "firebase/auth";
import { changeUser } from "../../store/features/userSlice";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const users = useAppSelector(state => state.user);
  const logoutUser = () => {
    signOut(auth);
    dispatch(changeUser({
      name: "",
      img: "",
      userid: "",
      joined: "",
      email: ""
    }));
    navigate("/login");
  }
  return (
    <div className='flex flex-col w-[83rem] justify-start items-center h-[3.25rem] border-b-[1px] border-[#e7dddd]/30 mt-1 text-white'>
      <div className='w-full h-[3rem] flex justify-between items-center px-3 pb-2'>
        <div className='flex h-[3rem] gap-[1rem] justify-start items-center'>
          <a className='font-redhat font-black text-[3vh] textbackground' href="/">AIEDS</a>
          <div className=' h-[3rem] flex justify-start items-center gap-1'>
            <a className={clsx(
              'w-[2.5rem] h-[2.5rem]  bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200 ',
              (location.pathname === "/") && 'bg-blue-400 bg-opacity-20'
            )} onClick={() => navigate("/")} href="/">
              {/* home */}
              <svg width="19" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                  <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M9.69801 0.798983C10.0606 0.488058 10.5224 0.317139 11 0.317139C11.4776 0.317139 11.9395 0.488058 12.302 0.798983L18.638 6.22898L21.125 8.21898C21.2276 8.30106 21.313 8.40253 21.3763 8.51761C21.4397 8.63269 21.4797 8.75912 21.4942 8.88968C21.5087 9.02023 21.4973 9.15237 21.4607 9.27853C21.4242 9.4047 21.3631 9.52242 21.281 9.62498C21.1989 9.72754 21.0975 9.81294 20.9824 9.87628C20.8673 9.93963 20.7409 9.97969 20.6103 9.99417C20.4798 10.0087 20.3476 9.99729 20.2215 9.96071C20.0953 9.92413 19.9776 9.86306 19.875 9.78098L19 9.08098V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0392 18.7893 17.5304 19 17 19H13V14C13 13.4696 12.7893 12.9608 12.4142 12.5858C12.0392 12.2107 11.5304 12 11 12C10.4696 12 9.96087 12.2107 9.5858 12.5858C9.21073 12.9608 9.00001 13.4696 9.00001 14V19H5.00001C4.46958 19 3.96087 18.7893 3.5858 18.4142C3.21073 18.0391 3.00001 17.5304 3.00001 17V9.07998L2.12501 9.77998C2.02315 9.86697 1.90485 9.9326 1.77713 9.97298C1.64941 10.0134 1.51488 10.0277 1.38153 10.0151C1.24817 10.0025 1.11871 9.96319 1.00082 9.89959C0.882933 9.83598 0.779026 9.74935 0.695266 9.64481C0.611507 9.54028 0.549602 9.41999 0.513226 9.29107C0.47685 9.16215 0.466745 9.02724 0.483511 8.89435C0.500276 8.76145 0.54357 8.63328 0.610823 8.51743C0.678077 8.40159 0.767918 8.30044 0.875014 8.21998L3.36201 6.22998L9.69801 0.798983Z" fill="#EBE0E0" />
                </g>
              </svg>
            </a>
            <a className={clsx(
              'w-[2.5rem] h-[2.5rem]  bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200 ',
              (location.pathname === "/docs") && 'bg-blue-400 bg-opacity-20'
            )} href="/docs">
              {/* docs */}
              <svg width="17" height="17" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                  <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M0 17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H15C15.7956 20 16.5587 19.6839 17.1213 19.1213C17.6839 18.5587 18 17.7956 18 17V6.828C17.9996 6.03276 17.6834 5.27023 17.121 4.708L13.293 0.878C12.7304 0.315719 11.9674 -9.53012e-05 11.172 2.15723e-08H3C2.20435 2.15723e-08 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17ZM5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H13C13.2652 12 13.5196 11.8946 13.7071 11.7071C13.8946 11.5196 14 11.2652 14 11C14 10.7348 13.8946 10.4804 13.7071 10.2929C13.5196 10.1054 13.2652 10 13 10H5ZM5 14C4.73478 14 4.48043 14.1054 4.29289 14.2929C4.10536 14.4804 4 14.7348 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16H9C9.26522 16 9.51957 15.8946 9.70711 15.7071C9.89464 15.5196 10 15.2652 10 15C10 14.7348 9.89464 14.4804 9.70711 14.2929C9.51957 14.1054 9.26522 14 9 14H5Z" fill="#E7DDDD" />
                </g>
              </svg>
            </a>

            <a className={clsx(
              'w-[2.5rem] h-[2.5rem]  bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200 ',
              (location.pathname === "/settings") && 'bg-blue-400 bg-opacity-20'
            )} href="/settings">
              {/* saved */}
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#E7DDDD"></path> </g></svg>
          </a>

            <a className={clsx(
              'w-[2.5rem] h-[2.5rem]  bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200 ',
              (location.pathname === "/playground") && 'bg-blue-400 bg-opacity-20'
            )} href="/playground">
              {/* playground */}
              <svg width="17" height="17" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                  <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M12 0C11.2044 0 10.4413 0.331874 9.87868 0.922614C9.31607 1.51335 9 2.31457 9 3.15H5C4.46957 3.15 3.96086 3.37125 3.58579 3.76508C3.21071 4.1589 3 4.69305 3 5.25V8.4C2.20435 8.4 1.44129 8.73187 0.87868 9.32261C0.316071 9.91335 0 10.7146 0 11.55C0 12.3854 0.316071 13.1866 0.87868 13.7774C1.44129 14.3681 2.20435 14.7 3 14.7V18.9C3 19.457 3.21071 19.9911 3.58579 20.3849C3.96086 20.7787 4.46957 21 5 21H8.25C8.71413 21 9.15925 20.8064 9.48744 20.4618C9.81563 20.1172 10 19.6498 10 19.1625C10 18.438 10.56 17.85 11.25 17.85H12.75C13.44 17.85 14 18.438 14 19.1625C14 20.1768 14.784 21 15.75 21H18C18.5304 21 19.0391 20.7787 19.4142 20.3849C19.7893 19.9911 20 19.457 20 18.9V15.4875C20 15.0002 19.8156 14.5328 19.4874 14.1882C19.1592 13.8436 18.7141 13.65 18.25 13.65C17.56 13.65 17 13.062 17 12.3375V10.7625C17 10.038 17.56 9.45 18.25 9.45C18.7141 9.45 19.1592 9.25641 19.4874 8.91181C19.8156 8.56721 20 8.09983 20 7.6125V5.25C20 4.69305 19.7893 4.1589 19.4142 3.76508C19.0391 3.37125 18.5304 3.15 18 3.15H15C15 2.31457 14.6839 1.51335 14.1213 0.922614C13.5587 0.331874 12.7956 0 12 0V0Z" fill="#E7DDDD" />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className='flex flex-row-reverse justify-end items-center  h-[3rem] gap-2'>
          <div className='w-[2.8rem] h-[3rem] bg-gray-800/10 rounded-full flex justify-center items-center'>
            <img className="w-[2.8rem] rounded-full object-contain" src={users.img ? users.img : "https://avatars.githubusercontent.com/u/98532264?s=400&u=0cf330740554169402dccc6d6925c21d8850cf03&v=4"} alt="" />
          </div>
          <div className='flex flex-col justify-center items-end'>
            <div className='font-redhat font-black text-[1.125rem] leading-1'>{users.name}</div>
            <div className='font-redhat font-extrabold opacity-60 text-[0.75rem] leading-none'>{users.email}</div>
          </div>
          <div className="h-full w-fit flex justify-center items-center mr-[0.5rem]">
            <button className="rounded-lg  px-3 py-1 text-sm font-semibold text-primary-white bg-transparent transition ease-in-out duration-150 hover:bg-[#4A9292]/80 border border-[#4A9292] border-1 mt-2" onClick={logoutUser}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
