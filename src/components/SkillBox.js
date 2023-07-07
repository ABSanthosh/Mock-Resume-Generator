import { useRef } from "react";
import { Flashcard } from "react-quizlet-flashcard";
import LabelInput from "./LabelInput/LabelInput";

export default function SkillBox({ arrayHelpers, formik, index }) {
  const SkillFlipRef = useRef();
  return (
    <Flashcard
      className="Template__formSection--subRow"
      key={index}
      manualFlipRef={SkillFlipRef}
      style={{
        width: "100%",
        height: "95px",
        borderRadius: "10px",
      }}
      frontHTML={
        <>
          <button
            className="FancyButton Template__formSection--subBoxRowClose"
            type="button"
            // onClick={() => arrayHelpers.remove(index)}
            onClick={() => SkillFlipRef.current()}
          >
            X
          </button>
          <LabelInput
            id="Skill"
            isMandatory
            label="Skill"
            name={`skills.${index}.skill`}
            value={formik.values.skills[index].skill}
            placeholder="Enter your skill"
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
              onClick={() => SkillFlipRef.current()}
            >
              Cancel
            </button>
          </div>
        </div>
      }
    />
  );
}
