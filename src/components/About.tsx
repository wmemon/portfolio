"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://pbs.twimg.com/profile_images/1876929614750126080/D0ffclOx_400x400.jpg",
  ];

  return (
    <div>
      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      {/* About Section */}
      <div className="max-w-4xl">
        <Paragraph className="mt-4">
          Hey there, I&apos;m Wasim Memon — a passionate Web3 developer and
          frontend enthusiast! Welcome to my corner of the decentralized digital
          world!
        </Paragraph>

        <Paragraph className="mt-4">
          My journey started with a fascination for the endless possibilities of
          blockchain technology. Over the years, I&apos;ve honed my skills in
          crafting seamless digital experiences by blending modern frontend
          development with decentralized principles.
        </Paragraph>

        <Paragraph className="mt-4">
          As a developer, I thrive on building intuitive and user-friendly
          interfaces for decentralized applications (dApps). My work bridges the
          gap between complex blockchain interactions and accessible, visually
          stunning frontend solutions. Whether it&apos;s integrating wallets,
          managing tokens, or simplifying on-chain processes, I&apos;m driven to
          create Web3 products that are not only powerful under the hood but
          also delightful to use.
        </Paragraph>

        <Paragraph className="mt-4">
          What sets me apart is my design-first approach. I believe that Web3
          adoption can only succeed when blockchain technology meets thoughtful
          design. From clean UI components to smooth interactions, I focus on
          creating interfaces that users enjoy engaging with.
        </Paragraph>

        <Paragraph className="mt-4">
          Through this website, I aim to share my insights, experiences, and
          creations in the world of Web3 and frontend development. Whether
          you&apos;re a developer exploring the decentralized web, a designer
          curious about dApp interfaces, or someone looking to understand
          blockchain&apos;s impact on user experience, there&apos;s something
          here for you.
        </Paragraph>

        <Paragraph className="mt-4">
          Let&apos;s embark on this journey together — merging the worlds of
          decentralization and design to create digital marvels that push
          boundaries and inspire innovation.
        </Paragraph>

        <Paragraph className="mt-4">
          Thank you for being here, and I&apos;m excited to build the future of
          the web with you.
        </Paragraph>
      </div>
    </div>
  );
}
