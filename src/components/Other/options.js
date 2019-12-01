import {
    OVERVIEW,
    PHP_CAPTCHA,
    PHP_CSRF,
    PHP_VERIFY_EMAIL,
    STYLED_COMPONENTS,
    BEM,
    CONTRACT_TESTING
} from '../../constants/other';

export const dropdownOptions = [
    { key: OVERVIEW, value: OVERVIEW, text: 'Overview' },
    { key: CONTRACT_TESTING, value: CONTRACT_TESTING, text: 'Apollo GraphQL Contract Testing' },
    { key: PHP_CAPTCHA, value: PHP_CAPTCHA, text: 'CAPTCHA Generator' },
    { key: PHP_CSRF, value: PHP_CSRF, text: 'CSRF protection' },
    { key: PHP_VERIFY_EMAIL, value: PHP_VERIFY_EMAIL, text: 'Email Verification' },
    { key: STYLED_COMPONENTS, value: STYLED_COMPONENTS, text: 'Styled Components' },
    { key: BEM, value: BEM, text: 'BEM' },
];