import styled from "@emotion/styled";
import RatingScale from "./RatingScale";

const FeedbackForm = () => {
  const submitFeedback = (value: string) => {
    alert(`Feedback value ${value} received!`);
  }

  const cancelFeedback = () => {

  }

  return (
    <FormContainer>
      <img src="./logo_glyph.png" alt="logo" />

      <span
        style={{
          
          textAlign: "center",
          marginTop: "60px",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        <TitleTypography>
          We love to hear your feedback!
        </TitleTypography>
        <SubTitleTypography>
          On a scale of 1-5, how likely are you to recommend this service?
        </SubTitleTypography>
        <RatingScale lowLabel='Not Likely' highLabel='Very Likely' topOfScale={5} onSubmit={submitFeedback} submitLabel='Submit' onCancel={cancelFeedback} cancelLabel='Skip' />
      </span>
    </FormContainer>
  )
}

export default FeedbackForm

const FormContainer = styled("div")({
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  height: "50vh",
  borderRadius: "8px",
  boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
  justifyContent: "flex-start",
})

const TitleTypography = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const SubTitleTypography = styled("div")({
  display: 'flex',
  marginTop: '1rem',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontWeight: 'normal'
})
