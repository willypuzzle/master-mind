# Master Mind
## A number guessing game in quasar framework

> Description and requirements:

- At every round the player should discover a secret code. This code is made of a configurable amount of digit. The range of the digits is configurable too. 
- If the player discovers the correct sequence of the code, they win, otherwise the system provide some hints to the player.
- The types of hints are two: the first is that the system provides the digits the player guessed correctly but are in wrong position and the second is that the system provides the digits the player guessed correctly and are in right position.
- The player could give up at any time, in this case the code is revelead to the user.

> Additional features
- Support for i18n (only english is supported at the moment)

## Instructions

### Development environment
> It requires npm package manager:

- Install [quasar-cli](https://quasar-framework.org/guide/quasar-cli.html).

- Launch `npm install` command
- Launch `quasar dev` command
