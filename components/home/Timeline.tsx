"use client";
import TimelineItem from "./TimelineItem";
import Link from "next/link";

type EventType = {
  id: string;
  year: string;
  title: string;
  highlight?: boolean;
};

const Events: EventType[] = [
  { id: "0", year: "2026", title: "TBA ", highlight: true },
  { id: "1", year: "2025", title: "Luminescense "},
  { id: "2", year: "2024", title: "Urban Maze" },
  { id: "3", year: "2023", title: "Feed"},
  { id: "4", year: "2022", title: "Happy Medium" },
  { id: "5", year: "2021", title: "Incentive"},
  { id: "7", year: "2019", title: "The Age of Smupid",},
  { id: "8", year: "2018", title: "Elephant in The Room",},
  { id: "9", year: "2017", title: "Break The Pattern", },
  { id: "10", year: "2016", title: "Frameworks", },
];

export default function Timeline({ events = Events }: { events?: EventType[] }) {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-5xl lg:text-7xl font-bold mb-16">Our History</h2>
      
      {/* Desktop Timeline - Hidden on mobile */}
      <div className="hidden md:block relative">
        {/* Vertical dashed line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-700" />
        
        {/* Timeline items */}
        <div className="space-y-24">
          {events.map((ev, idx) => {
            const side = idx % 2 === 0 ? "right" : "left";
            return (
              <div key={ev.id} className="relative flex items-center">
                {/* Left side content */}
                <div className={`w-1/2 ${side === "left" ? "pr-12 text-right" : ""}`}>
                  {side === "left" && <Link href={`/about/history?event=${ev.year}`}>
  <TimelineItem event={ev} side={side} />
</Link>}
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-red-500 border-gray-700" />
                </div>
                
                {/* Right side content */}
                <div className={`w-1/2 ${side === "right" ? "pl-12" : ""}`}>
                  {side === "right" && <Link href={`/about/history?event=${ev.year}`}>
  <TimelineItem event={ev} side={side} />
</Link>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Timeline - Line on left, all items on right */}
      <div className="md:hidden relative pl-8">
        {/* Vertical dashed line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-700" />
        
        {/* Timeline items */}
        <div className="space-y-12">
          {events.map((ev) => (
            <div key={ev.id} className="relative">
              {/* Dot */}
              <div className="absolute -left-9 top-10 transform">
                <div className="w-3 h-3 rounded-full bg-red-500 border-gray-700" />
              </div>
              
              {/* Content */}
              <Link href={`/about/history?event=${ev.year}`}>
                <TimelineItem event={ev} side="right" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}