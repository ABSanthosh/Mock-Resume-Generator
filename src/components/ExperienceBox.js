import { useRef } from "react";
import LabelInput from "./LabelInput/LabelInput";
import { Flashcard } from "react-quizlet-flashcard";

export default function ExperienceBox({ arrayHelpers, formik, index }) {
  const flipRef = useRef();

  return (
    <Flashcard
      key={index}
      manualFlipRef={flipRef}
      style={{
        width: "100%",
        height: "165px",
        borderRadius: "10px",
      }}
      frontHTML={
        <>
          <div className="Template__formSection--row">
            <button
              className="FancyButton Template__formSection--subBoxRowClose"
              type="button"
              onClick={() => flipRef.current()}
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
        </>
      }
      backHTML={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h4
            style={{
              fontSize: 15,
            }}
          >
            Do you really want to delete this card?
          </h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <button
              className="FancyButton"
              type="button"
              data-type="green-outline"
              style={{
                height: "30px",
              }}
              onClick={() => arrayHelpers.remove(index)}
            >
              Remove
            </button>
            <button
              className="FancyButton"
              type="button"
              data-type="red-solid"
              style={{
                height: "30px",
              }}
              onClick={() => flipRef.current()}
            >
              Cancel
            </button>
          </div>
        </div>
      }
    />
  );
}
