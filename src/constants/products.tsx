import sidefolioAIToolkit from "public/images/ai-toolkit.jpeg";
import sidefolioAIToolkit2 from "public/images/ai-toolkit2.jpeg";
import sidefolioBotsensei from "public/images/botsensei.jpeg";
import sidefolioBotsensei2 from "public/images/botsensei2.jpeg";
import sidefolioImperius from "public/images/imperius.jpeg";
import sidefolioImperius2 from "public/images/imperius2.jpeg";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://aitoolkit-two.vercel.app/",
    title: "AIToolkit",
    description:
      "AI toolkit is a high performing SEO-Friendly landing page",
    thumbnail: sidefolioAIToolkit,
    images: [sidefolioAIToolkit, sidefolioAIToolkit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "aitoolkit",
    content: (
      <div id="landing-page">  
      <section id="features">
          <h2>Key Features</h2>
          <ul>
              <li><strong>SEO-Friendly</strong>: Optimized for search engines to boost visibility and attract more users.</li>
              <li><strong>Modern & Sleek Design</strong>: A sleek, modern user interface with smooth animations to keep your visitors engaged.</li>
              <li><strong>Next.js Powered</strong>: Enjoy fast page loads and superior performance with the Next.js framework.</li>
              <li><strong>Framer Animations</strong>: Delight users with seamless, interactive animations powered by Framer.</li>
              <li><strong>Aceternity Integration</strong>: Harness the power of Aceternity for state-of-the-art AI capabilities and data management.</li>
          </ul>
      </section>
  
      <section id="get-started">
          <h2>Ready to Innovate?</h2>
          <p>Get started with the most advanced AI toolkit on the market and take your projects to the next level.</p>
      </section>
  </div>  
    ),
  },
  {
    href: "https://botsensei.vercel.app/",
    title: "Botsensei",
    description:
      "Botsensei is a highly converting, SEO-friendly landing page for a no-code Telegram bot builder.",
    thumbnail: sidefolioBotsensei,
    images: [sidefolioBotsensei, sidefolioBotsensei2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "botsensei",
    content: (
      <div id="landing-page">
  <section id="intro">
    <h1>Botsensei</h1>
    <p>
      Botsensei is a highly converting, SEO-friendly landing page for a no-code Telegram bot builder. It is built with Next.js and Tailwind CSS, and it uses Framer for smooth, dynamic animations.
    </p>
  </section>

  <section id="features">
    <h2>Key Features</h2>
    <ul>
      <li><strong>SEO-Friendly</strong>: Optimized for search engines to boost visibility and attract more users.</li>
      <li><strong>Modern & Sleek Design</strong>: A sleek, modern user interface with smooth animations to keep your visitors engaged.</li>
      <li><strong>Next.js Powered</strong>: Enjoy fast page loads and superior performance with the Next.js framework.</li>
      <li><strong>Tailwind CSS Styling</strong>: Create a fully responsive and beautiful UI with minimal effort.</li>
      <li><strong>Framer Animations</strong>: Delight users with seamless, interactive animations powered by Framer.</li>
      <li><strong>No-Code Bot Building</strong>: Easily build and deploy Telegram bots without any coding skills.</li>
    </ul>
  </section>

  <section id="get-started">
    <h2>Ready to Innovate?</h2>
    <p>
      Start building Telegram bots effortlessly with Botsensei and take your projects to the next level. No coding required!
    </p>
  </section>
</div>
    ),
  },
  {
    href: "https://www.imperiusai.io/",
    title: "Imperius AI",
    description:
      "Imperius delivers unparalleled decentralized computing solutions, prioritizing robust security and efficient scalability.",
    thumbnail: sidefolioImperius,
    images: [sidefolioImperius, sidefolioImperius2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "imperiusai",
    content: (
      <div>
        <p>
          Imperius is an AI-driven platform that enhances blockchain scalability through decentralized computing solutions, emphasizing security and efficiency. Its decentralized mesh network ensures continuous operation with self-healing capabilities, maintaining optimal performance even during node failures.
        </p>
        <p>
          Advanced onion routing technology provides multi-layered encryption, ensuring superior privacy and protection against traffic analysis. AI algorithms anticipate network demands, optimizing resource allocation in real-time for seamless scalability. The platform offers an intuitive DApp management hub with real-time analytics, one-click deployment, and scalability controls, simplifying decentralized application management.
        </p>
        <p>
          Imperius supports various use cases, including enterprise-grade solutions, blockchain development, high-performance compute clusters, privacy-centric applications, and IoT network management. The roadmap includes phases focusing on infrastructure development, AI integration, ecosystem expansion, and multi-chain interoperability to drive global adoption.
        </p>
      </div>

    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
