import { useState } from 'react'
import Layout from '@/components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Mic, Type, ChevronLeft, ChevronRight, Pause, Save, HelpCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function InterviewPage() {
  const [currentQuestion, setCurrentQuestion] = useState("Tell me about your first job.")

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Life Story Interview</h1>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center justify-between">
              {currentQuestion}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This question helps us understand your early work experiences and how they shaped your life.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-4 mb-4">
              <Button variant="outline" size="lg">
                <Mic className="w-6 h-6 mr-2" />
                Voice Answer
              </Button>
              <Button variant="outline" size="lg">
                <Type className="w-6 h-6 mr-2" />
                Text Answer
              </Button>
            </div>
            <Textarea placeholder="Your answer will appear here..." className="min-h-[200px] text-lg" />
            <div className="flex justify-between mt-4">
              <Button variant="outline">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary">
            <Pause className="w-4 h-4 mr-2" />
            Pause Interview
          </Button>
          <Button variant="secondary">
            <Save className="w-4 h-4 mr-2" />
            Save Progress
          </Button>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Your privacy is important to us. All responses are encrypted and stored securely.</p>
          <p>Take your time and feel free to pause or save your progress at any point.</p>
        </div>
      </div>
    </Layout>
  )
}

