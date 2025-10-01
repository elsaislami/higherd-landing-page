import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

export default function JobListingsSection({ jobListings = [] }) {
  const { t } = useTranslation("pages");

  return (
    <section className="container my-20 flex flex-col items-center ">
      <h2 className="text-2xl font-bold text-center mb-6">
        {t("candidates.jobListingsTitle")}
      </h2>
      <p className="text-center text-gray-600 mb-10">
        {t("candidates.jobListingsDesc")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="p-6 border border-gray-100 rounded-lg shadow-lg bg-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{job.description}</p>
            </div>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-full">
                {job.type}
              </span>
              <span className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">
                {job.mode}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-8 flex self-center items-center justify-between bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-600 pr-2">
          {t("candidates.notEnoughJobs")}
        </p>
        <Button variant="primary">{t("candidates.createProfile")}</Button>
      </div>
    </section>
  );
}
