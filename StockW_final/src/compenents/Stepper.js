import styles from './Stepper.css';

const Stepper = ({ step }) => {
  return (
    <div className="stepper">
      <div className="step-container">
        <div className={`step ${step === 1 ? 'active' : ''} ${step > 1 ? 'finished' : ''}`}>
          {step > 1 ? '✔️' : '1'}
        </div>
        <div className="step-label">Delivery</div>
      </div>
      <div className={`line ${step > 1 ? 'active' : ''}`} />
      <div className="step-container">
        <div className={`step ${step === 2 ? 'active' : ''} ${step > 2 ? 'finished' : ''}`}>
          {step > 2 ? '✔️' : '2'}
        </div>
        <div className="step-label">Payment</div>
      </div>
      <div className={`line ${step > 2 ? 'active' : ''}`} />
      <div className="step-container">
        <div className={`step ${step === 3 ? 'active' : ''} ${step > 3 ? 'finished' : ''}`}>
          {step > 3 ? '✔️' : '3'}
        </div>
        <div className="step-label">Confirm</div>
      </div>
    </div>
  );
};

export default Stepper;
