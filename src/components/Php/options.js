import {
    PHP_OVERVIEW,
    PHP_CAPTCHA,
    PHP_CSRF,
    PHP_VERIFY_EMAIL
} from '../../constants/php';

export const dropdownOptions = [
    { key: PHP_OVERVIEW, value: PHP_OVERVIEW, text: 'Overview' },
    { key: PHP_CAPTCHA, value: PHP_CAPTCHA, text: 'CAPTCHA Generator' },
    { key: PHP_CSRF, value: PHP_CSRF, text: 'CSRF protection' },
    { key: PHP_VERIFY_EMAIL, value: PHP_VERIFY_EMAIL, text: 'Email Verification' },
];