import { useRef } from "react";
import LabelInput from "./LabelInput/LabelInput";
import { Flashcard } from "react-quizlet-flashcard";

export default function EducationBox({ arrayHelpers, formik, index }) {
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
          <div className="Template__formSection--row" key={index}>
            <button
              className="FancyButton Template__formSection--subBoxRowClose"
              type="button"
              onClick={() => flipRef.current()}
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
