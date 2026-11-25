import { Cta } from "@/components/sections/cta";
import { DetailPreview } from "@/components/sections/detail-preview";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { Proof } from "@/components/sections/proof";
import { Workflow } from "@/components/sections/workflow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Proof />
      <Features />
      <Workflow />
      <DetailPreview />
      <Cta />
    </>
  );
}
