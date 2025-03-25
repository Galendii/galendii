import type React from "react";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/api";
import { saveEmailData } from "@/lib/services/email";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        // Send email
        await saveEmailData({
          email,
          subject,
          name,
          message,
        });
        await sendEmail({ email, name, subject, message });

        // Show success toast
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });

        setIsSubmitted(true);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
        setError(true);
      } finally {
        setIsSubmitting(false);

        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          e.currentTarget.reset();
        }, 3000);
      }
    },
    [email, name, subject, message, toast, saveEmailData]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-card border border-border/50 shadow-lg"
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900"
          >
            {error ? (
              <XCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
            ) : (
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
            )}
          </motion.div>
          {error ? (
            <>
              <h3 className="text-xl font-semibold mb-2">
                It seems our mailing system is out
              </h3>
              <p className="text-muted-foreground">
                Please try again later or contact me through my social medias.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                required
                className="border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Project inquiry"
              required
              className="border-border/50 focus:border-primary focus:ring-1 focus:ring-primary"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              rows={6}
              required
              className="border-border/50 focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                Sending...
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="ml-2"
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </span>
            ) : (
              <span className="flex items-center">
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </span>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
