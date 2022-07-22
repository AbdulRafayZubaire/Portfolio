import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit flex justify-center items-center bg-dark text-white">
      <div className="flex flex-col justify-center items-center container max-w-[1000px]">
        <div className="">
          <h1 className="m-auto w-fit text-brightYellow text-4xl border-b-[1px] border-brightYellow p-3">
            Contact
          </h1>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/7e5baf3f-26ba-4ebc-894e-d3fcccfb260c"
          className="w-full h-[400px] flex flex-col justify-center items-center"
        >
          <div className="name w-[70%]">
            <input
              type="text"
              name="name"
              placeholder="Your Good Name"
              className="w-full placeholder-grey_3 text-white p-2 border-[1px] bg-transparent border-brightYellow rounded-[5px] "
            />
          </div>

          <div className="email w-[70%]  my-5">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full placeholder-grey_3 text-white p-2 border-[1px] bg-transparent border-brightYellow rounded-[5px]"
            />
          </div>

          <div className="message w-[70%]">
            <textarea
              name="message"
              cols={30}
              rows={5}
              type="text"
              placeholder="Message"
              className="w-full placeholder-grey_3 text-white p-2 border-[1px] bg-transparent border-brightYellow rounded-[5px]"
            />
          </div>

          <button className="w-[30%] my-3 text-brightYellow p-2 rounded-[10px] tracking-widest border-t-[1px] hover:text-black hover:bg-brightYellow duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
