"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "./theme-toggle"

export function StyleGuide() {
  return (
    <div className="container py-10 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Style Guide</h1>
        <ThemeToggle />
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="Primary" color="bg-primary text-primary-foreground" />
          <ColorSwatch name="Secondary" color="bg-secondary text-secondary-foreground" />
          <ColorSwatch name="Accent" color="bg-accent text-accent-foreground" />
          <ColorSwatch name="Muted" color="bg-muted text-muted-foreground" />
          <ColorSwatch name="Background" color="bg-background text-foreground border" />
          <ColorSwatch name="Card" color="bg-card text-card-foreground border" />
          <ColorSwatch name="Destructive" color="bg-destructive text-destructive-foreground" />
          <ColorSwatch name="Border" color="bg-border text-foreground" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-20 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-medium">
            Primary to Accent
          </div>
          <div className="h-20 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center text-white font-medium">
            Accent to Primary
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-bold">Heading 2</h2>
            <h3 className="text-2xl font-bold">Heading 3</h3>
            <h4 className="text-xl font-bold">Heading 4</h4>
            <h5 className="text-lg font-bold">Heading 5</h5>
            <h6 className="text-base font-bold">Heading 6</h6>
          </div>
          <div>
            <p className="text-base">
              Base text paragraph with{" "}
              <a href="#" className="text-primary hover:underline">
                link
              </a>
            </p>
            <p className="text-sm">Small text paragraph</p>
            <p className="text-xs">Extra small text paragraph</p>
            <p className="text-muted-foreground">Muted text paragraph</p>
          </div>
          <div>
            <p className="text-gradient text-2xl font-bold">Gradient Text</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Buttons</h3>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Badges</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cards</h3>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Card content goes here.</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Form Elements</h3>
            <div className="space-y-2">
              <Label htmlFor="example">Input Label</Label>
              <Input id="example" placeholder="Input placeholder" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Section Styles</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Section Header</h3>
            <div className="flex flex-col items-center">
              <div className="section-subheading">Section Label</div>
              <h2 className="section-heading">Section Title</h2>
              <div className="section-divider"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ColorSwatch({ name, color }: { name: string; color: string }) {
  return (
    <div className="space-y-2">
      <div className={`h-20 rounded-lg ${color} flex items-center justify-center`}>{name}</div>
      <p className="text-sm font-medium text-center">{name}</p>
    </div>
  )
}

