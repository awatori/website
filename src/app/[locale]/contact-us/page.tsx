"use client"
export const runtime = 'edge';

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { socialMedias } from "@/lib/socialMediaData";

export default function ContactUs() {
  const t = useTranslations("Contact")

  async function handleSubmit() {
    emailjs.init(process.env.EMAIL_PUBLIC_KEY!);
    const serviceId = process.env.EMAIL_SERVICE_ID!;
    const templateId = process.env.EMAIL_TEMPLATE_ID!;

    const firstNameEl = document.getElementById("fName") as HTMLInputElement;
    const firstName = firstNameEl.value;

    const lastNameEl = document.getElementById("lName") as HTMLInputElement;
    const lastName = lastNameEl.value;

    const emailEl = document.getElementById("fName") as HTMLInputElement;
    const userEmail = emailEl.value;

    const messageEl = document.getElementById("message") as HTMLTextAreaElement;
    const userMessage = messageEl.value;

    try {
      await emailjs.send(serviceId, templateId, {
        first_name: firstName,
        last_name: lastName,
        email: userEmail,
        message: userMessage
      });

      firstNameEl.value = "";
      lastNameEl.value = "";
      emailEl.value = "";
      messageEl.value = "";

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <main className="min-h-lvh mb-20">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6483.2382063356!2d139.697474!3d35.661755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca96ae7d2cb%3A0x2af11e0e8f908305!2sWorld%20Udagawa%20Bldg.!5e0!3m2!1sen!2sus!4v1715143034089!5m2!1sen!2sus" className="w-full h-[50vh] mt-[69px]" loading="lazy" allowFullScreen></iframe>
      <section className="mt-10 mx-14 md:mx-20 lg:mx-36">
        <h1>{t("title")}</h1>
        <p className="mt-2">{t("description")}</p>
        <div className="flex flex-col md:flex-row mt-10 gap-16">
          <div className="w-full md:w-1/2">
            <form action="">
              <div className="flex gap-6">
                <div className="w-1/2">
                  <label htmlFor="fName" className="block">{t("first-name")}</label>
                  <input type="text" id="fName" name="fName" required className="w-full border py-2 px-3" />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lName" className="block">{t("last-name")}</label>
                  <input type="text" id="lName" name="lName" required className="w-full border py-2 px-3" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email">{t("email")}</label>
                <input type="email" id="email" name="email" required className="w-full border py-2 px-3" />
              </div>
              <div className="mt-4">
                <label htmlFor="message">{t("message")}</label>
                <textarea id="message" name="message" required className="w-full border py-2 px-3" rows={5} />
              </div>
              <button onClick={handleSubmit} className="w-full bg-black text-white py-2 px-4 mt-4 rounded">Submit</button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <div>
              <h2>{t("office")}</h2>
              <div className="flex w-full gap-4 mt-4">
                <Image src="/icons/gps.png" alt="Location icon" width={30} height={30} className="object-contain" />
                <p className="whitespace-pre-wrap">{t("address")}</p>
              </div>
              <div className="flex w-full gap-4 mt-4">
                <Image src="/icons/email.png" alt="Email icon" width={30} height={30} className="object-contain" />
                <p>info@awatori.com</p>
              </div>
            </div>
            <hr className="mt-6" />
            <div className="mt-6">
              <h2 className="mb-4">{t("social")}</h2>
              <div className="flex gap-4">
                {socialMedias.map(media => (
                  <Link href={media.link} key={media.alt}>
                    <Image src={media.iconBlack} alt={media.alt} width={30} height={30} className="object-contain" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}