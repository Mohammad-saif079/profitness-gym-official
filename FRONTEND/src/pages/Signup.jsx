import SignHead from '../components/SignHead'
import Input from '../components/Input'
import { useState, useEffect } from "react"
import { Usesign } from "../context/Signupcontext.jsx"
import { useChat } from '../context/Chatcontext.jsx';
import { gsap } from "gsap";
import DotsIcon from '../components/DotsIcon.jsx';
import Toaster from '../components/Toaster.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lenis from '@studio-freight/lenis'

const Signup = () => {
  const { firstname, lastname, password, setpassword, username, email, setemail, setusername, confirmpass, setconfirmpass } = Usesign()
  const { err1, err5, err2, err3, err4, seterr1, seterr2, seterr3, seterr4, seterr5 } = Usesign()
  const { mainid, setmainid } = useChat()

  const [loading, setloading] = useState(false)
  //function for submission
  const navigate = useNavigate()
  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // 2. Integrate with GSAP Ticker
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Optional: Connect GSAP animations to Lenis scroll
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // 3. Cleanup on Unmount
    return () => {
      lenis.destroy()
      gsap.ticker.remove(raf)
    }
  }, [])

  const handlecreateaccount = async () => {
    if (!loading) {
      let valid = true;

      // First Name


      if (firstname.trim() === "" && lastname.trim() === "") {
        seterr1("*Required");
        valid = false;
      } else {
        if (firstname.trim() === "") {
          seterr1("*First name is required");
          valid = false;
        } else {
          seterr1("")
        }

      }


      if (username.trim() === "") {
        seterr2("*Required")
        valid = false
      } else {
        seterr2("")
      }
      if (email.trim() === "") {
        seterr5("*Required")
        valid = false
      } else {
        seterr5("")
      }

      // Password
      if (password.trim() === "") {
        seterr3("*Required")
        valid = false;
      } else {
        if (password.length < 6) {
          seterr3("*Password must be at least 6 characters");
          valid = false;
        } else {
          seterr3("");
        }
      }

      // Confirm Password
      if (confirmpass.trim() === "") {
        seterr4("*Required");
        valid = false;

      } else {
        if (confirmpass !== password) {
          seterr4("*Passwords do not match");
          valid = false;
        } else {
          seterr4("");
        }
      }



      // If valid, proceed with submission
      if (valid) {
        setloading(true)
        console.log({
          fullname: (firstname.trim() + " " + lastname.trim()).trim(),
          email: email.trim(),
          username: username.trim(),
          password: password.trim()
        })

        // try {
        //   const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/createuser`, {
        //     fullname: (firstname.trim() + " " + lastname.trim()).trim(),
        //     email: email.trim(),
        //     username: username.trim(),
        //     password: password.trim()
        //   })

        //   console.log(response.data)
        //   if (!response.data.success) {
        //     if (response.data.errorcode == 0) {
        //       seterr5(response.data.errors[0])
        //     }
        //     if (response.data.errorcode == 456) {
        //       seterr2(`Try ${response.data.suggestions[1]}`)
        //     }

        //   } else {
        //     localStorage.setItem("AuthToken", response.data.token)
        //     const tl = gsap.timeline()
        //     tl.to(".toaster", {
        //       y: 20,
        //       duration: 0.9,
        //       scale: 1,
        //       ease: "power4.out"
        //     })
        //     tl.to(".toaster", {
        //       y: "-100%",
        //       duration: 0.9,
        //       scale: 1,
        //       ease: "power4.out",
        //       onComplete: () => {

        //         setmainid(response.data.user.id)
        //         // console.log("account created")
        //         navigate("/chats", { replace: true })
        //       }
        //     })

        //   }
        //   setloading(false)
        // }
        // catch {
        //   setloading(false)
        //   console.log("network error")
        // }


      }

    } else { }

  }







  return (



    <div className=' w-[100vw] h-[100svh] relative  flex items-center justify-center '>
      <div className='absolute top-7   flex flex-col justify-center items-center gap-2 sm:gap-0 ' >
        <SignHead size={50} />

        <div className='  overflow-hidden  sm:w-[600px] w-[90vw] flex flex-col justify-center '>
          <h1 className='sm:w-[full] w-[90vw] mx-0 my-1 text-white text-3xl font-semibold '>CREATE ACCOUNT</h1>

          <Input title="Enter Full Name*" cut={true} error={err1} />
          <Input title="Choose a Username*" placeholder="Username" error={err2} herovalue={username} setherovalue={setusername} />
          <Input title="Choose an Email*" placeholder="Email" error={err5} herovalue={email} setherovalue={setemail} />
          <Input title="Choose a Password*" ispassword={true} placeholder="Password" error={err3} herovalue={password} setherovalue={setpassword} />
          <Input title="Confirm Password*" ispassword={true} placeholder="Re-enter" error={err4} herovalue={confirmpass} setherovalue={setconfirmpass} />         <button onClick={handlecreateaccount} className=' sm:w-[580px] overflow-hidden flex justify-center items-center rounded-[10px] py-3 text-[18px] w-full bg-[#b22222] text-[#ffffff] font-semibold ' >
            {loading ? (
              <div className='loader animate-spin' >
                <DotsIcon />
              </div>
            ) : "Dominate"}
          </button>
          <div className='w-full sm:w-[580px] text-center text-lg text-[#a3a3a3] py-3 font-semibold ' >

            OR
          </div>

          <button className=' mb-3 sm:w-[580px] overflow-hidden flex justify-center items-center rounded-[10px] py-2 text-[18px] w-full gap-2 text-[#fff] font-semibold border-2 ' >
            <svg
              width={35}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                opacity="0.987"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.209 1.061C7.934 0.980002 8.363 0.980002 9.142 1.061C10.5209 1.2651 11.7992 1.90249 12.792 2.881C12.1211 3.51514 11.4591 4.15853 10.806 4.811C9.55533 3.751 8.15933 3.50634 6.618 4.077C5.48733 4.597 4.7 5.43967 4.256 6.605C3.53044 6.06483 2.81433 5.51208 2.108 4.947C2.05891 4.92116 2.00285 4.9117 1.948 4.92C3.07 2.75667 4.82333 1.47 7.208 1.06"
                fill="#F44336"
              />
              <path
                opacity="0.997"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.946 4.92001C2.00267 4.91134 2.05633 4.92034 2.107 4.94701C2.81333 5.51209 3.52944 6.06484 4.255 6.60501C4.14083 7.05906 4.06885 7.5227 4.04 7.99001C4.06467 8.44201 4.13633 8.88567 4.255 9.32101L2 11.116C1.018 9.06401 1 6.99867 1.946 4.92001Z"
                fill="#FFC107"
              />
              <path
                opacity="0.999"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.685 13.29C11.9829 12.6708 11.2478 12.0899 10.483 11.55C11.2497 11.0087 11.715 10.266 11.879 9.322H8.122V6.713C10.2887 6.695 12.4543 6.71334 14.619 6.768C15.0297 8.998 14.5553 11.0087 13.196 12.8C13.0344 12.9718 12.8631 13.1354 12.685 13.29Z"
                fill="#448AFF"
              />
              <path
                opacity="0.993"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.255 9.322C5.075 11.36 6.57833 12.3113 8.765 12.176C9.37883 12.1049 9.96735 11.8905 10.483 11.55C11.2483 12.0913 11.9823 12.6713 12.685 13.29C11.5716 14.2905 10.1521 14.8841 8.658 14.974C8.31854 15.0011 7.97746 15.0011 7.638 14.974C5.09267 14.674 3.21333 13.388 2 11.116L4.255 9.322Z"
                fill="#43A047"
              />
            </svg>
            <div>
              Continue with Google

            </div>
          </button>

          <button className='mb-7 sm:w-[580px] overflow-hidden flex justify-center items-center rounded-[10px] py-2 text-[18px] w-full gap-2 text-[#fff] font-semibold border-2 ' >
            <svg
              width={33}

              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"

            >
              <path
                d="M16 8C16 3.58175 12.4183 0 8 0C3.58175 0 0 3.58175 0 8C0 11.993 2.9255 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77175 3.125C10.647 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.55994 5.25 9.25 5.86669 9.25 6.49937V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.9931 16 8Z"
                fill="#1877F2"
              />
              <path
                d="M11.1141 10.3125L11.4688 8H9.25V6.49937C9.25 5.86662 9.55994 5.25 10.5538 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77169 3.125C7.94438 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.16351 15.9676 7.58144 16.0001 8 16C8.41856 16.0001 8.83649 15.9676 9.25 15.9028V10.3125H11.1141Z"
                fill="white"
              />
            </svg>
            <div>
              Continue with Facebook

            </div>
          </button>
        </div>

      </div>
      <div className=' toaster fixed top-0 translate-y-[-100%] scale-[1] ' >
        <Toaster />
      </div>



    </div>


  )
}

export default Signup
