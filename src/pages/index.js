import "@/styles/routes/home.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className="Home">
      <section className="Home__desc">
        <h1>ATS-Friendly Resume Templates</h1>
        <p>
          If you want to apply to a rather large company, software called an
          Applicant Tracking System (ATS) will most likely be in use. Recruiters
          utilize ATS to streamline the recruiting process by storing, tracking,
          and filtering job applications based on their relevance. With all the
          tools Wozber has ready to boost your chances of success, you will
          write relevant content from start to finish and present it in the most
          ATS-friendly format. So jump in with any ATS-friendly resume template
          you like and write an ATS-optimized resume right away, entirely for
          free.
        </p>
      </section>
      <section className="Home__templates">
        {Array(3)
          .fill()
          .map((_, i) => (
            <Link className="Home__templateCard" href={`/template/${i + 1}`}>
              <div className="Home__templateCard--overlay">
                <span>Use this template</span>
              </div>
              <div
                className={`Home__templateCard--top Home__templateCard--bg${
                  (i + 1) % 3 === 0 ? 3 : (i + 1) % 3
                }`}
              >
                <img src="https://www.wozber.com/public/templates/v2/previews/en/3/resume-template-3-w364x1.png" />
              </div>
              <div className="Home__templateCard--bottom">
                Resume Template {i + 1}
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
}
