import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>{gameName}</i> is a remake of the word game{" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        by <a href="https://twitter.com/powerlanguish">powerlanguage</a>, which
        I think is based on the TV show <i>Lingo</i>.
      </p>
      <p>
        You get {maxGuesses} tries to guess a target word.
        <br />
        After each guess, you get Mastermind-style feedback.
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "t" },
          { clue: Clue.Absent, letter: "i" },
          { clue: Clue.Correct, letter: "n" },
          { clue: Clue.Elsewhere, letter: "a" },
        ]}
      />
      <p>
        <b>t</b> and <b>i</b> aren't in the target word at all.
      </p>
      <p>
        <b className={"green-bg"}>n</b> is correct! The third letter is{" "}
        <b className={"green-bg"}>n</b>
        .<br />
        <strong>(There may still be a second n in the word.)</strong>
      </p>
      <p>
        <b className={"yellow-bg"}>a</b> occurs <em>elsewhere</em> in the target
        word.
        <br />
        <strong>(Perhaps more than once. 🤔)</strong>
      </p>
      <hr />
      <p>
        Let's move the <b>a</b> in our next guess:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "s" },
          { clue: Clue.Absent, letter: "h" },
          { clue: Clue.Correct, letter: "u" },
          { clue: Clue.Correct, letter: "t" },
        ]}
        annotation={"So close!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "s" },
          { clue: Clue.Correct, letter: "l" },
          { clue: Clue.Correct, letter: "u" },
          { clue: Clue.Correct, letter: "t" },
        ]}
        annotation={"Got it!"}
      />
      <p>
        This game will be free and ad-free forever,
        <br />
        its as priceless as punching Jesso in the face.
      </p>
    </div>
  );
}
