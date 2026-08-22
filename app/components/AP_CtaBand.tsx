import Image from "next/image";
import type { MethodContent } from "@/shared/types";
import AP_Button from "@/app/components/AP_Button";

export default function AP_CtaBand({ content }: { content: MethodContent }) {
  return (
    <section className="ap-ref-cta-band">
      <div className="container ap-ref-cta-band-inner">
        <div className="ap-ref-cta-mark"><Image src="/api/assets/logo/apex-mark.svg" alt="" width={66} height={52}/></div>
        <div><h2>Let&apos;s build the system<br/>your business can <span>grow on.</span></h2><p>{content.ctaBody}</p></div>
        <AP_Button contact>{content.cta}</AP_Button>
      </div>
    </section>
  );
}
