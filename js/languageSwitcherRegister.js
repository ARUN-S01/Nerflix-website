const ids = [
    "sign-in-text", 
    "email-label",
    "email-inputError",
    "username-label",
    "username-inputError",
    "pwd-label",
    "pwd-inputError",
    "cpwd-label",
    "cpwd-inputError",
    "help",
    "sign-up",
    "sign-up-link",
    "reCAPInfo",
    "learn-more",
    "reCAP1",
    "reCAP2",
    "reCAP3",
    "reCAP4",
    "reCAP5",
    "footer-header"
]

const labels = Object.freeze (
    {
        'en': [
            "Sign Up",
            "Email",
            "Please enter a valid email or phone number.",
            "Username",
            " ",
            "Password",
            "Your password must contain between 4 and 60 characters.",
            "Confirm Password",
            "",
            "Need help?",
            "Already Have An Account? ",
            "Sign in now.",
            "Any Queries? Call ",
        ],
        'ta': [
            "பதிவு பெறு",
            "மின்னஞ்சல்",
            "செல்லுபடியாகும் மின்னஞ்சல் ஐடியை உள்ளிடவும்",
            "பெயர்",
            "",
            "கடவுச் சொல்",
            "உங்கள் கடவுச்சொல்லில் 4 முதல் 60 எழுத்துகள் இருக்க வேண்டும்.",
            "கடவுச்சொல்லை உறுதிசெய்",
            "",
            "உதவி தேவையா?",
            "ஏற்கனவே ஒரு பயனர்? ",
            "உள்நுழையவும்.",
            "ஏதேனும் கேள்விகள்? அழைப்பு",
        ],
    }
);

const loadTexts = function (lang) {
    let text = lang === 'ta' ? labels.ta : labels.en;
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = text[i];
    }
    document.getElementById('login-button').value = text[0];
    document.lang = lang;
}

const getSelectedLanguage = function () {
    let selector = document.getElementById("language-selector");
    let value = selector.options[selector.selectedIndex].value;
    return value;
}

const getBrowserLanguage = function () {
    let lang = navigator.language || navigator.userLanguage;
    lang = lang.slice(0, 2);
    return lang;
}

const setSelectedLanguage = function (lang) {
    lang = lang === 'ta' ? lang : 'en';
    document.getElementById('language-selector').value = lang;
}

const setUpLanguage = function () {
    let lang = getBrowserLanguage();
    lang = lang.slice(0, 2);
    loadTexts(lang);
    setSelectedLanguage(lang);
}