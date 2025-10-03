import { useTranslation } from "react-i18next";
import Button from "../ui/Button";

export default function JobListingsSection({ jobListings = [] }) {
  const { t } = useTranslation("pages");

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 lg:my-20 flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
        {t("candidates.jobListingsTitle")}
      </h2>
      <p className="text-center text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
        {t("candidates.jobListingsDesc")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
        {jobListings.map((job, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 border border-gray-100 rounded-lg shadow-lg bg-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {job.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                {job.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-orange-100 text-orange-600 rounded-full">
                {job.type}
              </span>
              <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-purple-100 text-purple-600 rounded-full">
                {job.mode}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between bg-gray-100 p-4 rounded-lg w-full max-w-2xl gap-3 sm:gap-0">
        <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
          {t("candidates.notEnoughJobs")}
        </p>
        <Button variant="primary">{t("candidates.createProfile")}</Button>
      </div>
    </section>
  );
}
