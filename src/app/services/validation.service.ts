

declare var moment: any;
export class ValidationService {
    /**
     * Validates zip.
     */
    static zip(zip: any) {
        const valid = /^\d{5}$/.test(zip.value);
        if (valid) {
            return null;
        }
        return { 'zip': true };
    }

    static email(input: any) {
        if (!input.value) {
            return null;
        }
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (reg.test(input.value)) {
            return null;
        }
        return { 'email': true };
    }

    static passwordValidator(control: any) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static isNullOrEmpty(value: string): boolean {
        return value == null || value === '';
    }

    private regEx(input: any, expression: any): boolean {
        if (expression.test(input.value)) {
            return true;
        }
        return false;
    }
};
