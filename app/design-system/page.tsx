import {
  Search,
  Bell,
  Play,
  FileText,
  Bookmark,
  BarChart3,
  Clock,
  User,
  ChevronRight,
  ExternalLink,
  FolderOpen,
  Target,
  Eye,
  LayoutGrid,
  Accessibility,
  Layers,
} from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Navbar } from "@/components/nav/navbar";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { Pagination } from "@/components/nav/pagination";

/* ──────────────────────────────────────────────
   Section wrapper
   ────────────────────────────────────────────── */

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-neutral-200 pt-10 pb-12">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-small font-semibold uppercase tracking-widest text-primary-500">
          {number}
        </span>
        <h2 className="text-heading-2 text-neutral-900 uppercase tracking-wide">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

/* ──────────────────────────────────────────────
   Color swatch
   ────────────────────────────────────────────── */

function Swatch({
  name,
  hex,
  className,
}: {
  name: string;
  hex: string;
  className: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`h-16 w-24 rounded-md ${className}`} />
      <span className="text-small font-medium text-neutral-900">{name}</span>
      <span className="text-small text-neutral-500">{hex}</span>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */

export default function DesignSystemPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 py-12">
      {/* ── Header ── */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Logo size="lg" />
        </div>
        <h1 className="text-display-1 text-neutral-900 mt-2">
          Design System
        </h1>
        <p className="mt-3 max-w-lg text-body-lg text-neutral-500">
          A unified design language for Vertex learning platform. Clean, modern
          and focused on clarity, consistency and intuitive learning experiences.
        </p>
        <p className="mt-4 text-small text-neutral-500 uppercase tracking-widest">
          Version 1.0 &middot; May 2025
        </p>
      </header>

      {/* ── 01 Colors ── */}
      <Section number="01" title="Colors">
        <h3 className="text-heading-3 text-neutral-900 mb-4">Primary</h3>
        <div className="flex flex-wrap gap-6 mb-8">
          <Swatch name="Primary 500" hex="#F97316" className="bg-primary-500" />
          <Swatch name="Primary 400" hex="#FB923C" className="bg-primary-400" />
          <Swatch name="Primary 300" hex="#FDBA74" className="bg-primary-300" />
          <Swatch name="Primary 200" hex="#FED7AA" className="bg-primary-200" />
          <Swatch name="Primary 100" hex="#FFEEE5" className="bg-primary-100" />
        </div>
        <h3 className="text-heading-3 text-neutral-900 mb-4">Neutral</h3>
        <div className="flex flex-wrap gap-6">
          <Swatch
            name="Neutral 900"
            hex="#0F172A"
            className="bg-neutral-900"
          />
          <Swatch
            name="Neutral 700"
            hex="#334155"
            className="bg-neutral-700"
          />
          <Swatch
            name="Neutral 500"
            hex="#64748B"
            className="bg-neutral-500"
          />
          <Swatch
            name="Neutral 300"
            hex="#CBD5E1"
            className="bg-neutral-300"
          />
          <Swatch
            name="Neutral 200"
            hex="#E2E8F0"
            className="bg-neutral-200"
          />
          <Swatch
            name="Neutral 100"
            hex="#F1F5F9"
            className="bg-neutral-100"
          />
          <Swatch name="Neutral 50" hex="#FAFAFC" className="bg-neutral-50" />
          <Swatch
            name="White"
            hex="#FFFFFF"
            className="bg-white border border-neutral-200"
          />
        </div>
      </Section>

      {/* ── 02 Typography ── */}
      <Section number="02" title="Typography">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-display-1 text-neutral-900">Ag</p>
            <p className="mt-2 text-heading-2 font-display text-neutral-900">
              Playfair Display
            </p>
            <p className="mt-1 text-body text-neutral-500">
              Elegant &middot; Readable &middot; Timeless
            </p>
          </div>
          <div>
            <p className="text-display-1 font-sans text-neutral-900">Ag</p>
            <p className="mt-2 text-heading-2 text-neutral-900">Inter</p>
            <p className="mt-1 text-body text-neutral-500">
              Clean &middot; Modern &middot; Highly legible
            </p>
          </div>
        </div>
      </Section>

      {/* ── 03 Type Scale ── */}
      <Section number="03" title="Type Scale">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-body">
            <thead>
              <tr className="border-b border-neutral-200 text-small font-semibold text-neutral-500">
                <th className="pb-3 pr-4">Style</th>
                <th className="pb-3 pr-4">Font</th>
                <th className="pb-3 pr-4">Size / Line Height</th>
                <th className="pb-3 pr-4">Weight</th>
                <th className="pb-3">Use</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="py-3 pr-4 text-heading-3">Display 1</td>
                <td className="py-3 pr-4">Playfair Display</td>
                <td className="py-3 pr-4">48 / 56</td>
                <td className="py-3 pr-4">Bold</td>
                <td className="py-3">Page titles</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-3 pr-4 text-heading-3">Display 2</td>
                <td className="py-3 pr-4">Playfair Display</td>
                <td className="py-3 pr-4">36 / 44</td>
                <td className="py-3 pr-4">Bold</td>
                <td className="py-3">Section titles</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-3 pr-4 text-heading-3">Heading 1</td>
                <td className="py-3 pr-4">Inter</td>
                <td className="py-3 pr-4">28 / 36</td>
                <td className="py-3 pr-4">Semi Bold</td>
                <td className="py-3">Card titles</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-3 pr-4 text-heading-3">Heading 2</td>
                <td className="py-3 pr-4">Inter</td>
                <td className="py-3 pr-4">22 / 30</td>
                <td className="py-3 pr-4">Semi Bold</td>
                <td className="py-3">Sub section</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-3 pr-4 text-heading-3">Heading 3</td>
                <td className="py-3 pr-4">Inter</td>
                <td className="py-3 pr-4">18 / 26</td>
                <td className="py-3 pr-4">Medium</td>
                <td className="py-3">Small titles</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-3 pr-4 text-heading-3">Body Large</td>
                <td className="py-3 pr-4">Inter</td>
                <td className="py-3 pr-4">16 / 24</td>
                <td className="py-3 pr-4">Regular</td>
                <td className="py-3">Body copy</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-3 pr-4 text-heading-3">Body</td>
                <td className="py-3 pr-4">Inter</td>
                <td className="py-3 pr-4">14 / 20</td>
                <td className="py-3 pr-4">Regular</td>
                <td className="py-3">Supporting text</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-heading-3">Small</td>
                <td className="py-3 pr-4">Inter</td>
                <td className="py-3 pr-4">12 / 16</td>
                <td className="py-3 pr-4">Regular</td>
                <td className="py-3">Captions, meta</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 04 Spacing System ── */}
      <Section number="04" title="Spacing System">
        <p className="text-body text-neutral-500 mb-6">Base unit: 4px</p>
        <div className="flex flex-wrap items-end gap-6">
          {[
            { px: 4, rem: "0.25rem" },
            { px: 8, rem: "0.5rem" },
            { px: 12, rem: "0.75rem" },
            { px: 16, rem: "1rem" },
            { px: 24, rem: "1.5rem" },
            { px: 32, rem: "2rem" },
            { px: 40, rem: "2.5rem" },
            { px: 48, rem: "3rem" },
            { px: 64, rem: "4rem" },
          ].map(({ px, rem }) => (
            <div key={px} className="flex flex-col items-center gap-2">
              <div
                className="rounded-xs bg-primary-500 opacity-30"
                style={{ width: px, height: px }}
              />
              <span className="text-small font-medium text-neutral-900">
                {px}
              </span>
              <span className="text-small text-neutral-500">({rem})</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 05 Radius & Shadows ── */}
      <Section number="05" title="Radius & Shadows">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Radius */}
          <div>
            <h3 className="text-heading-3 text-neutral-900 mb-4">Radius</h3>
            <div className="flex flex-wrap gap-6">
              {[
                { name: "4px", cls: "rounded-xs" },
                { name: "8px", cls: "rounded-sm" },
                { name: "12px", cls: "rounded-md" },
                { name: "16px", cls: "rounded-lg" },
                { name: "24px", cls: "rounded-xl" },
                { name: "Full", cls: "rounded-full" },
              ].map(({ name, cls }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div
                    className={`h-16 w-16 border-2 border-primary-500 bg-primary-100 ${cls}`}
                  />
                  <span className="text-small text-neutral-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Shadows */}
          <div>
            <h3 className="text-heading-3 text-neutral-900 mb-4">Shadows</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "Sm",
                  cls: "shadow-sm",
                  value: "0 1px 2px 0\nrgba(15, 23, 42, 0.05)",
                },
                {
                  name: "Md",
                  cls: "shadow-md",
                  value: "0 4px 12px -2px\nrgba(15, 23, 42, 0.08)",
                },
                {
                  name: "Lg",
                  cls: "shadow-lg",
                  value: "0 12px 24px -4px\nrgba(15, 23, 42, 0.10)",
                },
                {
                  name: "Xl",
                  cls: "shadow-xl",
                  value: "0 20px 40px -8px\nrgba(15, 23, 42, 0.12)",
                },
              ].map(({ name, cls, value }) => (
                <div
                  key={name}
                  className={`rounded-lg bg-white p-4 border border-neutral-100 ${cls}`}
                >
                  <p className="text-heading-3 text-neutral-900">{name}</p>
                  <p className="mt-1 text-small text-neutral-500 whitespace-pre-line">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 06 Icons ── */}
      <Section number="06" title="Icons">
        <div className="space-y-6">
          <div>
            <h3 className="text-body font-medium text-neutral-700 mb-3">
              Outline Style
            </h3>
            <div className="flex flex-wrap gap-4 text-neutral-700">
              <Search size={24} />
              <Bell size={24} />
              <Play size={24} />
              <FileText size={24} />
              <Bookmark size={24} />
              <BarChart3 size={24} />
              <Clock size={24} />
              <User size={24} />
              <ChevronRight size={24} />
              <ExternalLink size={24} />
              <FolderOpen size={24} />
              <Target size={24} />
              <Eye size={24} />
              <LayoutGrid size={24} />
              <Accessibility size={24} />
              <Layers size={24} />
            </div>
          </div>
          <div>
            <h3 className="text-body font-medium text-neutral-700 mb-3">
              Filled Style
            </h3>
            <div className="flex flex-wrap gap-4 text-neutral-900">
              <Search size={24} fill="currentColor" strokeWidth={0} />
              <Bell size={24} fill="currentColor" strokeWidth={0} />
              <Play size={24} fill="currentColor" strokeWidth={0} />
              <FileText size={24} fill="currentColor" strokeWidth={0} />
              <Bookmark size={24} fill="currentColor" strokeWidth={0} />
              <BarChart3 size={24} fill="currentColor" strokeWidth={0} />
              <Clock size={24} fill="currentColor" strokeWidth={0} />
              <User size={24} fill="currentColor" strokeWidth={0} />
              <ChevronRight size={24} fill="currentColor" strokeWidth={0} />
              <ExternalLink size={24} fill="currentColor" strokeWidth={0} />
              <FolderOpen size={24} fill="currentColor" strokeWidth={0} />
              <Target size={24} fill="currentColor" strokeWidth={0} />
              <Eye size={24} fill="currentColor" strokeWidth={0} />
              <LayoutGrid size={24} fill="currentColor" strokeWidth={0} />
              <Accessibility size={24} fill="currentColor" strokeWidth={0} />
              <Layers size={24} fill="currentColor" strokeWidth={0} />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-body font-medium text-neutral-700 mb-2">
              Icon Specs
            </h3>
            <ul className="list-disc pl-5 text-body text-neutral-500 space-y-1">
              <li>24x24px grid</li>
              <li>2px stroke width (outline)</li>
              <li>Rounded line caps</li>
              <li>Consistent optical balance</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 07 Buttons ── */}
      <Section number="07" title="Buttons">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-small font-semibold text-neutral-500">
                <th className="pb-3 pr-4 w-24" />
                <th className="pb-3 pr-4">Primary</th>
                <th className="pb-3 pr-4">Secondary</th>
                <th className="pb-3 pr-4">Tertiary</th>
                <th className="pb-3">Text</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 pr-4 text-body font-medium text-neutral-700">
                  Default
                </td>
                <td className="py-3 pr-4">
                  <Button variant="primary">Get Started</Button>
                </td>
                <td className="py-3 pr-4">
                  <Button variant="secondary">Explore Courses</Button>
                </td>
                <td className="py-3 pr-4">
                  <Button variant="tertiary">
                    View Lesson <ExternalLink size={14} />
                  </Button>
                </td>
                <td className="py-3">
                  <Button variant="text">
                    Watch Video <Play size={14} fill="currentColor" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-body font-medium text-neutral-700">
                  Hover
                </td>
                <td className="py-3 pr-4">
                  <Button variant="primary" className="bg-primary-600">
                    Get Started
                  </Button>
                </td>
                <td className="py-3 pr-4">
                  <Button variant="secondary" className="bg-primary-100">
                    Explore Courses
                  </Button>
                </td>
                <td className="py-3 pr-4">
                  <Button variant="tertiary" className="bg-neutral-50">
                    View Lesson <ExternalLink size={14} />
                  </Button>
                </td>
                <td className="py-3">
                  <Button variant="text">
                    Watch Video <Play size={14} fill="currentColor" />
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 text-body font-medium text-neutral-700">
                  Disabled
                </td>
                <td className="py-3 pr-4">
                  <Button variant="primary" disabled>
                    Get Started
                  </Button>
                </td>
                <td className="py-3 pr-4">
                  <Button variant="secondary" disabled>
                    Explore Courses
                  </Button>
                </td>
                <td className="py-3 pr-4">
                  <Button variant="tertiary" disabled>
                    View Lesson <ExternalLink size={14} />
                  </Button>
                </td>
                <td className="py-3">
                  <Button variant="text" disabled>
                    Watch Video <Play size={14} fill="currentColor" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h3 className="text-body font-medium text-neutral-700 mb-2">
            Button Specs
          </h3>
          <ul className="list-disc pl-5 text-body text-neutral-500 space-y-1">
            <li>Height: 44px (default)</li>
            <li>Padding: 0 16px (lg), 0 12px (md)</li>
            <li>Font: Inter Medium (14–16px)</li>
          </ul>
        </div>
      </Section>

      {/* ── 08 Inputs ── */}
      <Section number="08" title="Inputs">
        <div className="grid gap-8 md:grid-cols-2 max-w-2xl">
          <div>
            <h3 className="text-body font-medium text-neutral-700 mb-3">
              Search / Text Input
            </h3>
            <SearchInput />
          </div>
          <div>
            <h3 className="text-body font-medium text-neutral-700 mb-3">
              Select
            </h3>
            <Select
              options={[
                { value: "most-relevant", label: "Most Relevant" },
                { value: "newest", label: "Newest" },
                { value: "popular", label: "Most Popular" },
              ]}
              defaultValue="most-relevant"
            />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-body font-medium text-neutral-700 mb-2">
            Field Specs
          </h3>
          <ul className="list-disc pl-5 text-body text-neutral-500 space-y-1">
            <li>Height: 44px</li>
            <li>Radius: 12px</li>
            <li>Border: 1px solid #E2E8F0</li>
            <li>Padding: 0 16px</li>
            <li>Focus: Border color #FB923C</li>
          </ul>
        </div>
      </Section>

      {/* ── 09 Badges / Tags ── */}
      <Section number="09" title="Badges / Tags">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Badge variant="video">VIDEO</Badge>
            <span className="text-small text-neutral-500">Video</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="lesson">LESSON</Badge>
            <span className="text-small text-neutral-500">Lesson</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Badge variant="popular">POPULAR</Badge>
            <span className="text-small text-neutral-500">Popular</span>
          </div>
        </div>
      </Section>

      {/* ── 10 Status / Indicators ── */}
      <Section number="10" title="Status / Indicators">
        <div className="flex flex-wrap items-center gap-8">
          <StatusIndicator variant="in-progress" />
          <StatusIndicator variant="completed" />
          <StatusIndicator variant="now-playing" />
          <StatusIndicator variant="locked" />
        </div>
      </Section>

      {/* ── 11 Progress Bar ── */}
      <Section number="11" title="Progress Bar">
        <div className="max-w-md">
          <ProgressBar value={35} />
        </div>
      </Section>

      {/* ── 12 Cards ── */}
      <Section number="12" title="Cards">
        <div className="grid gap-6 md:grid-cols-2">
          <CourseCard
            title="Next.js for Production"
            description="Build scalable, high-performance web applications with Next.js."
            level="Intermediate"
            duration="19h 24m"
            modules={12}
          />
          <LessonVideoCard
            title="Data Fetching in Server Components"
            description="Learn how to fetch data on the server using async/await and Next.js best practices."
            lessonLabel="Lesson 5.1"
            duration="12:45"
            timestamp="12:45"
          />
          <LessonCard
            title="Data Fetching & Caching"
            description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
            moduleLabel="Module 5"
          />
          <ResourceCard
            title="Caching and Revalidation Guide"
            description="Deep dive into Next.js caching strategies."
            fileType="PDF"
            fileSize="1.2 MB"
          />
        </div>
      </Section>

      {/* ── 13 Navigation ── */}
      <Section number="13" title="Navigation">
        <div className="space-y-8">
          <Navbar
            links={[
              { label: "Courses", href: "#", active: true },
              { label: "My Learning", href: "#" },
            ]}
          />
          <div>
            <h3 className="text-body font-medium text-neutral-700 mb-3">
              Breadcrumbs
            </h3>
            <Breadcrumbs
              items={[
                { label: "All Courses", href: "#" },
                { label: "Next.js for Production", href: "#" },
                { label: "Data Fetching & Caching" },
              ]}
            />
          </div>
          <div>
            <h3 className="text-body font-medium text-neutral-700 mb-3">
              Pagination
            </h3>
            <Pagination currentPage={1} totalPages={8} />
          </div>
        </div>
      </Section>

      {/* ── 14 Principles ── */}
      <Section number="14" title="Principles">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Eye size={24} className="text-primary-500" />,
              title: "Clarity First",
              description:
                "Every element should communicate clearly.",
            },
            {
              icon: <LayoutGrid size={24} className="text-primary-500" />,
              title: "Consistency",
              description:
                "Use components and patterns consistently across the platform.",
            },
            {
              icon: <Target size={24} className="text-primary-500" />,
              title: "Focus & Calm",
              description:
                "Remove noise and help learners focus on what matters.",
            },
            {
              icon: <Accessibility size={24} className="text-primary-500" />,
              title: "Accessible",
              description:
                "Design with accessibility and inclusivity in mind.",
            },
          ].map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-100">
                {icon}
              </div>
              <h3 className="text-heading-3 text-neutral-900">{title}</h3>
              <p className="text-body text-neutral-500">{description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

