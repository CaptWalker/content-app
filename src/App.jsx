import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
const AIC = React.lazy(() => import('AdditionalInformationCapability/AIC'));
const KycCapability = React.lazy(() => import('KycCapability/KycCapability'));
import Content from "./Content/Content";
import { ErrorBoundary } from "./ErrorBoundary/ErrorBoundary";


const App = () => { 

    const aic = () => (
        <ErrorBoundary>
            <Suspense fallback={null}>
                <AIC />
            </Suspense>
        </ErrorBoundary>
    )

    const kycCapability = () => (
        <ErrorBoundary>
            <Suspense fallback={null}>
                <KycCapability />
            </Suspense>
        </ErrorBoundary>
    )

  const access = [
    {
        id: 'additional_information_capability',
        name: "Additional Information Capability",
        appConfig: aic,
    },
    {
        id: 'kyc_capability',
        name: "KYC Capability",
        appConfig: kycCapability,
    },
]
  
  return (
    <div>
      <Content access={access} />
    </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
