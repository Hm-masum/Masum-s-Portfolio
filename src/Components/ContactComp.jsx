import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { LuSendHorizonal } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const ContactComp = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_isofhni', 'template_jgfv4yj', form.current, {
        publicKey: 'q_kxOnEIwg2Aq_8bL',
      })
      .then(
        () => {
          Swal.fire({
                icon: "success",
                title: "Thanks for messaging",
                showConfirmButton: false,
                timer: 1500
              });
        },
        (error) => {
          Swal.fire({
            iicon: "error",
            title: "Oops",
            showConfirmButton: false,
            timer: 1500
          });
        },
      );
   };


  return (
    <div className='my-16 space-y-6'>
      <h2 className='text-2xl md:text-4xl font-semibold text-center my-10'>Contact</h2>
      <div className="md:flex justify-around space-x-4">
        <div className="space-y-3 md:w-[25%]">
          <div className="flex gap-4 items-center bg-zinc-900 p-4 rounded-lg">
            <FaPhoneAlt className="text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold">Call Me</h2>
              <p>01817267861</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-zinc-900 p-4 rounded-lg">
            <AiTwotoneMail className="text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold">Email Me</h2>
              <p>hhmasum88@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center bg-zinc-900 p-4 rounded-lg">
            <TiLocationOutline className="text-4xl" />
            <div>
              <h2 className="text-2xl font-semibold">Location</h2>
              <p>Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-5 md:w-[55%]">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input name="from_name" type="text" className="grow" placeholder="Username" />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input name="from_email" type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered w-full"
            placeholder="Bio"
          ></textarea>
          <button type="submit" className="btn btn-outline flex items-center space-x-2">Send Message <LuSendHorizonal className="text-xl" /></button>
        </form>
      </div>
    </div>
  );
};

export default ContactComp;
