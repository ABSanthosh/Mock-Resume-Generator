import { useRef } from "react";
import LabelInput from "./LabelInput/LabelInput";
import { Flashcard } from "react-quizlet-flashcard";

export default function AchievementBox({ arrayHelpers, formik, index }) {
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
          <button
            className="FancyButton Template__formSection--subBoxRowClose"
            type="button"
            onClick={() => flipRef.current()}
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
