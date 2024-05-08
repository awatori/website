import Image from "next/image"
import Link from "next/link"

export default function ContactUs() {
  return (
    <main className="min-h-lvh mb-20">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6483.2382063356!2d139.697474!3d35.661755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca96ae7d2cb%3A0x2af11e0e8f908305!2sWorld%20Udagawa%20Bldg.!5e0!3m2!1sen!2sus!4v1715143034089!5m2!1sen!2sus" className="w-full h-[50vh] mt-[69px]" loading="lazy" allowFullScreen></iframe>
      <section className="mt-10 mx-14 md:mx-20 lg:mx-36">
        <h1>Contact Us</h1>
        <p className="mt-2">For collaborations and or sponsorship, please contact us via the information provided below. We would love to hear from you.</p>
        <div className="flex mt-10 gap-16">
          <div className="w-1/2">
            <form action="">
              <div className="flex gap-6">
                <div className="w-1/2">
                  <label htmlFor="fName" className="block">First name</label>
                  <input type="text" id="fName" name="fName" required className="w-full border py-2 px-3" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lName" className="block">Last name</label>
                  <input type="text" id="lName" name="lName" required className="w-full border py-2 px-3" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required className="w-full border py-2 px-3" />
              </div>
              <div className="mt-4">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required className="w-full border py-2 px-3" rows={5} />
              </div>
              <button className="w-full bg-black text-white py-2 px-4 mt-4 rounded">Submit</button>
            </form>
          </div>
          <div className="w-1/2">
            <div>
              <h2>The Office</h2>
              <div className="flex w-full gap-4 mt-4">
                <Image src="/icons/gps.png" alt="Location icon" width={30} height={30} className="object-contain" />
                <p>WORLD UDAGAWA BUILDING 6F 36-6 Udagawacho, Shibuya City, <br />150-0042 Tokyo</p>
              </div>
              <div className="flex w-full gap-4 mt-4">
                <Image src="/icons/email.png" alt="Email icon" width={30} height={30} className="object-contain" />
                <p>it@awatori.com</p>
              </div>
            </div>
            <hr className="mt-6" />
            <div className="mt-6">
              <h2 className="mb-4">Social Media</h2>
              <div className="flex gap-4">
                <Link href="https://www.instagram.com/awatori.ourstory/"><Image src="/icons/instagram_icon_black.png" alt="Instagram icon" width={30} height={30} className="object-contain" /></Link>
                <Link href="https://www.youtube.com/channel/UCHCt0lehc9PLV7JS3Ytlkag/featured?view_as=subscriber"><Image src="/icons/youtube_icon_black.png" alt="Youtube icon" width={30} height={30} className="object-contain" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}