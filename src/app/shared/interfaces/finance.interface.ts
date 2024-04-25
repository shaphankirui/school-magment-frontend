export interface Finance {
    amount: number;
    paymentMode: string;
    confirmationCode?: string;
    createdAt: Date;
    updatedAt: Date;
    studentId: number;
  }