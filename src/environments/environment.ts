// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import 'zone.js/plugins/zone-error'
export const environment = {
   
  firebase: {
    projectId: 'auth-ang-3d174',
    appId: '1:412729316515:web:ea16dd0ba995c15f745b16',
    storageBucket: 'auth-ang-3d174.appspot.com',
    apiKey: 'AIzaSyBIFCJ37IIveMaqfVvVacrVeenkGg2LIGk',
    authDomain: 'auth-ang-3d174.firebaseapp.com',
    messagingSenderId: '412729316515',
  },
  production: false,
  firebaseApiKey: 'AIzaSyBIFCJ37IIveMaqfVvVacrVeenkGg2LIGk'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
