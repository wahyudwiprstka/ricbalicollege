"use client";
import { motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

const Sponsor = () => {
  const t = useTranslations("Homepage");
  const messages = useMessages();
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
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
        className="flex flex-col md:flex-row px-10 text-justify items-center justify-center max-w-5xl gap-8 mx-auto"
      >
        <motion.img
          variants={itemVariants}
          src={"/img/sponsors/chi.png"}
          width={300}
        />
        <motion.div variants={itemVariants}>
          <h2 className="font-bold text-4xl mb-4 text-primary uppercase">
            {t("sponsor_title")}
          </h2>
          <p
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: messages.Homepage.sponsor_description,
            }}
          ></p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Sponsor;
