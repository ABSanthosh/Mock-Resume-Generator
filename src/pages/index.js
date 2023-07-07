import Header from "@/components/Header/Header";
import "@/styles/routes/home.scss";
import Link from "next/link";

export default function Home() {
  const templates = [
    {
      id: 1,
      img: "/template1.jpeg",
    },
    {
      id: 2,
      img: "/template2.jpeg",
    },
    {
      id: 3,
      img: "/template3.jpeg",
    },
  ];

  return (
    <div className="Home">
      <Header />
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
        {templates.map((item, i) => (
          <Link
            className="Home__templateCard"
            href={`/template/${item.id}`}
            key={i}
          >
            <div className="Home__templateCard--overlay">
              <span>Use this template</span>
            </div>
            <div
              className={`Home__templateCard--top Home__templateCard--bg${
                (i + 1) % 3 === 0 ? 3 : (i + 1) % 3
              }`}
            >
              <img src={item.img} />
            </div>
            <div className="Home__templateCard--bottom">
              Resume Template {item.id}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
