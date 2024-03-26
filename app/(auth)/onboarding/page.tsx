import OnboardingForm from "@/components/forms/OnboardingForm";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";

async function OnboardingPage() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    name: userInfo?.name || "",
    email: userInfo?.email || user?.email || "",
    role: userInfo?.role,
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="flex flex-col justify-start h-full w-full p-10 max-w-3xl mx-auto">
      <div>
        <div className="flex items-center space-x-2 justify-center">
          <Image
            src="/assets/images/aicteLogo.png"
            alt="logo"
            height={72}
            width={72}
          />
          <h2 className="font-bold text-lg hidden md:block">
            All India Council for Technical Education
          </h2>
        </div>

        <div className="mt-6">
          <h1 className="font-bold text-2xl">Onboarding</h1>
          <h3>Complete your profile to proceed.</h3>
        </div>
      </div>

      <section className="bg-gray-300 p-5 rounded-xl mt-10">
        <OnboardingForm user={userData} />
      </section>
    </main>
  );
}
export default OnboardingPage;
