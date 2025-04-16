"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'

interface Message {
  id: number
  content: string
  sender: "user" | "bot"
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your support assistant. How can I help you today?",
      sender: "bot",
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
    }
    setMessages([...messages, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input)
      const botMessage: Message = {
        id: messages.length + 2,
        content: botResponse,
        sender: "bot",
      }
      setMessages((prevMessages) => [...prevMessages, botMessage])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("symptom") || input.includes("pain") || input.includes("fatigue")) {
      return "It's important to track your symptoms. You can use the Symptom Tracker in the Wellness section to monitor changes over time."
    } else if (input.includes("appointment") || input.includes("doctor") || input.includes("schedule")) {
      return "You can schedule or view your appointments in the Appointments section. Your next appointment is with Dr. Johnson on May 15, 2025."
    } else if (input.includes("medication") || input.includes("medicine") || input.includes("drug")) {
      return "It's important to take your medications as prescribed. Would you like me to set up medication reminders for you?"
    } else if (input.includes("side effect")) {
      return "Side effects from treatment are common. Have you discussed these with your healthcare provider? I can help you log these symptoms for your next appointment."
    } else if (
      input.includes("diet") ||
      input.includes("nutrition") ||
      input.includes("food") ||
      input.includes("eat")
    ) {
      return "Proper nutrition is important during recovery. We have resources on nutrition after cancer treatment in the Resources section."
    } else if (input.includes("thank")) {
      return "You're welcome! I'm here to help with your recovery journey. Is there anything else you'd like to know?"
    } else if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! How are you feeling today? I'm here to help with any questions about your care plan or recovery."
    } else {
      return "I'm here to help with your cancer recovery journey. You can ask me about symptoms, appointments, medications, side effects, nutrition, or connecting with support groups."
    }
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  if (!isOpen) {
    return (
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faCommentDots} className="h-5 w-5" />
        Chat
      </Button>
    )
  }

  return (
    <div className="fixed bottom-0 right-6 w-80 md:w-96 shadow-xl z-50 rounded-t-lg overflow-hidden">
      {/* Chat header */}
      <div className="bg-emerald-500 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Support Chat</h2>
        <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-emerald-600">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Chat messages */}
      <div className="bg-white h-80 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender === "user" ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-800"
                }`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat input */}
      <div className="bg-white p-4 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 aspect-square p-2">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
