import LabelInput from "@/components/LabelInput/LabelInput";
import "@/styles/routes/template.scss";
import { FieldArray, FormikProvider, useFormik } from "formik";
import { Fragment, useState } from "react";

export async function getServerSideProps(context) {
  const templateId = context.query.templateId;
  return {
    props: {
      templateId,
    },
  };
}

export default function Template({ templateId }) {
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
      skills: [""],
      //   education
      education: [
        {
          schoolName: "",
          passingYear: "",
          description: "",
        },
      ],
      //   experience
      experience: [
        {
          companyName: "",
          passingYear: "",
          responsibilities: "",
        },
      ],
      //   achievements
      achievements: [
        {
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
                  {formik.values.skills.map((_, index) => (
                    <div
                      className="Template__formSection--subBoxRow"
                      key={index}
                    >
                      <button
                        className="FancyButton Template__formSection--subBoxRowClose"
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        X
                      </button>
                      <LabelInput
                        id="Skill"
                        isMandatory
                        label="Skill"
                        name={`skills.${index}`}
                        value={formik.values.skills[index]}
                        placeholder="Enter your skill"
                        onChange={formik.handleChange}
                      />
                    </div>
                  ))}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() => arrayHelpers.push("")}
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
                  {formik.values.education.map((_, index) => (
                    <div
                      className="Template__formSection--subBoxCol"
                      key={index}
                    >
                      <div className="Template__formSection--row" key={index}>
                        <button
                          className="FancyButton Template__formSection--subBoxRowClose"
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          X
                        </button>
                        <LabelInput
                          id="School Name"
                          isMandatory
                          label="School Name"
                          name={`education.${index}.schoolName`}
                          value={formik.values.education[index].schoolName}
                          placeholder="Enter your school name"
                          onChange={formik.handleChange}
                        />
                        <LabelInput
                          id="Passing Year"
                          isMandatory
                          label="Passing Year"
                          name={`education.${index}.passingYear`}
                          value={formik.values.education[index].passingYear}
                          placeholder="Enter your passing year"
                          onChange={formik.handleChange}
                        />
                      </div>
                      <LabelInput
                        id="Description"
                        isMandatory
                        label="Description"
                        name={`education.${index}.description`}
                        value={formik.values.education[index].description}
                        placeholder="Enter your description"
                        onChange={formik.handleChange}
                      />
                    </div>
                  ))}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
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
                  {formik.values.experience.map((_, index) => (
                    <div
                      className="Template__formSection--subBoxCol"
                      key={index}
                    >
                      <div className="Template__formSection--row">
                        <button
                          className="FancyButton Template__formSection--subBoxRowClose"
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          X
                        </button>
                        <LabelInput
                          id="Company Name"
                          isMandatory
                          label="Company Name"
                          name={`experience.${index}.companyName`}
                          value={formik.values.experience[index].companyName}
                          placeholder="Enter your company name"
                          onChange={formik.handleChange}
                        />
                        <LabelInput
                          id="Passing Year"
                          isMandatory
                          label="Passing Year"
                          name={`experience.${index}.passingYear`}
                          value={formik.values.experience[index].passingYear}
                          placeholder="Enter your passing year"
                          onChange={formik.handleChange}
                        />
                      </div>
                      <LabelInput
                        id="Responsibilities"
                        isMandatory
                        label="Responsibilities"
                        name={`experience.${index}.responsibilities`}
                        value={formik.values.experience[index].responsibilities}
                        placeholder="Enter your responsibilities"
                        onChange={formik.handleChange}
                      />
                    </div>
                  ))}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
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
                  {formik.values.achievements.map((_, index) => (
                    <div
                      className="Template__formSection--subBoxRow"
                      key={index}
                    >
                      <button
                        className="FancyButton Template__formSection--subBoxRowClose"
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        X
                      </button>
                      <LabelInput
                        id="Field"
                        isMandatory
                        label="Field"
                        name={`achievements.${index}.field`}
                        value={formik.values.achievements[index].field}
                        placeholder="Enter your field"
                        onChange={formik.handleChange}
                      />
                      <LabelInput
                        id="Award"
                        isMandatory
                        label="Award"
                        name={`achievements.${index}.award`}
                        value={formik.values.achievements[index].award}
                        placeholder="Enter your award"
                        onChange={formik.handleChange}
                      />
                    </div>
                  ))}
                  <button
                    className="FancyButton"
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
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
