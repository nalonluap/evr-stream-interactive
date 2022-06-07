<script>
export default {
  name: 'PoleWords',
  props: {
    msg: String
  }
}
</script>

<template>
  <main>
    <section class="modal">
      <i class="material-icons close">close</i>
      <template v-if="gameWon">
        <div class="icon win"><i class="material-icons">check</i></div>
        <span class="header">Well done!</span>
        <span class="text">You guessed the correct word</span>
      </template>
      <template v-else>
        <div class="icon lose"><i class="material-icons">close</i></div>
        <span class="header">You lost!</span>
        <span class="text">The correct word was</span>
      </template>
      <Score :score="score" />
      <button></button>
      <span class="hint">
        Hint: Press <kbd>Enter</kbd> on your keyboard to quickly start a new game or <kbd>Escape</kbd> to close this
        dialog.
      </span>
    </section>
  </main>
</template>

<style lang="scss" scope>
main {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(174, 255, 0);
  padding: 1rem;
  @media only screen and (max-width: 400px) {
    padding: 0.5rem;
  }
  section.modal {
    width: 300px;
    height: max-content;
    background-color: rgb(104, 131, 63);
    margin-top: 5rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 5px 5px 5px rgba#000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    div.icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      margin-bottom: 1rem;
      &.win {
        background-color:greenyellow;
      }
      &.lose {
        background-color: greenyellow;
      }
    }
    button {
      margin-top: 0.5rem;
      cursor: pointer;
      appearance: none;
      border: none;
      background-color: greenyellow;
      font-weight: 400;
      padding: 0.5rem 1rem;
      border-radius: 999px;
      &:hover {
        opacity: 0.75;
      }
    }
    span {
      font-weight: 400;
      text-align: center;
    }
    span.text {
      font-size: 0.9rem;
      margin: 0.5rem 0;
    }
    span.hint {
      margin-top: 1rem;
      font-size: 0.7rem;
      // line-height: 1.8;
    }
    i.close {
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>