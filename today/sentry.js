import { Sentry, SentryLog } from 'react-native-sentry'

export default () => {
    // disable stacktrace merging
    Sentry.config(
        'https://175662fef5454abc980729aa71eb1e39:23364c302d284aef98793285dda61b41@sentry.io/212313',
        {
            deactivateStacktraceMerging: true, // default: false | Deactivates the stacktrace merging feature
            logLevel: SentryLog.Debug, // default SentryLog.None | Possible values:  .None, .Error, .Debug, .Verbose
            disableNativeIntegration: false, // default: false | Deactivates the native integration and only uses raven-js
            // These two options will only be considered if stacktrace merging is active
            // Here you can add modules that should be ignored or exclude modules
            // that should no longer be ignored from stacktrace merging
            // ignoreModulesExclude: ["I18nManager"], // default: [] | Exclude is always stronger than include
            // ignoreModulesInclude: ["RNSentry"], // default: [] | Include modules that should be ignored too
            // ---------------------------------
        },
    ).install()

    // set a callback after an event was successfully sentry
    // its only guaranteed that this event contains `event_id` & `level`
    Sentry.setEventSentSuccessfully(() => {
        Sentry.lastEventId()
        // Sentry.lastException(); -> returns the last event after the first successfully sent event
    })
}
