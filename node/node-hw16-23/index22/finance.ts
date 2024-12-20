export class LoanCalculator {
  constructor(
    public amount: number,
    public interestRate: number,
    public duration: number
  ) {}

  calculateInterest(amount: number, interestRate: number): number {
    const interest = amount * (interestRate / 100);
    return interest;
  }

  calculatePayment(amount: number, interestRate: number): number {
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment =
      amount *
      (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -12)));
    return monthlyPayment;
  }
}

export class TaxCalculator {
  constructor(public amount: number) {}
  calculateTax(): number {
    const taxRate = 0.19;
    return 100 * taxRate;
  }
}
