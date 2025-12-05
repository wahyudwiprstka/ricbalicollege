"use client";
import { delay, motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

const Relasi = () => {
  const t = useTranslations("Homepage");
  const messages = useMessages();
  const relations = [
    {
      name: "PT. Karya Vishaka Ananta",
      img: "/img/relations/karya-vishaka-ananta.png",
    },
    {
      name: "BPR Gisawa",
      img: "/img/relations/bpr-gisawa.png",
    },
    {
      name: "Hoki Bank",
      img: "/img/relations/hoki-bank.png",
    },
    {
      name: "Niki Diagnostic Center",
      img: "/img/relations/niki-diagnostic-center.png",
    },
    {
      name: "Wahyu Cendana Medika",
      img: "/img/relations/wcm.png",
    },
    {
      name: "Politeknik Pariwisata Bali",
      img: "/img/relations/ppb.png",
    },
    {
      name: "South Hills College",
      img: "/img/relations/south-hills.png",
    },
    {
      name: "Pradhitya International College",
      img: "/img/relations/pradhitya.png",
    },
    {
      name: "Akademi Komunitas Mapindo",
      img: "/img/relations/mapindo.png",
    },
    {
      name: "Caribbean International School",
      img: "/img/relations/cis.png",
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="py-16 bg-slate-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col text-center px-10 items-center justify-center gap-8 mx-auto"
      >
        <motion.div variants={itemVariants} className="max-w-5xl">
          <h2 className="font-bold text-4xl mb-4 text-primary uppercase">
            {t("relation_title")}
          </h2>
          <p className="text-lg">{t("relation_description")}</p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-10 px-36"
        >
          {relations.map((item, index) => (
            <motion.img
              variants={itemVariants}
              //   transition={{ delay: index * 0.2 }}
              src={item.img}
              alt={item.name}
              className="max-w-46 md:max-w-64 max-h-24 w-auto h-auto"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Relasi;
