import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, Mic, PenTool } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
        <h1 className="text-5xl font-bold mb-6">Preserve Your Family's Legacy</h1>
        <p className="text-xl mb-8 max-w-2xl">Everlasting Stories uses AI to create beautiful, personalized biographies of your loved ones, ensuring their memories live on for generations.</p>
        <Button size="lg" asChild>
          <Link href="/interview">
            Start Your Family Story
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="py-16 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Mic className="w-12 h-12 mb-2 text-primary" />
                <CardTitle>1. Share Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Participate in AI-guided interviews that capture the essence of your loved one's life experiences.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PenTool className="w-12 h-12 mb-2 text-primary" />
                <CardTitle>2. Craft the Narrative</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our AI transforms interviews into a cohesive, engaging biography, which you can review and refine.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-2 text-primary" />
                <CardTitle>3. Preserve the Legacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Receive a beautifully designed digital biography or printed book to treasure and share.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">What Families Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sarah J.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">"Everlasting Stories helped us capture Dad's memories in a way we never could have on our own. It's a treasure we'll cherish forever."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Robert M., 78</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">"I was hesitant at first, but the process was so easy and enjoyable. Now I have a beautiful book of my life to share with my grandchildren."</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Emily T.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">"The AI-guided interviews asked questions I never thought to ask. We discovered so many amazing stories about Mom's life."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-16 bg-muted text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Preserve Your Family's Legacy?</h2>
        <Button size="lg" asChild>
          <Link href="/interview">
            Get Started Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

