import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { PageFrame } from '@/components/layout/page-frame';
import { SiteHeader } from '@/components/layout/site-header';
import { Hero } from '@/components/home/hero';
import { ChartDecoration } from '@/components/home/chart-decoration';
import { CourseCard } from '@/components/cards/course-card';
import {
  NextJsMark,
  DockerMark,
  TypeScriptMark,
} from '@/components/brand/course-marks';

interface HomeCourse {
  title: string;
  slug: string;
  description: string;
  level: string;
  duration: string;
  modules: number;
  icon: React.ReactNode;
}

const courses: HomeCourse[] = [
  {
    title: 'Next.js for Production',
    slug: 'nextjs-for-production',
    description:
      'Build scalable, high-performance web applications with Next.js.',
    level: 'Intermediate',
    duration: '18h 24m',
    modules: 12,
    icon: <NextJsMark />,
  },
  {
    title: 'Docker Essentials',
    slug: 'docker-essentials',
    description:
      'Containerize applications and streamline your development workflow.',
    level: 'Beginner',
    duration: '10h 12m',
    modules: 8,
    icon: <DockerMark />,
  },
  {
    title: 'TypeScript Deep Dive',
    slug: 'typescript-deep-dive',
    description:
      'Go beyond the basics and write safer, more expressive code.',
    level: 'Intermediate',
    duration: '14h 36m',
    modules: 10,
    icon: <TypeScriptMark />,
  },
];

export default function Home() {
  return (
    <PageFrame>
      {/* Site Header */}
      <SiteHeader />

      <main className="flex flex-col flex-1 w-full">
        {/* Hero Section Container */}
        <div className="w-full max-w-[1440px] mx-auto">
          <Hero />
        </div>

        {/* Full-bleed Hairline Divider */}
        <div className="w-full border-b border-canvas-line dark:border-neutral-800" />

        {/* All Courses Section Container */}
        <div className="w-full max-w-[1440px] mx-auto">
          <section className="px-6 md:px-10 xl:px-12 pt-10 md:pt-14 pb-14 md:pb-16">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                All Courses
              </h2>
              <Link
                href="/courses"
                className="group inline-flex items-center gap-1.5 text-sm md:text-base font-medium text-primary-500 transition-colors hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 rounded-sm dark:hover:text-primary-400"
              >
                <span>View all courses</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Cards Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {courses.map((course) => (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  <CourseCard
                    layout="stacked"
                    title={course.title}
                    description={course.description}
                    level={course.level}
                    duration={course.duration}
                    modules={course.modules}
                    icon={course.icon}
                  />
                </Link>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-14 md:mt-16 flex items-center justify-center gap-3 before:h-px before:flex-1 before:bg-canvas-line after:h-px after:flex-1 after:bg-canvas-line dark:before:bg-neutral-800 dark:after:bg-neutral-800">
              <Star
                size={18}
                className="text-primary-500 fill-transparent shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm md:text-base font-normal text-neutral-600 dark:text-neutral-400 select-none">
                New courses and lessons added every week.
              </span>
            </div>
          </section>
        </div>

        {/* Bottom Chart Decoration Container */}
        <div className="w-full max-w-[1440px] mx-auto mt-auto">
          <ChartDecoration />
        </div>
      </main>
    </PageFrame>
  );
}
