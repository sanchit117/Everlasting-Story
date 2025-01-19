import Layout from '@/components/layout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">Support & FAQs for Everlasting Stories</h1>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What if my parent isn't good with technology?</AccordionTrigger>
            <AccordionContent>
              Our app is designed to be user-friendly for all ages. We offer options for in-person interviews, phone calls, or simplified tablet interfaces. Our team can also provide personal assistance if needed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How long does the process take?</AccordionTrigger>
            <AccordionContent>
              The interview process typically takes 3-5 sessions of about an hour each. After the interviews are complete, we deliver the first draft of the biography within 2 weeks. The entire process, including revisions and book printing (if selected), usually takes 4-6 weeks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can we include photos in the biography?</AccordionTrigger>
            <AccordionContent>
              You can easily upload and integrate photos into both the digital and physical versions of the biography. Our team can also assist with photo scanning and restoration if needed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is our family's information kept private?</AccordionTrigger>
            <AccordionContent>
              Yes, we take privacy very seriously. All interviews and personal information are encrypted and stored securely. You have full control over who can access the digital biography, and we never share your information with third parties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can we make changes after the biography is complete?</AccordionTrigger>
            <AccordionContent>
              Yes, the digital biography can be edited at any time. For physical books, we offer one round of revisions before printing. Additional revisions or reprints can be purchased if needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  )
}

