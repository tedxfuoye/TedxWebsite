import Link from "next/link";

const Contact = () => {
  return (
    <section className="px-40 py-20 max-w-screen-xl mx-auto">
      <h2 className="text-black font-bold font-kameron text-4xl mb-6">
        Contact Us
      </h2>
      <div className="flex items-start gap-40 justify-between">
        <div className="w-full md:w-1/2">
          <h5>Get in touch</h5>
          <p className="text-secondary font-medium text-[16px] text-justify md:max-w-[52rem]">
            Have questions or suggestions? Reach out to us via the contact
            form,and we'll be happy to connect.
          </p>
          <Link href={"tel:08160812613"}>08160812613</Link>
          <Link href={"mailto:tedxfuoye@gmail.com"}>tedxfuoye@gmail.com</Link>
        </div>
        <div className="w-full md:w-1/2 bg-white rounded-md p-8">
          <form action="">
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="John Doe"
            />
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
            <label htmlFor="message">Your message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
            ></textarea>

            <button className="bg-primary hover:bg-primary/90 delay-75 duration-200 px-6 py-4 text-white text-[1.2rem] rounded-lg mt-10">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
