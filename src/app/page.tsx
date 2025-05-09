import { BlogPostsPreview } from "@/components/BlogPostPreview";
import { BlogPostsPagination } from "@/components/BlogPostsPagination";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { wisp } from "@/lib/wisp";
import Image from "next/image"; // Import NextImage

const Page = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  const result = await wisp.getPosts({ limit: 6, page });
  return (
    <>
      <Header />
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/cardcompass-banner-image.jpeg" // Replace with your actual banner image
          alt="CardCompass Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center p-5">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Navigate Your Financial Life with CardCompass
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Your trusted source for insights on credit cards, personal finance,
            and making smarter financial decisions.
          </p>
          {/* You can add a CTA button here if needed */}
        </div>
      </div>

      <div className="container mx-auto px-5 my-10">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Welcome to CardCompass
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At CardCompass, we&apos;re dedicated to demystifying the world of
            finance. Whether you&apos;re looking for the best credit card to
            suit your lifestyle, seeking advice on managing your personal
            budget, or aiming to understand complex financial topics, our expert
            articles and guides are here to help you navigate with confidence.
            We believe that with the right information, everyone can achieve
            their financial goals.
          </p>
        </section>

        <BlogPostsPreview posts={result.posts} />
        <BlogPostsPagination pagination={result.pagination} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
