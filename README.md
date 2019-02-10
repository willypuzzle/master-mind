# Master Mind
## A number guessing game in quasar framework

> Description and requirements:

- At every round the player should discover a secret code. This code is made of a configurable amount of digit. The range of the digits is configurable too. 
- If the player discovers the correct sequence of the code, they win, otherwise the system provide some hints to the player.
- The types of hints are two: the first is that the system provides the digits the player guessed correctly but are in wrong position and the second is that the system provides the digits the player guessed correctly and are in right position.
- The player could give up at any time, in this case the code is revelead to the user.
   
> Additional features:
- duel: two players can fight each other. Every of them gives a secret code and, in turn, every player should guess the code of other.
- configuration: it can be possible set the difficult of the game by setting the number of the secret code digits and setting the range of the digits.
- Ranking: the best player are displayed in the top ten ranking based on the number of guessings. Less guessings, better position.
