const ids = [
    "sign-in-text", 
    "email-label",
    "email-inputError",
    "pwd-label",
    "pwd-inputError",
    "remember-me-label",
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
            "Sign In",
            "Email",
            "Please enter a valid email or phone number.",
            "Password",
            "Your password must contain between 4 and 60 characters.",
            "Remember me",
            "Need help?",
            "New to Netflix? ",
            "Sign up now.",
            "This page is protected by Google reCAPTCHA to ensure you're not a bot. ",
            "Learn more",
            "The information collected by Google reCAPTCHA is subject to the Google ",
            "Privacy Policy",
            " and ",
            "Terms of Service",
            ", and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).",
            "Any Queries? Call ",
        ],
        'ta': [
            "உள்நுழைவு",
            "மின்னஞ்சல்",
            "செல்லுபடியாகும் மின்னஞ்சல் ஐடியை உள்ளிடவும்",
            "கடவுச் சொல்",
            "உங்கள் கடவுச்சொல்லில் 4 முதல் 60 எழுத்துகள் இருக்க வேண்டும்.",
            "என்னை நினைவில் வையுங்கள்",
            "உதவி தேவையா?",
            "Netflix க்கு புதியவரா? ",
            "இப்பொது பதிவு செய்.",
            "நீங்கள் ஒரு போட் இல்லை என்பதை உறுதிப்படுத்த இந்தப் பக்கம் Google reCAPTCHA ஆல் பாதுகாக்கப்படுகிறது. ",
            "மேலும் கற்றல்",
            "Google reCAPTCHA மூலம் சேகரிக்கப்படும் தகவல் Google க்கு உட்பட்டது ",
            "தனியுரிமை கொள்கை",
            " மற்றும் ",
            "சேவை விதிமுறைகள்",
            ", மற்றும் reCAPTCHA சேவையை வழங்குவதற்கும், பராமரிப்பதற்கும் மற்றும் மேம்படுத்துவதற்கும் மற்றும் பொதுவான பாதுகாப்பு நோக்கங்களுக்காகவும் பயன்படுத்தப்படுகிறது (இது Google வழங்கும் தனிப்பயனாக்கப்பட்ட விளம்பரத்திற்காகப் பயன்படுத்தப்படுவதில்லை).",
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