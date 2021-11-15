import { StyledFirebaseAuth } from 'react-firebaseui';
import { getAuth, GoogleAuthProvider, PhoneAuthProvider } from 'firebase/auth';

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
        provider: GoogleAuthProvider.PROVIDER_ID,
        /* scopes: [
          'https://www.googleapis.com/auth/contacts.readonly'
        ], */
        customParameters: {
          // Forces account selection even when one account
          // is available.
          prompt: 'select_account',
        },
      },
      {
        provider: PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          size: 'invisible',
        },
        defaultCountry: 'IN', // Set default country to the India (+91).
        whitelistedCountries: ['IN'],
      },
    ],
  };

  const auth = getAuth();
  return (
    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={auth}
    />
  );
};

export default SignIn;
