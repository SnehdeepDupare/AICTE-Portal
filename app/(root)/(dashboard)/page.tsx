import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="relative max-w-screen h-96">
        <Image
          src="/assets/images/heroImage.jpg"
          alt="heroImage"
          className="object-cover"
          fill
          priority
        />
      </div>

      <section className="max-w-7xl mx-auto mt-12 p-5 pb-24">
        <h1 className="font-bold text-4xl">Who are we?</h1>
        <p className="text-justify mt-5">
          The All India Council for Technical Education (AICTE) plays a vital
          role in shaping the quality of technical education in India by
          formulating and upholding curriculum standards. To advance this
          mission, AICTE has developed a unified portal with a wide array of
          essential functionalities. This web platform serves as a collaborative
          hub for educational experts and curriculum designers, where they can
          collectively create and refine model curricula for institutions across
          the country. The portal offers an array of features, beginning with
          user registration and authentication to ensure that educators,
          curriculum developers, and administrators have secure access to its
          capabilities. Once logged in, users are greeted with personalized
          dashboards that cater to their specific roles and preferences. These
          dashboards provide easy access to a suite of tools designed to
          streamline curriculum development.
        </p>
      </section>
    </main>
  );
}
