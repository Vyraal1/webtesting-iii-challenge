# Testing III

In this project, you will demonstrate proficiency by writing unit tests for an existing React application. Your tests should verify the behavior listed in the _Minimum Viable Product_ section.

Some of the topics covered were:

- Testing a React application.
- Using the `react-testing-library` testing framework.
- Writing unit tests for React components.

## Project Description

In this project, you will **write unit tests** for an existing React application that controls a gate and shows two LEDs that portrait the status of the gate.

The requirements are listed under the _Minimum Viable Product_ section below.

## Minimum Viable Product

Your job is to write unit tests to ensure that the application behaves as expected.

The expected/assumed behavior of the application is listed below.

### Gate

- defaults to `unlocked` and `open`
- cannot be closed or opened if it is locked

### Dashboard

~~- shows the controls and display~~

### Display Component

~~- displays if gate is open/closed and if it is locked/unlocked~~
~~- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise~~
~~- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise~~
~~- when `locked` or `closed` use the `red-led` class~~
~~- when `unlocked` or `open` use the `green-led` class~~

### Controls Component

~~- provide buttons to toggle the `closed` and `locked` states.~~
~~- buttons' text changes to reflect the state the door will be in if clicked~~
~~- the closed toggle button is disabled if the gate is locked~~
~~- the locked toggle button is disabled if the gate is open~~

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- add `Redux` and [read this example in the docs](https://testing-library.com/docs/example-react-redux) to learn how to write tests for it.
