import Layout from '@/components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import { BookOpen, Smartphone, PenTool } from 'lucide-react'

export default function PreviewPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-center">Your Everlasting Story</h1>
      <Tabs defaultValue="digital" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="digital">
            <Smartphone className="w-4 h-4 mr-2" />
            Digital Biography
          </TabsTrigger>
          <TabsTrigger value="physical">
            <BookOpen className="w-4 h-4 mr-2" />
            Physical Book
          </TabsTrigger>
        </TabsList>
        <TabsContent value="digital">
          <Card>
            <CardHeader>
              <CardTitle>Digital Biography Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4">
                <Image src="/placeholder.svg" alt="Digital Biography Preview" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <p className="mb-4">Your digital biography includes interactive elements, photo galleries, and easy sharing options.</p>
              <Button>
                <PenTool className="w-4 h-4 mr-2" />
                Customize Digital Biography
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="physical">
          <Card>
            <CardHeader>
              <CardTitle>Physical Book Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video relative mb-4">
                <Image src="/placeholder.svg" alt="Physical Book Preview" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>
              <p className="mb-4">Your physical book is professionally printed and bound, perfect for sharing and preserving your family's legacy.</p>
              <Button>
                <PenTool className="w-4 h-4 mr-2" />
                Customize Physical Book
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}

