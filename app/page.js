import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="w-full text-center grid">    
        <h1 className="text-8xl mt-16 text-white">'Hey Kiddos'</h1>
        <p className="text-2xl mt-8 text-white">Let's dive into a world of fun and learning together!</p>
        <p className="text-5xl text-white mt-8">Stay Tuned !</p>
        <Image
            src="/images/boy-on-pencil.png"
            alt="boy on pencil"
            className="absolute top-14 right-0"
            width={400}
            height={400}
        />
      </div>
        <div className="relative w-full text-center grid mt-[120px]">
            <div className="flex w-full justify-center">
                <Image
                    src="/images/boy-on-planat.png"
                    alt="boy on pencil"
                    width={500}
                    height={500}
                />
                <Image
                    src='/images/book.png'
                    alt="book"
                    width={200}
                    height={200}
                    className="absolute bottom-20 left-0" 
                />
                <Image
                    src='/images/erraser.png'
                    alt="book"
                    width={120}
                    height={100}
                    className="absolute bottom-20 right-0" 
                />
            </div>
        </div>
        <div className="relative w-full text-center grid mt-[120px]">
            <Image
                src='/images/star.png'
                alt="book"
                width={100}
                height={100}
                className="absolute -top-20 right-72" 
            />
            <h1 className="text-8xl mt-16 text-[#3A0052]">Why Bright Spark?</h1>
            <p className="text-[#002754] text-2xl mt-20 font-medium">At Bright Spark, we believe in empowering individuals and organizations to reach their full potential. With our innovative solutions and cutting-edge technology, we strive to ignite creativity, foster collaboration, and inspire growth. Our passion for innovation drives us to create transformative experiences that illuminate the path to success. Whether you're a curious learner, an ambitious entrepreneur, or a forward-thinking organization, Bright Spark is your trusted partner on the journey to greatness. Join us and discover why Bright Spark is the beacon of innovation in today's digital landscape.</p>
            <div className="flex justify-center w-full pt-16">
                <Image
                    src='/images/iPhone12Pro.png'
                    alt="book"
                    width={800}
                    height={500}
                />
            </div>
        </div>
        <div className="relative w-full text-center grid mt-[120px]">
            <h1 className="text-7xl mt-16 text-[#3A0052]">Whats comes with bright spark?</h1>
            <p className="text-black text-3xl mt-20 font-medium">Bright Spark offers a wide range of tools and solutions to boost creativity, <br/> encourage teamwork, and achieve goals. </p>
            <div className="flex justify-center w-full pt-24">
                <Image
                    src='/images/iPhone15.png'
                    alt="book"
                    width={600}
                    height={500}
                    className="absolute left-0"
                />
                <Image
                    src='/images/iPhone15Pro2.png'
                    alt="book"
                    width={900}
                    height={500}
                    className="absolute -right-28"
                />
            </div>
        </div>
        <div className="relative w-full text-center grid mt-[950px]">
            <Image
                src='/images/cutter.png'
                alt="book"
                width={120}
                height={120}
                className="absolute right-48 top-4"
            />
            <h1 className="text-7xl mt-16 text-[#3A0052]">What people say?</h1>
            <div className="flex justify-center w-full pt-16 gap-12 mt-12">
                <div className="bg-[#EAF4FE] rounded-3xl p-10 w-1/3 relative">
                    <Image
                        src='/images/Symbol.png'
                        alt="book"
                        width={60}
                        height={60}
                        className="absolute left-10 -top-8"
                    />
                    <p className="text-left italic font-light text-xl mb-16 leading-loose">The prototype of Bright Spark is a game-changer for my classroom! The interactive features and educational content make learning engaging and accessible for all students. I can't wait to incorporate this into my lesson plans.</p>
                    <p className="absolute bottom-10 text-left text-xl font-bold">Malshi Amandi</p>
                </div>
                <div className="bg-[#039BFB] rounded-3xl p-10 w-1/3 relative">
                    <Image
                        src='/images/Symbol.png'
                        alt="book"
                        width={60}
                        height={60}
                        className="absolute left-10 -top-8"
                    />
                    <p className="text-left italic font-light text-xl mb-16 leading-loose text-white">I'm thrilled with the prototype of Bright Spark! It's intuitive and user-friendly, making it easy for my child to navigate and learn independently. The interactive elements keep my child entertained while learning valuable skills.</p>
                    <p className="absolute bottom-10 text-left text-xl font-bold text-white">Amali Madubhashini</p>
                </div>
                <div className="bg-[#EAF4FE] rounded-3xl p-10 w-1/3 relative">
                    <Image
                        src='/images/Symbol.png'
                        alt="book"
                        width={60}
                        height={60}
                        className="absolute left-10 -top-8"
                    />
                    <p className="text-left italic font-light text-xl mb-16 leading-loose">As a UI/UX engineer, I'm impressed by the prototype of Bright Spark. The design is sleek and modern, with intuitive navigation and clear visuals. It's evident that user experience was a top priority in the development process, and I'm excited to see how users will engage with the final product</p>
                    <p className="absolute bottom-10 text-left text-xl font-bold">Amanda Kandambi</p>
                </div>
            </div>
        </div>
        <div className="w-full text-center grid grid-cols-12 mt-60 mb-20">
            <div className="grid col-span-4">
                <h1 className="text-7xl font-bold text-[#3A0052] text-left">Contact us</h1>
                <Image
                        src='/images/bright-spark.png'
                        alt="bright spark"
                        width={300}
                        height={10}
                        className="mt-8"
                    />
                <p className="text-[#212529] font-light text-2xl text-left mt-4">#46, Weliwita, Malabe. <br/>Sri Lanka.</p>
                <span className="mt-6 flex items-center text-2xl text-[#007BFF]"><FiPhoneCall className="text-2xl"/>&nbsp;&nbsp;071 2040600</span>
                <span className="mt-3 flex items-center text-2xl text-[#007BFF]"><AiOutlineMail className="text-2xl"/>&nbsp;&nbsp;info@class.lk</span>
                <div className="flex mt-8 gap-4" id="contact">
                    <div className="bg-[#039BFB] w-16 h-16 rounded-full flex justify-center items-center">
                        <Link href="https://web.facebook.com/profile.php?id=61557157393850" target="_blank"><FaFacebookF className="text-white text-3xl"/></Link>
                    </div>
                    <div className="bg-[#039BFB] w-16 h-16 rounded-full flex justify-center items-center">
                        <Link href='https://www.youtube.com/channel/UCxAbJ3eZXwycNKVwa0lTzkQ' target="_blank"><FaYoutube className="text-white text-3xl"/></Link>
                    </div>
                    <div className="bg-[#039BFB] w-16 h-16 rounded-full flex justify-center items-center">
                        <Link href='https://www.tiktok.com/@brightsparkkidsapp' target="_blank"><FaTiktok className="text-white text-3xl"/></Link>
                    </div>
                    <div className="bg-[#039BFB] w-16 h-16 rounded-full flex justify-center items-center">
                        <Link href='#contact'><FaInstagram className="text-white text-3xl"/></Link>
                    </div>
                </div>
                <p className="text-xs text-left mt-8">© 2024 Bright Spark Digital (Pvt) Ltd. All Rights Reserved.</p>
            </div>
            <div className="col-span-8">
                    <Image
                        src='/images/boy-and-girl.png'
                        alt="bright spark"
                        width={650}
                        height={650}
                        className="absolute right-80"
                    />
            </div>
        </div>
    </main>
  );
}
