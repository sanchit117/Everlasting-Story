import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { Calendar, BookOpen, Pen, Mic, PenTool, Share2 } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">How Everlasting Stories Works</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <Calendar className="w-12 h-12 mb-2 text-primary" />
            <CardTitle>1. Schedule Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Choose convenient times for your loved one to share their stories. We offer flexible options including in-person, video calls, or phone interviews to suit your family's needs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Mic className="w-12 h-12 mb-2 text-primary" />
            <CardTitle>2. Share Stories</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our AI interviewer guides the conversation with thoughtful, personalized prompts. It adapts to your loved one's responses, uncovering rich details and meaningful anecdotes about their life.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <PenTool className="w-12 h-12 mb-2 text-primary" />
            <CardTitle>3. Craft the Narrative</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our advanced AI technology transforms the interview transcripts into a cohesive, engaging biography. You'll have the opportunity to review and refine the content, ensuring every detail is perfect.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Pen className="w-12 h-12 mb-2 text-primary" />
            <CardTitle>4. Add Personal Touches</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Enhance the biography with family photos, documents, and additional anecdotes. Our platform makes it easy to upload and integrate these personal elements into the story.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <BookOpen className="w-12 h-12 mb-2 text-primary" />
            <CardTitle>5. Receive Your Biography</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Choose between a beautifully designed digital biography or a professionally printed book. Both options are crafted to preserve your family's legacy for generations to come.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Share2 className="w-12 h-12 mb-2 text-primary" />
            <CardTitle>6. Share and Celebrate</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Easily share the digital version with family members or gift the printed book. Celebrate your loved one's life story and create lasting connections across generations.</p>
          </CardContent>
        </Card>
      </div>
      <div className="bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">The Everlasting Stories Experience</h2>
        <div className="aspect-video relative">
          <Image src="/placeholder.svg" alt="Everlasting Stories Process" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <p className="mt-4 text-center">Our intuitive process ensures a meaningful and enjoyable experience for both storytellers and their families.</p>
      </div>
    </>
  )
}

