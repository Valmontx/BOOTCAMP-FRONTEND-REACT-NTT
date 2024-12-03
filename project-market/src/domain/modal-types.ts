import React from "react"

export interface ForgotPasswordModalProps {
    email: string;
    error: string | null;
    successMessage: string | null;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    onClose: () => void;
  }