# GcoTimer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

For the analysis of odors emitted from a Gas Chromatograph - [Gas Chromatography-Olfactometry](https://en.wikipedia.org/wiki/Gas_chromatography-olfactometry).

Most of the action is around the large green button in the middle of the app.  It has 3 states:
1. Inject
2. Start
3. Stop

On initial running of the app (or after the Reset button is pressed) the button state is, "Inject".
At the time the sample is injected into the GC-O, this button should be pressed. The button state changes to "Start" and the Date/Time of the injection is displayed. beneathe the button.

When an odor is detected by the user then Start is pressed.  This logs the time from injection that the odor starts to appear.  The button styate changes to "Stop".
When the odor can no longer be detected by the user then "Stop" is pressed.  This records the end time of odor detection.  The button state returns to "Start".

After "Stop" has been pressed the user is presented with a list of odor descriptors to choose from. After this selection is made the user is presented witha further dialog to select the strength of the odor.

The data of the event is logged in the table below the button.  Odor Desripto, Intensity, Start Time (minutes), End Time (minutes) and Duration (minutes) are recorded.

Each time a new odor is dtected the Start/Stop sequence above is actioned.

At the end of the session, when all odors have been detected, the data can be exported as CSV, XLSX, or PDF. Click on the appropriate icon at the top of the table.
The filename of the data export is made up of the date/time of injection for uniqueness and as a record of the date/time.

The project was initiated to help [Aidan F Kirkwood](https://twitter.com/aidanolide) at Nottingham University with his PhD research.