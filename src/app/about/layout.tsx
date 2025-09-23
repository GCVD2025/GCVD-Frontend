import { Footer } from "@/components";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default AboutLayout;
