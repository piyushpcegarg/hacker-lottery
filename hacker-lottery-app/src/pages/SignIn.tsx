import firebase from 'firebase/app';
import { StyledFirebaseAuth } from 'react-firebaseui';
import 'firebase/auth';

const SignIn = () => {
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow if you want to speed up the loading process
    // Replace 'redirect' with 'popup' for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'redirect',
    // Redirect to /app/dashboard after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/app/dashboard',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      {
        provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        /* scopes: [
          'https://www.googleapis.com/auth/contacts.readonly'
        ], */
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account',
        },
      },
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          size: 'invisible',
        },
        defaultCountry: 'IN', // Set default country to the India (+91).
        whitelistedCountries: ['IN'],
      },
    ],
  };

  return (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={firebase.auth()}
    />
  );
};

export default SignIn;
