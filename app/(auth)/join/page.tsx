import SplitLayout from "@/components/layout/split-layout";
import HeroSection from "@/components/layout/hero-section";
import SignupForm from "@/components/auth/signup-form";

export default function JoinPage() {
  return (
    <SplitLayout
      left={
        <HeroSection
          title="Creation starts here"
          description="Access 5,825,610 free, high-resolution photos you can't find anywhere else."
          imageCredit="Uploaded on February 20, 2025 by Roman Melnychuk"
          imageSrc="/images/background-join.png"
        />
      }
      right={<SignupForm />}
    />
  );
}
