"use client"
import Image from "next/image";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 style={{marginTop: "-25px"}}>FAQ</h1>
      <div style={{width: "70%", position: "absolute", top: "320px"}}>
        <Accordion className="greenBg" variant="shadow">
          <AccordionItem key="1" aria-label="Accordion 1" title="What is the typical process for getting a tattoo?">
            The typical process involves consultation, design selection, tattooing, and aftercare. During the consultation, we discuss your ideas and preferences. Once the design is finalized, we proceed with tattooing, which involves outlining, shading, and coloring. Aftercare instructions are provided to ensure proper healing.
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="How do I choose the right tattoo design?">
            Choosing the right design involves considering personal significance, style preferences, and placement. I can offer guidance and create custom designs based on your ideas and inspiration.
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Is it painful to get a tattoo?">
            Pain tolerance varies among individuals, but most people experience some level of discomfort during tattooing. However, I use techniques to minimize discomfort, and many clients find the pain manageable.
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="How long does it take for a tattoo to heal?">
            Healing time varies depending on factors such as tattoo size, location, and individual healing ability. Generally, it takes about 2-3 weeks for a tattoo to fully heal, during which proper aftercare is crucial.
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
