// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  STORE_OBJECT_URL:"/mapping",
  LOGOUT_URL : "/logout",
  SEARCH_RESULT_URL : "/search",
  OPTIONS_URL : "/options",
  OPTIONS_GET_URL : "/getoptions",
  OPTIONS_ALL_URL : "/getalloptions",
  ALL_CATEGORY_OPTIONS:"alloptions",
  IS_ADMIN:"isadmin",
  EMAIL_URL:"/sentEmail",
  DELETE_ENG_URL:"/engineer/",
  TICKET_NO:"/ticketno"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
