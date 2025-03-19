"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Logo } from "../logo"
import type { Profile } from "@/types"

interface FooterSectionProps {
  profile: Profile
}

export function FooterSection({ profile }: FooterSectionProps) {
  return (
    <footer className="py-8 border-t bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container flex flex-col items-center justify-between px-4 md:flex-row md:px-8">
        <div className="mb-4 md:mb-0">
          <Logo />
          <p className="mt-2 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
            <Link href={profile.socialLinks.github} target="_blank" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
            <Link href={profile.socialLinks.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
            <Link href={`mailto:${profile.socialLinks.email}`} aria-label="Email">
              <Mail className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

