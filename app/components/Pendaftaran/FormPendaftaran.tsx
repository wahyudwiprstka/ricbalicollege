import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { useTranslations } from "next-intl";

const FormPendaftaran = ({ handleSubmit }: any) => {
  const t = useTranslations("pendaftaran.form");
  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-sm shadow-red-900 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="text-primary" /> {t("form_title")}
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("period_title")}
          </label>
          <select
            name="entry.1364021650"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="KELAS JUNI">{t("june_class")}</option>
            <option value="KELAS DESEMBER">{t("december_class")}</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("location_title")}
          </label>
          <select
            name="entry.1475516640"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="JEMBRANA">Jembrana</option>
            <option value="SINGARAJA">Singaraja</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("fullname")}
          </label>
          <input
            type="text"
            name="entry.1108691518"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("nik")}
          </label>
          <input
            type="text"
            name="entry.1054308342"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("place_of_birth")}
          </label>
          <input
            type="text"
            name="entry.2021152434"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("date_of_birth")}
          </label>
          <input
            type="date"
            name="entry.1503152417"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("address")}
          </label>
          <input
            type="text"
            name="entry.1276990936"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("phonenumber")}
          </label>
          <input
            type="tel"
            name="entry.348835861"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("dad_name")}
          </label>
          <input
            type="tel"
            name="entry.707848647"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("dad_phonenumber")}
          </label>
          <input
            type="tel"
            name="entry.230802658"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("mom_name")}
          </label>
          <input
            type="tel"
            name="entry.1122980032"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("mom_phonenumber")}
          </label>
          <input
            type="tel"
            name="entry.1926069085"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("sma")}
          </label>
          <input
            type="tel"
            name="entry.949573400"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            {t("choose_program")}
          </label>
          <select
            name="entry.2056653400"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="">{t("choose_program")}</option>
            <option value="FOOD AND BEVERAGE SERVICE (BASIC LEVEL)">
              Food & Beverage Service (Basic Level / D1)
            </option>
            <option value="CULINARY (BASIC LEVEL)">
              Culinary (Basic Level / D1)
            </option>
            <option value="HOUSEKEEPING (BASIC LEVEL)">
              Housekeeping (Basic Level / D1)
            </option>
            <option value="ROOM DIVISION (MIDDLE LEVEL)">
              Room Division (Housekeeping & Front Office) (Middle Level / D2)
            </option>
            <option value="FB DIVISION (MIDDLE LEVEL)">
              FB Division (FB Service & Culinary) (Middle Level / D2)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="entry.2105180388"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-3 rounded-xl font-semibold hover:bg-red-950 transition-all flex justify-center items-center gap-2"
        >
          <Send size={18} /> {t("send")}
        </button>
      </motion.form>
    </section>
  );
};

export default FormPendaftaran;
