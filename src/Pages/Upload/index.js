import { useState } from "react";
import Loading from "./Loading";
import Profile from "./Profile";
import QnA1 from "./QnA1";
import QnA2 from "./QnA2";
import Upload from "./Upload";

const UploadMain = () => {
	const [step, setStep] = useState(0)
	return (
		<>
			{step === 0 ?? (<Upload setStep={setStep} />)}
			{step === 1 ?? (<QnA1 setStep={setStep} />)}
			{step === 2 ?? (<QnA2 setStep={setStep} />)}
			{step === 3 ?? (<Loading setStep={setStep} />)}
			{step === 4 ?? (<Profile />)}
		</>
	)
};

export default UploadMain;
