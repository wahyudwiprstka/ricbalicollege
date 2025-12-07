"use client";
import { delay, motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

const Sponsor = () => {
  const t = useTranslations("Homepage");
  const messages = useMessages();
  const relations = [
    {
      name: "Rising Experiences",
      img: "/img/sponsors/rising-experiences.png",
    },
    {
      name: "PT. All Qurrny Bagas Pratama",
      img: "/img/sponsors/all-currny.png",
    },
    {
      name: "PT. Zamrud Marine International",
      img: "/img/sponsors/zmi.png",
    },
    {
      name: "Cultural Homestay International",
      img: "/img/sponsors/chi.png",
    },
  ];
  return (
    <section className="py-16 bg-slate-100">
      <div className="flex flex-col text-center px-10 items-center justify-center gap-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <h2 className="font-black text-4xl mb-4 text-primary uppercase">
            {t("sponsor_title")}
          </h2>
        </motion.div>
        <div className="flex items-center justify-center flex-wrap gap-10 md:px-36">
          {relations.map((item, index) => (
            <motion.img
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              src={item.img}
              alt={item.name}
              className="max-w-36 md:max-w-64 max-h-24 w-auto h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
