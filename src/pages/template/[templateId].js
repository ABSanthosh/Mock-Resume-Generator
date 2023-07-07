import EducationBox from "@/components/EducationBox";
import ExperienceBox from "@/components/ExperienceBox";
import LabelInput from "@/components/LabelInput/LabelInput";
import SkillBox from "@/components/SkillBox";
import "@/styles/routes/template.scss";
import { FieldArray, FormikProvider, useFormik } from "formik";
import { Fragment, useMemo, useRef } from "react";
import { customAlphabet } from "nanoid";
import AchievementBox from "@/components/AchievementBox";
import Header from "@/components/Header/Header";

export async function getServerSideProps(context) {
  const templateId = context.query.templateId;
  return {
    props: {
      templateId,
    },
  };
}

export default function Template({ templateId }) {
  const nanoid = customAlphabet("1234567890abcdef", 7);

  const formik = useFormik({
    initialValues: {
      templateId: templateId,
      //   personalInfo
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      linkedInUrl: "",
      jobTitle: "",
      careerObjective: "",
      //   skills
      skills: [
        {
          id: nanoid(),
          skill: "",
        },
      ],
      //   education
      education: [
        {
          id: nanoid(),
          schoolName: "",
          passingYear: "",
          description: "",
        },
      ],
      //   experience
      experience: [
        {
          id: nanoid(),
          companyName: "",
          passingYear: "",
          responsibilities: "",
        },
      ],
      //   achievements
      achievements: [
        {
          id: nanoid(),
          field: "",
          award: "",
        },
      ],
    },
    onSubmit: (values) => {
      console.log(values);
      if (Object.values(values).includes("")) {
        alert("Please fill all mandatory fields");
        return;
      }
    },
  });

  return (
    <div className="Template">
      <Header />
      <h1>Details</h1>
      <FormikProvider value={formik}>
        <form className="Template__form" onSubmit={formik.handleSubmit}>
          <section className="Template__formSection">
            <h4>
              Personal information
              <span>&nbsp;</span>
            </h4>
            <div className="Template__formSection--row">
              <LabelInput
                id="firstName"
                isMandatory
                label="Name"
                value={formik.values.firstName}
                placeholder="Enter your name"
                onChange={formik.handleChange}
              />
              <LabelInput
                id="lastName"
                isMandatory
                label="Last Name"
                value={formik.values.lastName}
                placeholder="Enter your last name"
                onChange={formik.handleChange}
              />
            </div>
            <LabelInput
              id="email"
              isMandatory
              label="Email"
              value={formik.values.email}
              placeholder="Enter your email"
              type="email"
              onChange={formik.handleChange}
            />
            <LabelInput
              id="phone"
              isMandatory
              label="Phone"
              value={formik.values.phone}
              placeholder="Enter your phone number"
              type="number"
              onChange={formik.handleChange}
            />
            <LabelInput
              id="linkedInUrl"
              isMandatory
              label="LinkedIn"
              value={formik.values.linkedInUrl}
              placeholder="Enter your LinkedIn URL"
              onChange={formik.handleChange}
            />
            <LabelInput
              id="jobTitle"
              isMandatory
              label="Job Title"
              value={formik.values.jobTitle}
              placeholder="Enter your job title"
              onChange={formik.handleChange}
            />
            <LabelInput
              id="careerObjective"
              isMandatory
              label="Career Objective"
              value={formik.values.careerObjective}
              placeholder="Enter your career objective"
              onChange={formik.handleChange}
            />

            <h4>
              Skills
              <span>&nbsp;</span>
            </h4>
            <FieldArray
              name="skills"
              render={(arrayHelpers) => (
                <Fragment>
                  {formik.values.skills.map((item, index) => {
                    return (
                      <SkillBox
                        arrayHelpers={arrayHelpers}
                        formik={formik}
                        key={item.id}
                        index={index}
                      />
                    );
                  })}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({ id: nanoid(), skill: "" })
                    }
                  >
                    Add Skill
                  </button>
                </Fragment>
              )}
            />
          </section>
          <section className="Template__formSection">
            <h4>
              Education
              <span>&nbsp;</span>
            </h4>
            <FieldArray
              name="education"
              render={(arrayHelpers) => (
                <Fragment>
                  {formik.values.education.map((item, index) => (
                    <EducationBox
                      arrayHelpers={arrayHelpers}
                      formik={formik}
                      key={item.id}
                      index={index}
                    />
                  ))}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        id: nanoid(),
                        schoolName: "",
                        passingYear: "",
                        description: "",
                      })
                    }
                  >
                    Add Education
                  </button>
                </Fragment>
              )}
            />
          </section>
          <section className="Template__formSection">
            <h4>
              Experience
              <span>&nbsp;</span>
            </h4>
            <FieldArray
              name="experience"
              render={(arrayHelpers) => (
                <Fragment>
                  {formik.values.experience.map((item, index) => (
                    <ExperienceBox
                      arrayHelpers={arrayHelpers}
                      formik={formik}
                      key={item.id}
                      index={index}
                    />
                  ))}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        id: nanoid(),
                        companyName: "",
                        passingYear: "",
                        responsibilities: "",
                      })
                    }
                  >
                    Add Experience
                  </button>
                </Fragment>
              )}
            />
          </section>
          <section className="Template__formSection">
            <h4>
              Achievements
              <span>&nbsp;</span>
            </h4>
            <FieldArray
              name="achievements"
              render={(arrayHelpers) => (
                <Fragment>
                  {formik.values.achievements.map((item, index) => (
                    <AchievementBox
                      arrayHelpers={arrayHelpers}
                      formik={formik}
                      key={item.id}
                      index={index}
                    />
                  ))}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        id: nanoid(),
                        field: "",
                        award: "",
                      })
                    }
                  >
                    Add Achievement
                  </button>
                </Fragment>
              )}
            />
          </section>
          <button
            className="FancyButton"
            type="submit"
            data-type="green-solid"
            style={{
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      </FormikProvider>
    </div>
  );
}
