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
      {/* Banner takes full viewport width and a bit more height */}
      <div className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/images/cardcompass-banner-image.jpeg"
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
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl">
            Your trusted source for insights on credit cards, personal finance,
            and making smarter financial decisions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5 my-10">
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Welcome to CardCompass
          </h2>

          {/* Section 1: Image on Left, Text on Right */}
          <div className="flex flex-col md:flex-row items-center mb-12 md:mb-16">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <Image
                src="https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/deac0abc-c078-484a-8896-463846d722a0/cb7b97ad-cfb8-4cc9-ad72-1e9b7958d930.png/public"
                alt="Demystifying Finance"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-6 text-left">
              <h3 className="text-2xl font-semibold mb-3">
                Expert Insights, Simplified
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At CardCompass, we&apos;re dedicated to demystifying the world
                of finance. Whether you&apos;re looking for the best credit card
                to suit your lifestyle or seeking advice on managing your
                personal budget, our expert articles are here to guide you.
              </p>
            </div>
          </div>

          {/* Section 2: Text on Left, Image on Right */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 md:mb-16">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pl-6">
              <Image
                src="https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/deac0abc-c078-484a-8896-463846d722a0/e55fa830-862d-4adc-8cf9-80854f78b3bb.png/public"
                alt="Achieve Your Financial Goals"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-6 text-left">
              <h3 className="text-2xl font-semibold mb-3">
                Navigate with Confidence
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aiming to understand complex financial topics? Our guides are
                here to help you navigate with confidence. We believe that with
                the right information, everyone can achieve their financial
                goals and make smarter decisions for a secure future.
              </p>
            </div>
          </div>
        </section>

        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Latest Articles
        </h2>
        <BlogPostsPreview posts={result.posts} />
        <BlogPostsPagination pagination={result.pagination} />
      </div>
      <Footer />
    </>
  );
};

export default Page;
