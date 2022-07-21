import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen flex justify-center items-center bg-dark text-white">
      <div className="container max-w-[1000px]">
        <div className="">
          <h1 className="m-auto w-fit text-brightYellow text-4xl border-b-[3px] border-brightYellow p-3 mb-10">
            Contact
          </h1>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/7e5baf3f-26ba-4ebc-894e-d3fcccfb260c"
          className="w-full h-[500px] flex flex-col justify-center items-center"
        >
          <div className="name w-[70%]">
            <input
              type="text"
              name="name"
              placeholder="Your Good Name"
              className="w-full placeholder-white text-dark text-xl p-3 border-[1px] bg-transparent border-brightYellow rounded-[5px] "
            />
          </div>

          <div className="email w-[70%]  my-5">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full placeholder-white text-dark text-xl p-3 border-[1px] bg-transparent border-brightYellow rounded-[5px]"
            />
          </div>

          <div className="message w-[70%]">
            <textarea
              name="message"
              cols={30}
              rows={5}
              type="text"
              placeholder="Message"
              className="w-full placeholder-white text-dark text-xl p-3 border-[1px] bg-transparent border-brightYellow rounded-[5px]"
            />
          </div>

          <button className="w-[50%] my-3 text-brightYellow text-[24px] p-2 border-brightyellow border-[1px] rounded-[15px] font-bold tracking-wider hover:text-black hover:border-brightYellow hover:bg-brightYellow hover:border-[1px] duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
