import { PropsWithChildren, memo } from "react";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

const Page = memo(({ children }: PropsWithChildren) => {
  return (
    <div className="bg-background text-foreground dark page-layout h-dvh">
      <Header />
      <div className="mx-[20%] my-5">{children}</div>
      <Footer />
    </div>
  );
});

Page.displayName = "Page";

export default Page;
