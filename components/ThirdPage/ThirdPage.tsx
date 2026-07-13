import Double from "@/components/Double";

const projects = [
  {
    name: "MAVEN 11",
    client: "analogueagency",
    description: "New web design for the blockchain investment fund Maven 11.",
    src: "maven.jpg",
    year: 2022,
  },
  {
    name: "Wix Playground Homepage",
    client: "Wix Playground",
    description: "Wix Playground is powered by the Wix.com design team.",
    src: "wix.jpg",
    year: 2022,
  },
  {
    name: "POWELL—STUDIO",
    client: "POWELL—STUDIO",
    description: "The online presence for Powell—Studio.",
    src: "powell.jpg",
    year: 2023,
  },
  {
    name: "RAMDP<",
    client: "POWEasdasLL—STUDIO",
    description: "The asdonline presence for Powell—Studio.",
    src: "wix.jpg",
    year: 2023,
  },
];

export default function ThirdPage() {
  return (
    <main className="bg-[#0F0F10] h-screen  ">
      <h1 className=" font-display p-5 text-[5vw] max-w-[80%] font-normal">
        We use design and technology to create brands and products that perform,
        delight, and scale.
      </h1>
      <div className="">
        <Double projects={[projects[0], projects[1]]} reversed={false} />
        <Double projects={[projects[2], projects[3]]} reversed={true} />
      </div>
    </main>
  );
}
