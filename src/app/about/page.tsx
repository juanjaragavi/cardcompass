import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# CardCompass: Your Guide to Smarter Credit Card Choices

![CardCompass Team](/images/cardcompass-team.jpg)

Navigating the world of credit cards can feel like charting unknown waters. With countless options, complex terms, confusing rewards programs, and varying fees, finding the *right* card often feels overwhelming. Do you prioritize cashback, travel miles, low interest rates, or building credit? How do you cut through the marketing jargon to see what truly matters for *your* wallet?

**That's why we built CardCompass.**

We believe choosing a credit card shouldn't be a game of chance. CardCompass is your independent, easy-to-use navigator designed to bring clarity and confidence to your financial journey. We're here to simplify the complex, compare the options, and empower you to find the credit card that perfectly aligns with your spending habits, financial goals, and lifestyle.

**Our Mission:**

To demystify the credit card landscape, providing clear, unbiased information and intuitive tools that help everyone make smarter, more informed financial decisions.

**How CardCompass Guides You:**

*   **Simplified Search:** Tell us what's important to you – rewards, low APR, balance transfers, travel perks, or building credit – and we'll help narrow down the options.
*   **Clear Comparisons:** We lay out the essential details – fees, interest rates, rewards structures, sign-up bonuses, and key benefits – side-by-side, making it easy to weigh your choices.
*   **Unbiased Information:** We strive to present objective data, cutting through the hype to focus on the facts that impact your bottom line.
*   **Educational Resources:** Understanding terms like APR, credit scores, and balance transfers is crucial. We aim to provide resources that help you grasp these concepts. (Future goal/Implied value)

![CardCompass User](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/deac0abc-c078-484a-8896-463846d722a0/4c342534-6124-45e2-ab26-dddbf0459ad6.png/public)

**Who We Serve:**

CardCompass is for everyone seeking clarity in their credit card search:

*   **First-timers:** Getting your first card? We'll help you understand the basics and find a great starter option.
*   **Rewards Maximizers:** Looking to earn more points or cashback on your everyday spending? We'll help you compare programs.
*   **Travel Enthusiasts:** Seeking the best travel perks, lounge access, or airline/hotel points? Navigate the options here.
*   **Debt Managers:** Exploring balance transfer offers or low-interest cards to manage debt? Find cards designed to help.
*   **Credit Builders:** Need a card to establish or rebuild your credit history? We can point you in the right direction.

**Chart Your Course with Confidence:**

Stop feeling adrift in a sea of credit card offers. Let CardCompass be your guide. Start exploring, comparing, and find the card that’s truly right for you today.`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Samantha and her travel adventures",
    openGraph: {
      title: "About Me",
      description: "Learn more about Samantha and her travel adventures",
      images: [
        signOgImageUrl({
          title: "Samantha",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
