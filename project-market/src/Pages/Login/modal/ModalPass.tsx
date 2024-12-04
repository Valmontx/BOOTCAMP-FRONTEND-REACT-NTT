import React from "react"
import { ForgotPasswordModalProps } from "../../../domain/modal-types.ts"

const ModalPass: React.FC<ForgotPasswordModalProps> = ({
  email,
  error,
  successMessage,
  onEmailChange,
  onSubmit,
  onClose,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2  className="reset-pass">Reset your password</h2>

        <div className="container-input-button">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={onEmailChange}
          />
          <div className="container-button">
          <button className="button-send" onClick={onSubmit}>Send</button>
          <button className="button-close" onClick={onClose}>Cancel</button>
          </div>

        </div>
        {error && <p className="error-text">{error}</p>}
        {successMessage && <p className="success-text">{successMessage}</p>}

      </div>
    </div>
  );
};

export default ModalPass;