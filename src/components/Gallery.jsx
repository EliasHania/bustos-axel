import BustoCard from "./BustoCard";

const bustos = [
  {
    id: 1,
    title: "Goku",
    imagenes: [
      "/bustos/goku1.webp",
      "/bustos/goku2.webp",
      "/bustos/goku3.webp",
    ],
  },
  {
    id: 2,
    title: "Deadpool",
    imagenes: [
      "/bustos/deathpool1.webp",
      "/bustos/deathpool2.webp",
      "/bustos/deathpool3.webp",
    ],
  },
  {
    id: 3,
    title: "Majin Boo",
    imagenes: [
      "/bustos/majicboo1.webp",
      "/bustos/majicboo2.webp",
      "/bustos/majicboo3.webp",
    ],
  },
];

export default function Gallery() {
  return (
    <section className="px-6 pb-20 max-w-6xl mx-auto">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {bustos.map((busto) => (
          <BustoCard
            key={busto.id}
            imagenes={busto.imagenes}
            title={busto.title}
          />
        ))}
      </div>
    </section>
  );
}
