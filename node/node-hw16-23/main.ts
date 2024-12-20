import { capitalize, reverseString } from './index22/stringUtils';
import { LoanCalculator, TaxCalculator } from './index22/finance';
import { AdminUser } from './index22/userManagement';
import {
  generateFibonacci,
  generatePrimeNumbers,
} from './index22/sequenceUtils';

console.log(capitalize('hello'));
console.log(reverseString('world'));

const loan = new LoanCalculator(100000, 5, 12);
console.log('Monthly payment:', loan.calculatePayment(100000, 5));

const tax = new TaxCalculator(1000);
console.log('Tax amount:', tax.calculateTax());

// UserManagement.Admin.AdminUser
const admin = new AdminUser('John Doe', 'john@example.com');
console.log('Is Super Admin:', admin.getSuperAdminStatus());
admin.grantSuperAdminRights();
console.log('Is Super Admin after grant:', admin.getSuperAdminStatus());
admin.revokeSuperAdminRights();
console.log('Is Super Admin after revoke:', admin.getSuperAdminStatus());

console.log(generateFibonacci(10));
console.log(generatePrimeNumbers(10));
