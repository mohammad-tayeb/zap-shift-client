import { Code2 } from "lucide-react";

function Skills() {
const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "React Hook Form",
  "TanStack Query",
  "JWT",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Canva",
];

  return (
    <section id="skills" className="py-24 bg-linear-to-b from-orange-500 via-orange-600 to-amber-700 text-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-white">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Technologies I Use
          </h2>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 transition-all duration-300 hover:border-black hover:-translate-y-1"
            >
              <Code2 size={18} />
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

